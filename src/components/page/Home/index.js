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
            <div className="home-section h-100 w-full relative">
                <div className="content isolate z-[4] h-full w-full flex h-[845px] md:h-[1000px] justify-center items-center">
                    <div className="header z-[1] text-center">
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