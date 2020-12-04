import axios from "axios";

export default {

  getBubble: function(){
    return axios.get ("/api/bubbles");
  },

  getBubbles: function(id) {
    return axios.get("/api/bubbles/" + id);
  },
 
  deleteBubble: function(id) {
    return axios.delete("/api/bubble/" + id);
  },

  //Saves a book to the database

  saveBubble: function(bubbleData) {
    return axios.post("/api/bubble", bubbleData);
  }
};
