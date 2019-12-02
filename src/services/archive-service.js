export default class ArchiveService {

    static getFilesDirectories(arr){

    }

    static getFileUrl(obj){
        if(!obj){
            return []
        }
        let ignoredFormats = [
            "Metadata",
            "Archive BitTorrent",
            "BitTorrent",
            "Thumbnail",
            "BitTorrentContents",
            "Text"
        ];
        let isDark = obj.is_dark;
        if(isDark){
            return [];
        }
        let server = obj.server;
        let dir = obj.dir;
        let files = obj.files;

        let newFiles = files.filter(x => ignoredFormats.indexOf(x.format) == -1).filter(x => x.source == 'original');
        newFiles = newFiles.map(x => {
            let fileUrl = `https://${server}${dir}/${x.name}`;
            return fileUrl;
        });
        
        return newFiles;
    }
}