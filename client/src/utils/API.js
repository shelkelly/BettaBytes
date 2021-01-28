import axios from "axios";

export default {
    // Gets all posts
    getForSale: function () {
        return axios.get("/api/posts");
    },
    // Gets the fish with met criteria
    getFishSearch: function (id) {
        return axios.get("/api/posts/" + id);
    },
    // Deletes the post with the given id
    deleteFavFish: function (id) {
        return axios.delete("/api/posts/" + id);
    },
    // Saves a fish to the database
    saveFavFish: function (favFishData) {
        return axios.post("/api/posts", favFishData);
    }
};