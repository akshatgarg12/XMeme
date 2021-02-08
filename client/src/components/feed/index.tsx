import {Spin} from 'antd'
import Post from '../post'
import './style.css'
import {postData} from '../post'

export interface FeedProps{
    memes : [postData] | null
}
 
const Feed: React.FC<FeedProps | null> = ({memes}) => {
  return (
    <>
      <div className="feed">    
        {memes && memes.length ? memes.map(({_id, createdAt, posted_by, caption, meme_src})=>{
          return <Post 
                  key = {_id}
                  _id = {_id}
                  createdAt = {createdAt}
                  posted_by = {posted_by}
                  caption = {caption}
                  meme_src = {meme_src}
                />
        }) : <Spin size="large" />}
      </div>
    </>
  );
}
 
export default Feed;