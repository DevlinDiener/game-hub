import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0a9deefacadb4ea0896559c1f4ba8a2a",
  },
});
