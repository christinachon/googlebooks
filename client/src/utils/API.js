import axios from "axios";

export default {
  // Searches the NYT books according to the search criteria given in the form
  getNewBooks: function(title) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title);
  },
  // Gets saved Books
  getSavedBooks: function() {
    return axios.get("/api/books/");
  },
  // Deletes the Book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a Book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
