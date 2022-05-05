import React from "react";
import axios from "axios";
import { ComponentLoader } from "../components";
import { urlNavigation, urlPages } from "../variables";
import * as Page from '../components/page';
import "./styles.css";

class RenderPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [],
            pages: null
        };
    }

    async fetchNavigation () {
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

    async fetchPages () {
        axios.get(urlPages)
            .then(res => {
                this.setState({
                    pages: res.data
                });
            })
            .catch(err => {
                console.error("NANDE?? ", err)
            })
    }

    componentDidMount = () => {
        this.fetchNavigation();
        this.fetchPages();
    }

    renderComp = (data) => {
        console.error(data && Page[data.component]);
        try {
            if (data !== undefined && data.component !== undefined) {
              const Compo = Page[data.component] || null;
              if (Page !== undefined) {
                const props = {
                  ...data.props
                };
        
                return <Compo {...props} />;
              }
            }
            return null;
          } catch (err) {
            console.error('Widget Component >> renderContent >> Error:', err);
            return null;
          }
    }

    renderPage = () => {
        const { pages } = this.state;
        return (
            <div className="page-content">
                {pages && pages.map((page, idx) => {
                    return (
                        <ComponentLoader 
                            className="section"
                            id={page.id || `section${1}`}
                        >
                            {this.renderComp(page)}
                        </ComponentLoader>
                    )
                })}
            </div>
        )
    }

    render = () => {
        return (
            <div className="main-content h-full">
                {this.renderPage()}
            </div>
        );
    } 
}

export default RenderPages;