import axios from "axios";

const http = axios.create({
  baseURL: "https://ticketmanagerbd.herokuapp.com/",
});
export default http;