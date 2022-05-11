import "./styles.css";
import { Text } from '../../core';
import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {}

    render() {
        return (
            <div className="footer-box">
              <Text className="p-4 text-white font-semibold" text={this.props.text}/>
            </div>  
          );
    }
}

export default Footer;