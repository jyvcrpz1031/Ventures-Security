import "./styles.css";

function Card(props) {
    return (
        <div className={`md:h-full flex items-center text-gray-600 ${props.className || ''}`}>
            <div className="container px-5 py-12 mx-auto">
                <div className="grid-items grid transition ease-in duration-300 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:w-[80%] justify-center -m-4">
                    {props.data.map((item, i) => {
                        return (
                            <div key={i} className={`item${i} col transition ease-in p-5 px-3 md:px-5 w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[80%] m-auto`}>
                                <div className="team-content relative h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                                    <img src={`${process.env.PUBLIC_URL}${item.image}`} alt="pic.jpg" className="lg:h-[18rem] md:h-[14rem] sm:h-[17rem] h-[22rem] w-full object-cover object-center" />
                                    <div className="p-6 bg-gradient-to-r hover:text-white z-10 w-full hover:from-red-500 hover:to-red-700 transition duration-300 ease-in">
                                        <h2 className="sub-text text-base font-medium text-indigo-300 mb-1 h-[50px]">{item.subText}</h2>
                                        <h1 className="main-text text-2xl sm:text-base font-semibold h-[50px]">{item.mainText}</h1>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Card;