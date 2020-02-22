import React from 'react';
import './Post.css';

export default class PostList extends React.Component {

    constructor() {
        super();
        this.hideLinks = this.hideLinks.bind(this);
        this.state = {
            displayLink : "none"
        };
    }

    hideLinks() {
        if (this.state.displayLink === "none") {
            this.setState({
                displayLink: "block"
            });
        } else {
            this.setState({
                displayLink: "none"
            });
        }

    }

    render() {
        const files = this.props.files;
        const title = this.props.title.split('/').pop();
        const showLinks = this.props.showLinks;
        const fileName = (str) => {
            return str.split("/").pop()
        };
        const fileCount = files.length;
        const displayLink = this.state.displayLink;

        let listRender;
        if (showLinks) {
            listRender = files.map((x, i) => <li key={i}><a href={x}>{x}</a></li>);
        } else {
            listRender = files.map((x, i) => <li key={i}><a href={x}>{fileName(x)}</a></li>);
        }
        

        return (
            <div style={{ width: '100%' }} className="entry_container">
                <h3>{title}</h3>
                <span>File count </span> : <b>{fileCount}</b>
                <button onClick={this.hideLinks} style={{"marginLeft" : "10px"}, {"display" : fileCount > 0 ? "block" : "none"}} className={["btn", "btn-primary"].join(" ")}>Show Links</button>
                <div style={{ "display": displayLink  }}>
                    <ul className="links_list">
                        {listRender}
                    </ul>
                </div>
            </div>
        )



    }
}