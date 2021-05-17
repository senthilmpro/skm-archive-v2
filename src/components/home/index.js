import React from 'react';
import FetchService from '../../services/fetch-service';
import ArchiveService from '../../services/archive-service';
import PostList from '../post-list';
import './Home.css';


export default class HomeComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            postsFound: false,
            loading : true,
            showLinks : true
        };
        this.getWpData = this.getWpData.bind(this);
        this.showFullLinks = this.showFullLinks.bind(this);
        this.getWpData();
    }

    async getWpData() {
        this.setState({
            loading : true
        });
        let wpData = await FetchService.fetchWordpress();
        let posts = wpData.posts;
        posts.forEach(x => {
            let protocol = new URL(x.title).protocol;
            console.log(protocol);
        })
        posts = posts.filter(x => (new URL(x.title).protocol !== "http:"));
        let archiveResponse = await FetchService.fetchArchiveUrl(posts);
        console.log("archiveResponse ", archiveResponse);
        let archiveData = archiveResponse.map(x => {
            return x.data
        });

        let postsArr = [];
        archiveData.forEach((x, i) => {
            let obj = {
                title: posts[i].title,
                files: ArchiveService.getFileUrl(x),
                isDark : x.is_dark ? x.is_dark : false
            };
            if (!obj.isDark) {
                postsArr.push(obj);
            }
            console.log(obj);
        });

        if (postsArr.length > 0) {
            this.setState({
                postsFound: true,
                data : postsArr
            });
        }
        console.log(postsArr);

        this.setState({
            loading : false
        });

        return postsArr;
    }

    showFullLinks(){
        let showLinks = this.state.showLinks;
        this.setState({
            showLinks : !showLinks
        })
        
    }

    // home page rendered
    render() {

        if (this.state.loading) {
            return (
                <div className="container">
                    Loading
                </div>
                )
        } else {
            const posts = this.state.data;
            const filesRender = posts.map(x => <li><PostList files={x.files} title={x.title} showLinks={this.state.showLinks} /></li>);

            if(!this.state.postsFound){
                return (
                    <div className="container">
                        No posts found
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2>Archive Link Checker v2</h2>
                        <label>Show Links : </label> <input type="checkbox" onChange={this.showFullLinks} checked={this.state.showLinks}/>
                        <div style={{width: '95%', paddingTop: "45px"}}>
                            <ul className="list_box">
                                {filesRender}
                            </ul>
                        </div>
                    </div>
                )
            }
        }   

    }
}   