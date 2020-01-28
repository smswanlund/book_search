import axios from "axios";

export default {
    getBooks: function(query) {
        return axios.get("/api/google", {params: { query: "title" + query}});
    },
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    saveBook: function(data) {
        return axios.post("/api/books", data)
    }
};