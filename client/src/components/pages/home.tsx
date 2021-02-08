import Header from '../header'
import {Row, Col} from 'antd'
import MemeForm from '../form'
import Feed from '../feed'
import {useEffect} from 'react'
import {getMemes} from '../../action/utilityFunctions'
import {useMemeContext} from '../../context/useMemeContext'

const HomePage: React.FC<any> = () => {
  const {memes, dispatch} = useMemeContext()
  
  useEffect(()=>{
    const updateMemes = async () => {
      const data = await getMemes()
      dispatch({type:"update", payload:data})
    }
    updateMemes()
  },[dispatch])

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
 
export default HomePage;