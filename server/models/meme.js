const mongoose = require('mongoose')

/* 
 Defining the schema of the documents in the Meme collection ::
 posted_by: is the username 
 caption: self explainatory
 meme_src: is expected to be a url of a photo
*/

const MemeSchema = new mongoose.Schema({
  posted_by:{
    type:String,
    required:[true, "Name of the user who posted is required"],
    trim:true
  },
  caption:{
    type:String,
    default:"",
    trim:true
  },
  meme_src:{
    type:String,
    required:[true, "meme source is a required field"],
    trim:true,
  }
},{
  timestamps:true
})


module.exports = new mongoose.model('Meme', MemeSchema);