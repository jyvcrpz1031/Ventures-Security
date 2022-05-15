import React from 'react';
import axios from "axios";
import { urlNavigation } from "../../../variables";
import './styles.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false,
            activeTab: "home",
            menus: []
        }
    }

    async fetchNavs() {
        axios.get(urlNavigation)
            .then(res => {
                this.setState({
                    menus: res.data
                });
            })
            .catch(err => {
                console.error("Fetch Error >> Navigation >> ", err)
            })
    }

    scrollToComp = (id) => {
        this.updateActiveTab(id);
        const element = document.getElementById(`${id}`);
        window.scrollTo({ top: element.offsetTop - 70, behavior: 'smooth' });

        setTimeout(() => {
            window.addEventListener('scroll', this.getActiveTab);
        }, 1000);
    }

    updateActiveTab = (id) => {
        this.setState({
            activeTab: id,
        })
    }

    getActiveTab = () => {
        const links = document.querySelectorAll('.links');
        const sections = document.querySelectorAll('.section');

        let index = sections.length;
        while (--index && window.scrollY + 70 < sections[index].offsetTop) { }

        this.setState({
            activeTab: links[index].classList[0]
        }); 

    }

    componentDidMount = () => {
        this.fetchNavs();
        window.addEventListener('scroll', this.getActiveTab);
    }

    toggleNav = () => {
        this.setState({
            navToggle: !this.state.navToggle
        })
    }

    render() {
        const { menus, activeTab } = this.state;
        return (
            <div className="navigation-bar fixed">
                <div className='logo'>
                    <img src={`${process.env.PUBLIC_URL}/vsi-logo.png`} alt='vsi-logo' />
                </div>
                <div className={`nav-tabs ${this.state.navToggle ? 'open' : 'close'}`}>
                    {menus.map(menu => {
                        return <span
                            key={menu.id}
                            className={`${menu.id} links ${activeTab === menu.id ? 'active' : ''}`}
                            onClick={() => {
                                window.removeEventListener('scroll', this.getActiveTab);
                                this.scrollToComp(menu.id);
                                this.toggleNav();
                            }}
                        >{menu.pageName}</span>
                    })}
                </div>
                <span className='menu-icon' onClick={this.toggleNav}>
                    <img src={`${process.env.PUBLIC_URL}/menu.png`} alt='vsi-logo' />
                </span>
            </div>
        );
    }
}

export default Navigation;