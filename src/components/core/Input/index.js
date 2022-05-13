import "./styles.css";

function Input(props) {
    const label = props.label || '';
    return (
        <div className={`input-text text-left ${props.className || ""}`}>
            {label ?
                <div className="text-left mb-3 text-sm">
                    <label className="text-black" htmlFor={label}>
                        {label} {props.required ? <span className="required-field">*</span> : ""}
                    </label>
                </div> : null}

            {props.type === "textarea" ? (
                <textarea
                    rows={props.rows}
                    id={label || props.id}
                    value={props.value}
                    name={props.name}
                    disabled={props.disabled}
                    readOnly={props.readOnly}
                    onInput={ev => {
                        if (
                            !props.maxLength ||
                            (props.maxLength && ev.target.value.length <= props.maxLength)
                        ) {
                            props.onInput(ev);
                        }
                    }}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    autoCapitalize="false"
                    className={`ring-1 ring-gray-300 ${props.errors === null ? "" : "ring-red-500"} appearance-none w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${props.className || ''}`}
                />
            ) : props.type === 'email' ? (
                <input
                    type="email"
                    value={props.value}
                    disabled={props.disabled}
                    name={props.name}
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    onInput={ev => {
                        if (
                            !props.maxLength ||
                            (props.maxLength && ev.target.value.length <= props.maxLength)
                        ) {
                            props.onInput(ev);
                        }
                    }}
                    onKeyDown={ev => {
                        if (props.disableKeypress) {
                            ev.preventDefault();
                        }
                    }}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    autoCapitalize="false"
                    className={`ring-1 ring-gray-300 ${props.errors === null ? "" : "ring-red-500"} appearance-none w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${props.className || ''}`}
                />
            ) : props.type === 'number' ? (
                <input
                    type="number"
                    value={props.value}
                    name={props.name}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    onInput={ev => {
                        if (
                            !props.maxLength ||
                            (props.maxLength && ev.target.value.length <= props.maxLength)
                        ) {
                            props.onInput(ev);
                        }
                    }}
                    onKeyDown={ev => {
                        if (props.disableKeypress) {
                            ev.preventDefault();
                        }
                    }}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    autoCapitalize="false"
                    className={`ring-1 ring-gray-300 ${props.errors === null ? "" : "ring-red-500"} appearance-none w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${props.className || ''}`}
                />
            ) : (
                <input
                    type="text"
                    value={props.value}
                    name={props.name}
                    disabled={props.disabled}
                    placeholder={props.placeholder}
                    readOnly={props.readOnly}
                    onInput={ev => {
                        if (
                            !props.maxLength ||
                            (props.maxLength && ev.target.value.length <= props.maxLength)
                        ) {
                            props.onInput(ev);
                        }
                    }}
                    onKeyDown={ev => {
                        if (props.disableKeypress) {
                            ev.preventDefault();
                        }
                    }}
                    onBlur={props.onBlur}
                    onFocus={props.onFocus}
                    autoCapitalize="false"
                    className={`ring-1 ring-gray-300 ${props.errors === null ? "" : "ring-red-500"} appearance-none w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 ${props.className || ''}`}
                />
            )}
            <span className={`error-msg text-xs text-red-500 ${props.errors === null ? "hidden" : ""}`}>{props.errors}</span>
        </div>
    );
}

export default Input;