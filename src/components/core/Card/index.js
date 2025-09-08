import "./styles.css";
import React from "react";

function Card(props) {
  React.useEffect(() => {
    window.addEventListener("resize", props.handleResize);
  });

  const gridCounts = {
    1: `grid-cols-[repeat(1,_minmax(0,_25%))]`,
    2: `grid-cols-[repeat(2,_minmax(0,_25%))]`,
    3: `grid-cols-[repeat(3,_minmax(0,_25%))]`,
    4: `grid-cols-[repeat(4,_minmax(0,_25%))]`,
    5: `grid-cols-[repeat(5,_minmax(0,_25%))]`,
    6: `grid-cols-[repeat(6,_minmax(0,_25%))]`,
  };

  let singleArrayData = props.data.reduce((a, b) => a.concat(b), []);

  const renderData = (data) => {
    if (props.noOfItems > 0) {
      return singleArrayData.map((item, idx) => {
        if (props.noOfItems >= idx + 1) {
            return renderCard(item, idx);
        }
        return null;
      });
    } else {
      return data.map((row, idx) => {
        return (
          <div
            className={`row-${idx} grid ${
              gridCounts[row.length]
            } justify-center gap-5 mb-5`}
          >
            {row.map((item, id) => {
              return renderCard(item, id);
            })}
          </div>
        );
      });
    }
  };

  const renderCard = (item, i) => {
    return (
      <div
        data-aos="zoom-in-up"
        data-aos-once="true"
        key={i}
        className={`item${i} col w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] xl:w-[80%] m-auto max-w-[220px]`}
      >
        <div className="team-content relative h-full border-4 border-gray-300 border-opacity-60 rounded-2xl overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}${item.image}`}
            alt="pic.jpg"
            className="lg:h-[21rem] md:h-[18rem] sm:h-[17rem] h-[22rem] w-full object-cover object-center"
          />
          <div className="absolute z-10 bottom-0 w-full h-[30%] bottom-0 bg-gradient-to-b from-transparent via-gray-800/80 to-zinc-800 flex flex-col justify-end">
            <h1 className="main-text text-base sm:text-base md:text- lg:text-lg xl:text-base font-semibold h-[35px] text-white">
              {item.mainText}
            </h1>
            <h2 className="sub-text text-base sm:text-sm 2xl:text-base font-medium text-indigo-300 mb-[1.25rem] h-[35px]">
              {item.subText}
            </h2>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`md:h-full flex items-center text-gray-600 ${
        props.className || ""
      }`}
    >
      <div className="container px-5 py-12 mx-auto">
        <div className="grid-items transition ease-in duration-300">
          {renderData(props.data)}
        </div>
        {singleArrayData.length > props.noOfItems && props.noOfItems > 0 ? (
          <div className="see-more-box">
            <button
              onClick={() => {
                props.showAllList(singleArrayData.length)
              }}
              className="see-more-btn text-sm font-semibold mt-10 px-10 py-3 mb-10 rounded-2xl text-white border-2 border-white hover:text-black hover:bg-white hover:border-2 hover:border-black transition duration-300 ease-in uppercase"
            >
              See More
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Card;
