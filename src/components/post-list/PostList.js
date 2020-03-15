import React, { useState, useEffect } from 'react';
import './Post.css';

export default function PostList(props) {
    const [displayLink, setDisplayLink] = useState(false);
    const hideLinks = () => setDisplayLink(c => !c);

    const { files, title, showLinks } = props;

    let shortTitle = title.split('/').pop();
    let fileName = (str) => str.split('/').pop();

    let listRender = showLinks ? files.map((x, i) => <li key={i}><a href={x}>{x}</a></li>) :
        files.map((x, i) => <li key={i}><a href={x}>{fileName(x)}</a></li>);

    return (
        <div style={{ width: '100%' }} className="entry_container">
            <h3>{shortTitle}</h3>
            <span>File count </span> : <b>{files.length}</b>
            <button onClick={hideLinks} style={{ "marginLeft": "10px" }, { "display": files.length > 0 ? "block" : "none" }} className={["btn", "btn-primary"].join(" ")}>Show Links</button>
            <div style={{ "display": displayLink ? "block" : "none" }}>
                <ul className="links_list">
                    {listRender}
                </ul>
            </div>
        </div>
    )
}