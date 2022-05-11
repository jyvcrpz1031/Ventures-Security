import React from 'react';
import './styles.css';
import { Input } from '../../core';
import { PhoneIcon, MailIcon } from '@heroicons/react/solid';
import emailjs from '@emailjs/browser';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
            },
            email: {
                value: ""
            },
            message: {
                value: ""
            }
        }
    }

    componentDidMount = () => { }

    nameChange = (value) => {
        this.setState({
            name: {
                value: value
            }
        })
    }

    emailChange = (value) => {
        this.setState({
            email: {
                value: value
            }
        })
    }

    messageChange = (value) => {
        this.setState({
            message: {
                value: value
            }
        })
    }

    sendMessage = (e) => {
        e.preventDefault();

        console.error(this.props.publicId);

        emailjs.sendForm(this.props.serviceId, this.props.templateId, '#eForm', this.props.publicId)
            .then(res => {
                console.error(res);
            })
            .catch(error => {
                console.error(error);
            })
    }

    render() {
        return (
            <>
                <div className="contact-us pb-[60px]">
                    <h1 className='text-3xl px-4 pt-4 font-semibold text-white'>Contact Us</h1>
                    <hr className='w-[50px] m-auto mt-3 mb-3 bg-white border-0 h-[1px]' />
                    <div className='flex flex-col md:bg-white md:w-[80%] lg:w-[60%] md:px-1 md:flex-row space-y-2 md:space-y-0 text-black mx-auto rounded-lg'>
                        <div className='contact-form md:pb-2 pt-2 pb-2 p-8 md:p-0 w-[100%] md:w-[500px] lg:w-[50%]'>
                            <div className='bg-white rounded-xl p-8 pb-8 md:pb-1 text-gray-600'>
                                <form id='eForm' className='flex flex-col space-y-5'>
                                    <div>
                                        <Input
                                            label={'Your Name'}
                                            name="name"
                                            value={this.state.name.value}
                                            required={true}
                                            onInput={ev => this.nameChange(ev.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            label={'Email Address'}
                                            type="email"
                                            name="email"
                                            value={this.state.email.value}
                                            required={true}
                                            onInput={ev => this.emailChange(ev.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <Input
                                            label={'Message'}
                                            type="textarea"
                                            name="message"
                                            rows="4"
                                            value={this.state.message.value}
                                            required={true}
                                            onInput={ev => this.messageChange(ev.target.value)}
                                        />
                                    </div>
                                    <button onClick={this.sendMessage} className='submit-btn text-white font-semibold h-[40px] w-[150px] rounded-3xl text-white border-1 border-white hover:text-black hover:bg-white hover:border-1 hover:border-black transition duration-300 ease-in uppercase rounded-lg mx-auto'>Send Message</button>
                                </form>
                            </div>
                        </div>
                        <div className='location-map p-8 pb-1 pt-1 md:p-0 md:w-[500px] lg:w-[50%]'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3861.7347871315224!2d121.02480788844183!3d14.557153133646374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfb49914c6c868db!2sGROW%20Vite%20Staffing%20Services%20Inc.!5e0!3m2!1sen!2sph!4v1652266728809!5m2!1sen!2sph"
                                height="450"
                                style={{ border: '0', borderRadius: '5px' }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                className="w-[100%] my-1"
                            />
                        </div>
                    </div>
                </div>
                <div className='contact-numbers md:flex md:flex-col w-full md:h-[120px] py-10 justify-center items-center'>
                    <h1 className='flex md:hidden font-semibold pl-5 pb-3'>Email Address</h1>
                    <div className='email-addresses flex flex-col md:flex-row pl-5'>
                        <div className='flex p-2'>
                            <MailIcon className='h-[20px] w-[20px]' />
                            <a className="pl-2 text-sm" href="mailto:abc@example.com">
                                info@venturesec.com
                            </a>
                        </div>
                        <div className='flex p-2'>
                            <MailIcon className='h-[20px] w-[20px]' />
                            <a className="pl-2 text-sm" href="mailto:abc@example.com">
                                venturesecurities@yahoo.com
                            </a>
                        </div>
                    </div>
                    <h1 className='flex md:hidden font-semibold pl-5 pb-3 pt-5'>Contact Number</h1>
                    <div className='phone-numbers md:flex pl-5'>
                        <div className='flex p-2'>
                            <PhoneIcon className='h-[20px] w-[20px]' />
                            <p className='text-sm pl-2'>Office Tel/Fax : (02) 8848-6505 : (02) 8848-2210</p>
                        </div>
                        <div className='flex p-2'>
                            <PhoneIcon className='h-[20px] w-[20px]' />
                            <p className='text-sm pl-2'>Traders : (02) 8891-9420 to 21</p>
                        </div>
                        <div className='flex p-2'>
                            <PhoneIcon className='h-[18px] w-[18px]' />
                            <p className='text-sm pl-2'>Trading Floor Contact Number: +63 02 8919420 to 21</p>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactUs;