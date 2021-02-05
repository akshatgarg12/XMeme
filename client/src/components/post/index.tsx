import {memeData} from '../../constant'
import './style.css'

export interface postData extends memeData{
  _id : string,
  createdAt : string
}
const Post: React.FC<postData> = ({_id, createdAt,posted_by, caption, meme_src}) => {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{posted_by}</h3>
        <p>{new Date(createdAt).toLocaleDateString()}</p>
      </div>
      <div className="card__caption">
        <h4>{caption}</h4>
      </div>
      <div className="card__img">
        <img alt="meme_img" src={meme_src} />
      </div>      
    </div>

  );
}
 
export default Post;