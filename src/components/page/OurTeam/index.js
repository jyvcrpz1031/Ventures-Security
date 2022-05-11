import React from 'react';
import './styles.css';
import { Card } from '../../core';

class OurTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "boardofdirectors",
            noOfItems: 0,
            currWidth: null
        }
    }

    componentDidMount = () => {
        this.setState({
            currWidth: window.innerWidth
        })
        this.checkNoOfItemsToDisplay();
    }

    changeTab = (tab) => {
        this.setState({
            activeTab: tab
        });
        this.checkNoOfItemsToDisplay();
    }

    checkNoOfItemsToDisplay = () => {
            let items = null;
            if (window.innerWidth < 640) {
                items = 3;
            }

            this.setState({ noOfItems: items });
    }

    handleResize = () => {
        if (window.innerWidth !== this.state.currWidth) {
            this.checkNoOfItemsToDisplay();
            this.setState({
                currWidth: window.innerWidth
            }) 
        }
    }

    showAllList = () => {
        this.setState({ noOfItems: null });
    }

    render() {
        const { activeTab } = this.state;

        if (this.props.data === 0) {
            return
        }

        return (
            <div className="our-team whitespace-pre-line mt-12">
                <div className="text-center items-center justify-center">
                    <h1 className="text-3xl md:text-3xl font-semibold">Our Team</h1>
                    <hr className='w-[50px] m-auto mt-3 bg-black border-0 h-[1px]' />
                </div>

                <ul className='flex justify-center items-center mt-4 text-lg'>
                    {this.props.data.map((item, i) => {
                        return (
                            <li className='mx-3' key={i}>
                                <span onClick={this.changeTab.bind(this, item.id)} className={`title cursor-pointer ${activeTab === item.id ? "font-semibold" : "opacity-40 hover:opacity-100"}`}>{item.title}</span>
                            </li>
                        )
                    })}
                </ul>

                {this.props.data.map((item, i) => {
                    return (
                        item.id === activeTab ? (
                            <Card
                                key={i}
                                showAllList={this.showAllList}
                                className={`our-team-list ${item.id}`}
                                handleResize={this.handleResize}
                                data={item.list}
                                noOfItems={this.state.noOfItems}
                            />
                        ) : null
                    )
                })}
            </div>
        );
    }
}

export default OurTeam;