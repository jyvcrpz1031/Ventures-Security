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
                console.error("NANDE?? ", err)
            })
    }

    scrollToComp = (id) => {
      const element = document.getElementById(`${id}`).offsetTop - 70;
      window.scrollTo({ top: element, behavior: 'smooth' })
    }

    componentDidMount = () => {
        this.fetchNavs();
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
                            className={activeTab === menu.id ? 'active' : ''}
                            onClick={() => {
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