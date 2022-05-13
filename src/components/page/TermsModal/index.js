import "./styles.css";
import axios from "axios";
import { Text, Modal } from '../../core';
import { urlTerms } from "../../../variables";
import { XIcon } from '@heroicons/react/solid';
import React from 'react';

class TermsModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            terms: [],
            modalOpen: true
        }
    }

    async fetchTerms() {
        axios.get(urlTerms)
            .then(res => {
                this.setState({
                    terms: res.data
                });
            })
            .catch(err => {
                console.error("Terms >> Fetch Error >> ", err)
            })
    }

    componentDidMount = () => { 
        this.fetchTerms();
    }

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    render() {
        const { terms, modalOpen } = this.state;


        return (
            <div className="terms-modal">
                <Modal className={modalOpen ? "block" : "hidden"}>
                    <div className="modal-header relative border-b border-slate-400 pb-5 text-left">
                        <Text className="text-base md:text-lg font-semibold sm:mr-10" text={terms.title}/>
                        <span onClick={this.closeModal} className="hover:bg-gray-300 rounded-md h-[20px] w-[20px] absolute top-1 right-0">
                            <XIcon className='h-[20px] w-[20px] hidden sm:block text-gray-600' />
                        </span>
                    </div>
                    <div className="modal-body pt-5 pb-5 sm:pb-0 text-left">
                        <Text divClass="infoText px-2 max-h-[370px] sm:max-h-[450px]" className="overflow-auto" dangerousText={terms.info}/>
                    </div>
                    <div className="close-box sm:hidden border-t border-slate-400 pt-5">
                        <button onClick={this.closeModal} className="close-btn float-right text-sm text-white font-semibold h-[40px] w-[150px] rounded-3xl text-white border-1 border-white hover:text-black hover:bg-white hover:border-1 hover:border-black transition duration-300 ease-in uppercase rounded-[15px] mx-auto">Close</button>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default TermsModal;