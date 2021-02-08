import MemeForm from "./components/form";
import { Row, Col} from 'antd';
import Feed from "./components/feed";
import {HTTP_REQUEST} from './action/http'
import { useEffect, useState } from "react";
import { postData } from "./components/post";
import Header from "./components/header";

  
function App() {
  const [memes, setMemes] = useState<[postData] | null>(null)
  const getMemes =async() => {
    try{
      const response = await HTTP_REQUEST({method:"GET",path:"/memes", body:null, setLoading:null})
      setMemes(response)
      console.log(response);
    }catch(e){
      console.log(e);
    }  
  }
  useEffect(()=>{
    getMemes()
    setInterval(()=>{
      getMemes()
    },2*1000*60)
  },[])
  return (
    <div>
      <Header />
      <section style={{margin:"auto"}}>
        <Row>
          <Col className="gutter-row" lg={24} md={24} xs={24}>
            <div className="container">
              <MemeForm />
            </div>
          </Col>
          <Col className="gutter-row"  lg={24} md={24} xs={24}>
            <Feed memes={memes} />
          </Col>
        </Row>
      </section>
      
   </div>
  );
}

export default App;
