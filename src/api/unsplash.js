import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 3duBp1tu8KwGiPVbeDlIBFhFpkEaXvqLjMqBvnn1p7M",
  },
});
