import React, {useRef} from 'react'
import EditForm from './editPostForm'
import {memeData} from '../../constant'
import {useState} from 'react'
import {EditFilled} from '@ant-design/icons'

import './style.css'

export interface postData extends memeData{
  _id : string,
  createdAt : string
}

const Post: React.FC<postData> = ({_id, createdAt,name, caption, url}) => {
  
  const [showEditForm, setShowEditForm] = useState<boolean>(true)
  const toggleShowForm = () => setShowEditForm(!showEditForm)
  const imageElement = useRef(null)
  return (
    <div className="card">
       <div className="card__header">
              <h3>{name}</h3>
              <p>{new Date(createdAt).toLocaleDateString()}</p>
              <div style={{marginLeft:"auto"}}>
              <EditFilled onClick={toggleShowForm} />
              </div>
        </div>
        {
          showEditForm ? 
          <>
            <div className="card__caption">
              <h4>{caption}</h4>
            </div>
            <div className="card__img">
              {/* @ts-ignore */}
              <img alt="meme_img" src={url} ref={imageElement} onError={()=> imageElement.current.src = "https://i1.wp.com/media.giphy.com/media/8L0Pky6C83SzkzU55a/source.gif?w=525&ssl=1"} />
            </div>  
          </> : <EditForm  _id = {_id} toggleShowForm={toggleShowForm} />
          
        }
    </div>
  );
}
 
export default Post;