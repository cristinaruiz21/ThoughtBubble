import axios from "axios";

export default {
  getBubbles: function() {
    return axios.get("/api/bubble");
  },
//   // Gets the bubble based on given id
  // getBubbles: function(id) {
  //   return axios.get("/api/bubbles/" + id);
  // },
//   // Deletes the book with the given id
//   deleteBubble: function(id) {
//     return axios.delete("/api/bubble/" + id);
//   },
  // Saves a book to the database
  saveBubble: function(bubbleData) {
    return axios.post("/api/bubble", bubbleData);
  }
};
