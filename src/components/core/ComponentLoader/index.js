import React, { Children } from "react";
import "./styles.css";

class ComponentLoader extends React.Component {
    constructor(props) {
        super(props);
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