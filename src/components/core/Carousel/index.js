import React from 'react';
import './styles.css';
// import { ChevronLeft, ChevronRight } from '@mui/icons-material';

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
        this.setState({
            data: [...this.props.children]
        })
        this.startSlide();
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

        carouselWrap.style.justifyContent = "flex-start";
        carouselWrap.style.transform = "translate(-100%)";

        carouselWrap.addEventListener('transitionend', () => {
            carouselWrap.style.transition = "none";
            carouselWrap.style.transform = "translate(0)";
            setTimeout(() => {
                carouselWrap.style.transition = "ease-in 0.5s";
            });

            const firstItem = data[0];

            data.shift();
            this.setState({
                data: [...data, firstItem]
            })
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
            <div className={`carousel-wrap ${this.props.className}`}>
                <div className='carousel-scroll py-[25px] relative'>
                    <span className='icon-prev' onClick={this.prevSlide}>
                        {/* <ChevronLeft
                            fontSize='large'
                            sx={{ fontSize: "70px", opacity: "0.1" }}
                        /> */}
                    </span>
                    <span className='icon-next' onClick={this.nextSlide}>
                        {/* <ChevronRight
                            fontSize='large'
                            sx={{ fontSize: "70px", opacity: "0.1" }}
                        /> */}
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
                </div>
            </div>
        );
    }
}

export default Carousel;