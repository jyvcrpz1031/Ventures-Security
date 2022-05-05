import React from 'react';
import './styles.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navToggle: false,
            activeTab: "home",
            menus: [
                {
                    pageName: "Home",
                    redirect: "#home",
                    id: "home"
                },
                {
                    pageName: "About Us",
                    redirect: "#aboutus",
                    id: "aboutus"
                },
                {
                    pageName: "Get Started",
                    redirect: "#getstarted",
                    id: "getstarted"
                },
                {
                    pageName: "FAQS",
                    redirect: "#faqs",
                    id: "faqs"
                },
                {
                    pageName: "Contact Us",
                    redirect: "#contactus",
                    id: "contactus"
                }
            ]
        }
    }

    componentDidMount = () => {
        console.error(process.env);
    }

    toggleNav = () => {
        this.setState({
            navToggle: !this.state.navToggle
        })
    }

    render () {
        const { menus, activeTab } = this.state;
        return (
            <div className="navigation-bar fixed">
                <div className='logo'>
                    <img src={`${process.env.PUBLIC_URL}/vsi-logo.png`} alt='vsi-logo'/>
                </div>
                <div className={`nav-tabs ${this.state.navToggle ? 'open' : 'close'}`}>
                    {menus.map(menu => {
                       return <a 
                                href={menu.redirect} 
                                className={activeTab === menu.id ? 'active' : ''}
                                onClick={this.toggleNav}
                              >{menu.pageName}</a>
                    })}
                </div>
                <span className='menu-icon' onClick={this.toggleNav}>
                        <img src={`${process.env.PUBLIC_URL}/menu.png`} alt='vsi-logo'/>
                </span>
            </div>
          );
    }
}

export default Navigation;