import axios from 'axios';

export default class FetchService {
    
    static async fetchWordpress(){
        let site = 'dumppro.wordpress.com';
        let number = 10;
        let baseUrl = `https://public-api.wordpress.com/rest/v1.1/sites/${site}/posts?number=${number}&fields=title`;
        const data = await axios.get(baseUrl).then(res => res.data);
        return data;
    }

    static async fetchArchiveUrl(arr){
        let promiseArr = arr.map(x => {
            let title = this.getArchiveUrlLink(x.title);
            console.log("TITLE: ", title);
            return axios.get(title);
        });
        return axios.all(promiseArr);
    }

    static getArchiveUrlLink(str){
        return str.replace('/details/','/metadata/').replace('/download/','/metadata/');
    }


}