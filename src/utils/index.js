import axios from "axios";
import moch from "../assets/moch";

export default {
  moch: moch,
  async getTodayBG() {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    return await axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          date: `${year}-${month}-${day}`,
          hd: true,
          api_key: "DEMO_KEY",
        },
      })
      .then((data) => (this.img = data.data.url));
  },
  getImgSet(config) {
    let that = this;
    if(!config) {
      return axios.get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY"
      ).then(data => that.splitImgSet(data.data.photos))
    }

    else {
      return axios.get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${config.mars}/photos`, {
          params: {
            sol: 1000,
            page: 1,
            api_key: "DEMO_KEY",
            earth_date: config.date,
            camera: config.camera
          }
        }
      ).then(data => that.splitImgSet(data.data.photos))
    }
  },
  splitImgSet(set) {
    let numItemsInCol = 0;
    if(window.innerWidth < 767) numItemsInCol = 3;
    else numItemsInCol = 5;
    const arr = [];
    while (set.length) {
      arr.push(set.splice(0, numItemsInCol));
    }
    return arr;
  },
};
