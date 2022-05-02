import axios from "axios";

export default axios.create({
    baseURL: "https://store4me-nodejs-api.herokuapp.com/api",
    headers:{
        "Content-type":"application/json"
    }
});