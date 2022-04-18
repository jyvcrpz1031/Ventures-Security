import React from 'react';
import './styles.css';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        console.error(process.env);
    }

    render () {
        return (
            <div className="ContactUs">
                CONTACTUS PAGE
            </div>
          );
    }
}

export default ContactUs;