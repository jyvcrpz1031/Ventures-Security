import "./styles.css";

function Text(props) {
    const label = props.label || '';
    return (
        <div className={`input-text ${this.props.className || ""}`}>
            {label ?
                <label htmlFor={label}>
                    {label} {props.required ? <span className="required">*</span> : ""}
                </label> : null}

            {props.type === "textarea" ? (
                <textarea />
            ) : null}

        </div>
    );
}

export default Text;