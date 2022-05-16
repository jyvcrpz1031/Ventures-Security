import "./styles.css";
import React from 'react';
import { ChevronDoubleUpIcon } from '@heroicons/react/solid';

function ScrollToTop (props) {
    const [scroll, setScroll] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100 && !scroll) {
                setScroll(true);
            }
            if (window.pageYOffset === 0 && scroll) {
                setScroll(false);
            } 
        })
    });

    const backToTop = () => {
        const element = document.getElementById("home").offsetTop - 70;
        window.scrollTo({ top: element, behavior: 'smooth' })
    }

    return (
        <div data-aos="fade-up" className={`${!scroll ? 'hidden' : 'block'} scroll-to-top flex justify-center items-center fixed h-[50px] w-[50px] rounded-lg bg-white bottom-10 right-10 z-40`}>
            <span onClick={backToTop} className="">
                <ChevronDoubleUpIcon className="h-[30px] w-[30px] text-white"/>
            </span>
        </div>
    );
}

export default ScrollToTop;