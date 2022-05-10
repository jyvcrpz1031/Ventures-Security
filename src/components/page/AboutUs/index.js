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
        if (this.props.data === 0) {
            return 
        }
        
        return (
            <div className="about-us whitespace-pre-line">
                <Carousel className="about-carousel" animationSpeed={6000}>
                    {this.props.data.map((item, i) => {
                        return (
                            <div className='about-content h-[32rem px-10 md:px-32 lg:px-60' key={i}>
                                <span className='block text-3xl pb-8'>{item.title}</span>
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