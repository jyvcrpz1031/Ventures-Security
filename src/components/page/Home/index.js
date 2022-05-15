import React from "react";
import { Text } from '../../core';
import "./styles.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
    }

    render() {
        return (
            <div className="home-section h-100 w-full relative">
                <img alt="bg.jpg" src={`${process.env.PUBLIC_URL}${this.props.bg}`} className="w-full h-full object-cover fixed z-[-1]" />
                <div className="content h-full w-full flex h-screen justify-center items-center">
                    <div className="header z-[3] text-center">
                        <h2 data-aos="fade-right" data-aos-once="true" className="text-5xl md:text-6xl">{this.props.header}</h2>
                        <Text dataAos="fade-left" className="venture-adv mt-10 md:text-xl" text={this.props.infoText} />
                        <Text dataAos="fade-right" className="venture-adv2 mb-[20px] md:text-xl" text={this.props.infoText1} />
                        <Text dataAos="fade-left" className="venture-adv3 md:text-xl" text={this.props.infoText2} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;