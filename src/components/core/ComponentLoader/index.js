import React from "react";
import "./styles.css";

class ComponentLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render = () => {
        const { className, id, children } = this.props;
        return (
            <div
                className={className || ""}
                id={id || ""}>
                    {children || null}
            </div>
        );
    } 
}

export default ComponentLoader;