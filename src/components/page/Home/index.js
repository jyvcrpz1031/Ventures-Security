import React from "react";
import { Text } from '../../core';
import "./styles.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {}

    render() {
        return (
            <div className="home-section bg-gradient-to-tr from-gray-900 to-amber-800 h-100 w-full relative">
                <img alt="bg.jpg" src={`${process.env.PUBLIC_URL}${this.props.bg}`} className="w-full h-full object-cover absolute mix-blend-overlay" />
                <div className="content h-full w-full flex h-[700px] justify-center items-center">
                    <div className="header text-center">
                        <h2 className="text-5xl md:text-6xl">{this.props.header}</h2>
                        <Text className="venture-adv mt-10 md:text-xl" text={this.props.infoText} />
                        <Text className="venture-adv2 mb-[20px] md:text-xl" text={this.props.infoText1} />
                        <Text className="venture-adv3 md:text-xl" text={this.props.infoText2} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;