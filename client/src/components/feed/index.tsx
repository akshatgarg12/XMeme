import {Spin, Pagination} from 'antd'
import {useState, useEffect} from 'react'
import Post from '../post'
import './style.css'
import {postData} from '../post'
export interface FeedProps{
    memes : [postData] | null
}
 
const Feed: React.FC<FeedProps | null> = ({memes}) => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [showMemes, setShowMemes] = useState<[postData] | null>(memes)
  const postPerPage = 10
  useEffect(()=>{
    if(memes){
      const startIndex = (pageNumber-1)*postPerPage
      const endIndex = startIndex+postPerPage > memes?.length ? memes.length : startIndex+postPerPage
      // @ts-ignore
      setShowMemes(memes.slice(startIndex, endIndex))
      console.log(showMemes, pageNumber)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber, memes])

  return (
    <>
      <div className="feed">    
        {showMemes ? showMemes.map(({_id, createdAt, name, caption, url})=>{
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
      <Pagination 
        current={pageNumber} total={memes?.length || 0} pageSize={postPerPage} showSizeChanger ={false} onChange={(pgNum)=>setPageNumber(pgNum)}
        style={{textAlign:"center", marginTop:"20px"}}
      />
    </>
  );
}
 
export default Feed;