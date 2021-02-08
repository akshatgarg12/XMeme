const Meme = require("../models/meme")

/* 
  This file contains method related to creation of memes
  and reading of memes from database. These methods are hooked to the 
  api routes in /routes dir
*/

const CREATE = async (req, res) => {
  const {posted_by, caption, meme_src} = req.body
  // check for null values (server side form validation)
  if(!posted_by || !caption || !meme_src){
    res.status(400).json({message:"Bad request", displayMessage:"Please send all the required fields"})
    return;
  }
  try{
    // create a new meme document and save it
    const newMeme = new Meme({posted_by, caption, meme_src})
    await newMeme.save()
    res.send(newMeme)
  }catch(e){
    // duplication error
    if(e.code === 11000){
      res.status(400).json({message:"Bad request", displayMessage:"This meme already exists."})
    }
    // server error
    res.status(500).json({message:"Server Error", displayMessage:e.message})
  }
}

const READ = async (req, res) =>{
  // in case of pagination (required feilds)
  let {limit, offset} = req.query
  // default setting the values if not provided
  if(!offset){
    offset = 0;
  }
  if(!limit){
    limit = 100
  }
  // parse to integer from JSON string
  limit = parseInt(limit)
  offset = parseInt(offset)
  try{
    /* getting the docs from db based on pagination params, to make query efficent 
    in case of more than a 100 docs */
    // the memes are returned in the order latest created.
    const memes = await Meme.find({}).sort({_id:-1}).skip(offset).limit(limit)
    res.send(memes)
  }
  catch(e){
    console.log(e)
    res.status(500).json({error:e.message})
  }
}

module.exports = {
  CREATE,
  READ
}