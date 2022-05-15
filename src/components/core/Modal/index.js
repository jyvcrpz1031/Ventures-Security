import "./styles.css";

function Text(props) {
    return (
        <div data-aos="zoom-out" data-aos-duration="800" data-aos-delay="1000" className={`${props.className || ''} modal-body px-3 sm:px-24 md:px-28 lg:px-60 xl:px-96 bg-black bg-opacity-50 fixed inset-0 z-20 h-screen flex justify-center items-center`}>
            <div data-aos="zoom-in" data-aos-duration="800" data-aos-delay="1000" className="modal-box bg-gray-200 p-6 rounded-lg max-h-[38rem]">
                <div className="modal-body">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Text;