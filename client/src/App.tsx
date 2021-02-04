import MemeForm from "./components/form";
import { Row, Col } from 'antd';
function App() {
  return (
    <div>
      <h1>XMeme App</h1>
      <section>
        <Row>
          <Col className="gutter-row" lg={10} md={24} xs={24}>
            <div className="container">
              <MemeForm />
            </div>
          </Col>
          <Col className="gutter-row" lg={14} md={24} xs={24}>
          <div className="container">
            <MemeForm />
          </div>
          </Col>
        </Row>
      </section>
      
   </div>
  );
}

export default App;
