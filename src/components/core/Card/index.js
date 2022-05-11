import "./styles.css";
import React from 'react';

function Card(props) {

    React.useEffect(() => {
        window.addEventListener('resize', props.handleResize);
    })

    const renderCard = (item, i) => {
        return (
            <div key={i} className={`item${i} col transition ease-in p-5 px-3 md:px-5 w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[80%] m-auto`}>
                <div className="team-content relative h-full border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden">
                    <img src={`${process.env.PUBLIC_URL}${item.image}`} alt="pic.jpg" className="lg:h-[18rem] md:h-[14rem] sm:h-[17rem] h-[22rem] w-full object-cover object-center" />
                    <div className="p-6 bg-gradient-to-r hover:text-white z-10 w-full hover:from-red-500 hover:to-red-700 transition duration-300 ease-in">
                        <h2 className="sub-text text-base sm:text-sm font-medium text-indigo-300 mb-1 h-[35px]">{item.subText}</h2>
                        <h1 className="main-text text-base sm:text-base md:text- lg:text-xl font-semibold h-[50px]">{item.mainText}</h1>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`md:h-full flex items-center text-gray-600 ${props.className || ''}`}>
            <div className="container px-5 py-12 mx-auto">
                <div className="grid-items grid transition ease-in duration-300 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:w-[80%] justify-center -m-4">
                    {props.data.map((item, i) => {
                        if (props.noOfItems) {
                            if (props.noOfItems >= i + 1) {
                                return renderCard(item, i);
                            }
                            return null;
                        }
                        return renderCard(item, i);
                    })}
                </div>
                {props.data.length > props.noOfItems && props.noOfItems ? (
                    <div className='see-more-box hidden'>
                        <button onClick={props.showAllList} className='see-more-btn font-semibold mt-10 px-10 py-3 mb-10 rounded-3xl text-white border-2 border-white hover:text-black hover:bg-white hover:border-2 hover:border-black transition duration-300 ease-in uppercase'>See More</button>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default Card;