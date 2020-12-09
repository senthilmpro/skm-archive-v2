import React, { useState, useEffect } from 'react';
import FetchService from '../../services/fetch-service';
import ArchiveService from '../../services/archive-service';
import PostList from '../post-list/PostList';
import './Home.css';

export default function HomeComponent() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [postsFound, setPostsFound] = useState(false);
    const [showLinks, setshowLinks] = useState(true);
    const [showDL, setShowDL] = useState(false);

    const getWpData = async () => {
        setLoading(true);
        let wpData = await FetchService.fetchWordpress();
        let archiveResponse = await FetchService.fetchArchiveUrl(wpData.posts);
        console.log("archiveResponse ", archiveResponse);
        let archiveData = archiveResponse.map(x => {
            return x.data
        });

        console.log("Archive Data : ", archiveData)

        let postsArr = [];
        archiveData.forEach((x, i) => {
            let obj = {
                title: wpData.posts[i].title,
                files: ArchiveService.getFileUrl(x),
                isDark: !!x.is_dark,
                url: ArchiveService.getDownloadUrl(x)
            };
            if (!obj.isDark) {
                postsArr.push(obj);
            }
            console.log(obj);
        });

        if (postsArr.length > 0) {
            setPostsFound(true);
            setData(postsArr);
        }
        setLoading(false);

        return postsArr;
    }

    const showFullLinks = () => setshowLinks(c => !c);

    const showDLButton = () => setShowDL(c => !c);

    const posts = data;
    const filesRender = posts.map(x => <li><PostList files={x.files} title={x.title} showLinks={showLinks} url={x.url} showDL={showDL} /></li>);

    useEffect(() => {
        getWpData();
    },[]);

    return (
        <>
            {
                loading && <div>Loading...</div>
            }
            {
                !loading &&
                <>
                    {!postsFound && <div className="container">No posts found</div>}
                    {postsFound &&
                        <div>
                            <h2>Archive Link Checker v2</h2>
                            <label>Show Links : </label> <input type="checkbox" onChange={showFullLinks} checked={showLinks} />
                            <label>Show DL : </label> <input type="checkbox" onChange={showDLButton} checked={showDL} />
                            <div style={{ width: '95%', paddingTop: "45px" }}>
                                <ul className="list_box">
                                    {filesRender}
                                </ul>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )

}