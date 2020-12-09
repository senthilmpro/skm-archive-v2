import React, { useState } from 'react';
import './Post.css';

export default function PostList(props) {
    const [displayLink, setDisplayLink] = useState(false);
    const hideLinks = () => setDisplayLink(c => !c);

    const openDownloadUrl = (url) => {
        window.open(url, "_blank");
    }

    const { files, title, showLinks, url, showDL } = props;

    let shortTitle = title.split('/').pop();
    let fileName = (str) => str.split('/').pop();

    let listRender = showLinks ? files.map((x, i) => <li key={i}><a href={x}>{x}</a></li>) :
        files.map((x, i) => <li key={i}><a href={x}>{fileName(x)}</a></li>);

    return (
        <div className="post_container">
            <div style={{ width: '100%' }} className="entry_container">
                <h3>{shortTitle}</h3>
                <button className="btn btn-info dl-button" onClick={() => openDownloadUrl(url)} style={{"display" : showDL ? "block" : "none" }}>DL</button>
                <button onClick={hideLinks} style={{ "marginLeft": "10px", "display": files.length > 0 ? "block" : "none" }} className={["btn", "btn-primary", "link-button"].join(" ")}>Show Links</button>
            </div>
            <span className="files-count"><span>File count </span> : <b>{files.length}</b></span>
            <div style={{ "display": displayLink ? "block" : "none" }}>
                <ul className="links_list">
                    {listRender}
                </ul>
            </div>
        </div>
        
        
    )
}