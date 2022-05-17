import React from 'react';
import './styles.css';
import { Input, Modal } from '../../core';
import { PhoneIcon, MailIcon } from '@heroicons/react/solid';
import { CheckCircleIcon } from '@heroicons/react/outline';
import emailjs from '@emailjs/browser';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: "",
                errors: null
            },
            email: {
                value: "",
                errors: null
            },
            message: {
                value: "",
                errors: null
            },
            successModal: false,
            sending: false
        }
    }

    componentDidMount = () => { }

    validateName = (value) => {
        let error = null;
        if (value.length === 0) {
            error = "Name cannot be blank"
        }

        this.setState({
            name: {
                value: value,
                errors: error
            }
        });
    }

    validateMessage = (value) => {
        let error = null;
        if (value.length === 0) {
            error = "Message cannot be blank"
        }

        this.setState({
            message: {
                value: value,
                errors: error
            }
        });
    }

    validateEmail = (value) => {
        let error = null;
        let check = /\S+@\S+\.\S+/;
        if (value.length === 0) {
            error = "Email cannot be blank";
        } else if (!check.test(value)) {
            error = "Email is not valid";
        } else {
            error = null
        }

        this.setState({
            email: {
                value: value,
                errors: error
            }
        });
    };

    sendMessage = (e) => {
        this.setState({
            sending: true
        })
        e.preventDefault();
        Promise.all([
            this.validateName(this.state.name.value),
            this.validateEmail(this.state.email.value),
            this.validateMessage(this.state.message.value)
        ]).then(() => {
            if (!this.state.name.errors && !this.state.email.errors && !this.state.message.errors) {
                emailjs.sendForm(this.props.serviceId, this.props.templateId, '#eForm', this.props.publicId)
                    .then(res => {
                        console.log(res);
                        document.body.style.overflow = "hidden";
                        this.setState({ sending: false, successModal: true });
                    })
                    .catch(error => {
                        console.error(error);
                    })
            }
        })
    }

    modalClose = () => {
        document.body.style.overflow = "auto";
        this.setState({ successModal: false })
    }

    renderModal = () => {
        return (
            <Modal>
                <div className='flex flex-col justify-center items-center px-10'>
                    <CheckCircleIcon className='h-[100px] w-[100px] text-green-500' />
                    <div className='mt-2'>
                        <h1 className='text-2xl font-semibold mb-5'>Success!</h1>
                        <p>Your message has been sent.</p>
                    </div>
                    <button onClick={this.modalClose} className='success-modal-btn mt-7 bg-red-600 text-base text-white px-5 py-1 rounded-lg border-1 border-white hover:text-black hover:bg-white hover:border-1 transition duration-300 ease-in'>Close</button>
                </div>
            </Modal>
        )
    }

    render() {
        return (
            <>
                {this.state.successModal ? this.renderModal() : null}
                <div className="contact-us pb-[100px] relative">
                    <div className='contact-content relative z-[3]'>
                        <h1 className='text-3xl px-4 pt-10 font-semibold text-white'>Contact Us</h1>
                        <hr className='w-[50px] m-auto mt-3 mb-3 bg-white border-0 h-[1px]' />
                        <div data-aos="flip-left" data-aos-duration="1000" data-aos-once="true" className='contact-body flex flex-col md:bg-white md:w-[80%] lg:w-[60%] md:px-1 md:flex-row space-y-2 md:space-y-0 text-black mt-10 mx-auto rounded-lg'>
                            <div className='contact-form md:pb-2 pt-2 pb-2 p-8 md:p-0 w-[100%] md:w-[500px] lg:w-[50%]'>
                                <div className='bg-white rounded-xl p-8 pb-8 md:pb-1 text-gray-600'>
                                    <form id='eForm' className='flex flex-col space-y-5'>
                                        <div>
                                            <Input
                                                label={'Your Name'}
                                                name="name"
                                                value={this.state.name.value}
                                                required={true}
                                                errors={this.state.name.errors}
                                                onInput={ev => this.validateName(ev.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <Input
                                                label={'Email Address'}
                                                type="email"
                                                name="email"
                                                value={this.state.email.value}
                                                required={true}
                                                errors={this.state.email.errors}
                                                onInput={ev => this.validateEmail(ev.target.value)}
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
                                                errors={this.state.message.errors}
                                                onInput={ev => this.validateMessage(ev.target.value)}
                                            />
                                        </div>
                                        <button disabled={this.state.sending} onClick={this.sendMessage} className={`submit-btn text-sm text-white font-semibold h-[40px] w-[150px] rounded-lg text-white border-1 border-white hover:text-black hover:bg-white hover:border-1 hover:border-black transition duration-300 ease-in uppercase rounded-xl mx-auto ${this.state.sending ? 'opacity-20' : ''}`}>Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className='location-map p-8 pb-1 pt-1 md:p-0 md:w-[500px] lg:w-[50%]'>
                                <iframe
                                    title='googlemaps'
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3861.7347871315224!2d121.02480788844183!3d14.557153133646374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdfb49914c6c868db!2sGROW%20Vite%20Staffing%20Services%20Inc.!5e0!3m2!1sen!2sph!4v1652266728809!5m2!1sen!2sph"
                                    height="450"
                                    style={{ border: '0', borderRadius: '5px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-[100%] my-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact-numbers bg-white'>
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true" className='w-full md:h-[120px] md:flex md:flex-col justify-center items-center py-24'>
                        <h1 className='flex md:hidden font-semibold pl-5 pb-3'>Email Address</h1>
                        <div className='email-addresses flex flex-col md:flex-row pl-5'>
                            <div className='flex p-2'>
                                <MailIcon className='h-[20px] w-[20px]' />
                                <a className="pl-2 text-base" href="mailto:abc@example.com">
                                    info@venturesec.com
                                </a>
                            </div>
                            <div className='flex p-2'>
                                <MailIcon className='h-[20px] w-[20px]' />
                                <a className="pl-2 text-base" href="mailto:abc@example.com">
                                    venturesecurities@yahoo.com
                                </a>
                            </div>
                        </div>
                        <h1 className='flex md:hidden font-semibold pl-5 pb-3 pt-5'>Contact Number</h1>
                        <div className='phone-numbers flex flex-col md:flex-row pl-5'>
                            <div className='flex p-2'>
                                <span className='p-1'>
                                    <PhoneIcon className='h-[20px] w-[20px]' />
                                </span>
                                <p className='text-sm sm:text-base pt-1 pl-2'>Office Tel/Fax : (02) 8848-6505 : (02) 8848-2210</p>
                            </div>
                            <div className='flex p-2'>
                            <span className='p-1'>
                                    <PhoneIcon className='h-[20px] w-[20px]' />
                                </span>
                                <p className='text-sm sm:text-base pt-1 pl-2'>Traders : (02) 8891-9420 to 21</p>
                            </div>
                            <div className='flex p-2'>
                            <span className='p-1'>
                                    <PhoneIcon className='h-[20px] w-[20px]' />
                                </span>
                                <p className='text-sm sm:text-base pt-1 pl-2'>Trading Floor Contact Number: +63 02 8919420 to 21</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactUs;