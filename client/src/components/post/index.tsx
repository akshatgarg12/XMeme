import React from 'react'
import EditForm from './editPostForm'
import {memeData} from '../../constant'
import {useState} from 'react'
import {EditFilled} from '@ant-design/icons'

import './style.css'

export interface postData extends memeData{
  _id : string,
  createdAt : string
}

const Post: React.FC<postData> = ({_id, createdAt,posted_by, caption, meme_src}) => {
  
  const [showEditForm, setShowEditForm] = useState<boolean>(true)
  const toggleShowForm = () => setShowEditForm(!showEditForm)

  return (
    <div className="card">
       <div className="card__header">
              <h3>{posted_by}</h3>
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
              <img alt="meme_img" src={meme_src} />
            </div>  
          </> : <EditForm  _id = {_id} toggleShowForm={toggleShowForm} />
          
        }
    </div>
  );
}
 
export default Post;