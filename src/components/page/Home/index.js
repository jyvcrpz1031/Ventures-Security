import React from "react";
import { Text } from '../../core';
import "./styles.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {}

    render() {
        return (
            <div className="home-section bg-gradient-to-tr from-gray-900 to-amber-800 h-100 w-full relative">
                <img src={`${process.env.PUBLIC_URL}${this.props.bg}`} className="w-full h-full object-cover absolute mix-blend-overlay" />
                <div className="content h-full w-full flex h-screen justify-center items-center">
                    <div className="header text-center">
                        <h2 className="text-5xl md:text-6xl">{this.props.header}</h2>
                        <Text className="venture-adv mt-10" text={this.props.infoText} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;