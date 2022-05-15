import React from 'react';
import './styles.css';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

let timer = null;
let direction = -1;

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount = () => {
        if (this.state.data.length === 0) {
            this.setState({
                data: [...this.props.children]
            })
        }
        
        if (this.props.autoSlide === true) {
            this.startSlide();
        }
    }

    startSlide = () => {
        timer = setTimeout(() => {
            this.nextSlide();
        }, this.props.animationSpeed);
    }

    nextSlide = () => {
        clearTimeout(timer);

        const { data } = this.state;


        const carouselWrap = document.querySelector(`.${this.props.className || '.carousel-wrap'} .item-wrap`);

        if (direction === 1) {
            const lastItem = data[data.length - 1];

            data.pop();

            data.unshift(lastItem);
            this.setState({
                data: [...data]
            })

            carouselWrap.style.justifyContent = "flex-start";
        }

        carouselWrap.style.transform = "translate(-100%)";

        carouselWrap.addEventListener('transitionend', () => {
            carouselWrap.style.transition = "none";
            carouselWrap.style.transform = "translate(0)";
            setTimeout(() => {
                carouselWrap.style.transition = "ease-in 0.5s";
            });

            if (direction === -1) {
                const firstItem = data[0];

                data.shift();
                data.push(firstItem);
                this.setState({
                    data: [...data]
                })
            }
        })

        direction = -1;

        this.startSlide();
    }

    prevSlide = () => {
        clearTimeout(timer);

        const { data } = this.state;

        const carouselWrap = document.querySelector(`.${this.props.className || '.carousel-wrap'} .item-wrap`);

        if (direction === -1) {
            const firstItem = data[0];

            data.shift();
            data.push(firstItem);
            this.setState({
                data: [...data]
            })

            carouselWrap.style.justifyContent = "flex-end";
        }

        carouselWrap.style.transform = "translate(100%)";

        carouselWrap.addEventListener('transitionend', () => {
            carouselWrap.style.transition = "none";
            carouselWrap.style.transform = "translate(0)";
            setTimeout(() => {
                carouselWrap.style.transition = "ease-in 0.5s";
            });

            if (direction === 1) {
                const lastItem = data[data.length - 1];

                data.pop();

                data.unshift(lastItem);
                this.setState({
                    data: [...data]
                })
            }
        })

        direction = 1;

        this.startSlide();
    }



    render() {
        return (
            <div data-aos="fade-up" data-aos-once="true" className={`carousel-wrap ${this.props.className}`}>
                <div className='carousel-scroll py-[25px] relative'>
                    <span className='icon-prev' onClick={this.prevSlide}>
                        <ChevronLeftIcon className='h-[65px] w-[65px] text-black-500 opacity-10' />
                    </span>
                    <div className='item-wrap flex flex-nowrap mx-auto'>
                        {this.state.data.map((item, i) => {
                            return (
                                <div className={`item m-auto shrink-0 flex justify-center item-center item${i}`} key={i}>
                                    {item}
                                </div>
                            )
                        })}
                    </div>
                    <span className='icon-next' onClick={this.nextSlide}>
                        <ChevronRightIcon className='h-[65px] w-[65px] text-black-500 opacity-10' />
                    </span>
                </div>
            </div>
        );
    }
}

export default Carousel;