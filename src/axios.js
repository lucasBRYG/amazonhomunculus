import axios from "axios";

const instance = axios.create({
    // baseURL: "http://localhost:5001/homunculus-ad003/us-central1/api" /* this is the test server url */ 
    baseURL: "https://us-central1-homunculus-ad003.cloudfunctions.net/api" /* this is the dployed url */
})

export default instance;