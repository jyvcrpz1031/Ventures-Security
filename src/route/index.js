import React from "react";
import axios from "axios";
import { ComponentLoader } from "../components";
import { urlPages } from "../variables";
import * as Page from '../components/page';
import "./styles.css";

class RenderPages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: null
        };
    }

    async fetchPages() {
        axios.get(urlPages)
            .then(res => {
                this.setState({
                    pages: res.data
                });
            })
            .catch(err => {
                console.error("Fetch >> urlPages >> Error", err)
            })
    }

    componentDidMount = () => {
        this.fetchPages();
    }

    renderComp = (data) => {
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
            console.error('Component >> renderContent >> Error:', err);
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
                            key={idx}
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
            <div className="main-content">
                {this.renderPage()}
            </div>
        );
    }
}

export default RenderPages;