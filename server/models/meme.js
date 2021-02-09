const mongoose = require('mongoose')

/* 
 Defining the schema of the documents in the Meme collection ::
 name: is the username 
 caption: self explainatory
 url: is expected to be a url of a photo
*/



const MemeSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "Name of the user who posted is required"],
    trim:true
  },
  caption:{
    type:String,
    default:"",
    trim:true
  },
  url:{
    type:String,
    required:[true, "meme source is a required field"],
    trim:true,
  }
},{
  timestamps:true
})

// check for unique
MemeSchema.index({ name: 1, caption: 1, url: 1 }, {unique:true})

module.exports = new mongoose.model('Meme', MemeSchema);