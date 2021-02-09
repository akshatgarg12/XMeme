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
        {memes && memes.length ? memes.map(({_id, createdAt, name, caption, url})=>{
          return <Post 
                  key = {_id}
                  _id = {_id}
                  createdAt = {createdAt}
                  name = {name}
                  caption = {caption}
                  url = {url}
                />
        }) : <Spin size="large" />}
      </div>
    </>
  );
}
 
export default Feed;