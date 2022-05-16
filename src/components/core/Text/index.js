import "./styles.css";

function Text (props) {
    return (
      <div data-aos={props.dataAos} data-aos-once="true" className={`text-box ${props.divClass || ''}`}>
        {props.dangerousText ? (
          <p className={`text ${props.className || ''}`} dangerouslySetInnerHTML={{__html: props.dangerousText}}/>
        ) : (
          <p className={`text ${props.className || ''}`}>{props.text}</p>
        )}
      </div>  
    );
}

export default Text;