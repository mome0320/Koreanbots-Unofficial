const gotQl = require('gotql')

let httpOption = {headers:{"Authorization": ""},debug: false,useHttp2: false}
const endpoint = "https://api.beta.koreanbots.dev/v2/graphql"; 
class Main {
    constructor(token,options = {}){
        this.options = options;
        this.token = token;
        httpOption.headers.Authorization = `Bearer ${token}`;
    }
    request(query){
        gotQl.query(endpoint,query,httpOption);
    }
}