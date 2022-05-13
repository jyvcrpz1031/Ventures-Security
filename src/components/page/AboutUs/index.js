import React from 'react';
import './styles.css';
import { Carousel } from '../../core';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount = () => {
    }

    render() {
        if (this.props.data.length === 0) {
            return null;
        }
        
        return (
            <div className="about-us whitespace-pre-line bg-white">
                <Carousel className="about-carousel" animationSpeed={6000} autoSlide={true}>
                    {this.props.data.map((item, i) => {
                        return (
                            <div className='about-content h-[32rem px-10 md:px-32 lg:px-60' key={i}>
                                <span className='block text-3xl font-semibold'>{item.title}</span>
                                <hr className='w-[50px] m-auto mt-3 bg-black border-0 h-[1px] mb-8' />
                                <span className='description h-auto text-sm' dangerouslySetInnerHTML={{__html: item.desc}} />
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        );
    }
}

export default ContactUs;