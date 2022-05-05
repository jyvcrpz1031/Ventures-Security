import "./styles.css";

function Text (props) {
    return (
      <div className="text-box">
          <p className={`text ${props.className}`}>{props.text}</p>
      </div>  
    );
}

export default Text;