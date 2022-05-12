import "./styles.css";

function Text(props) {
    return (
        <div className={`${props.className || ''} modal-body px-3 sm:px-24 md:px-28 lg:px-96 bg-black bg-opacity-50 fixed inset-0 z-20 h-screen flex justify-center items-center`}>
            <div className="modal-box bg-gray-200 p-6 rounded-lg max-h-[38rem]">
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Text;