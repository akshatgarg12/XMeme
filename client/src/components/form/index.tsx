import { Form, Input, Button } from 'antd';
import { ChangeEvent, useState } from 'react';
import {HTTP_REQUEST} from '../../action/http';
import {memeData} from '../../constant'
import './style.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};



const MemeForm = () => {
  const onFinish = (values: any) => {
    console.log(formData);
    submitHandler()
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const changeHandler = (e : ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }
  const submitHandler = async () => {
    try{
      const request = await HTTP_REQUEST({method:"POST", path:"/memes", body:formData, setLoading:null})
      console.log(request)
    }
    catch(e){
      console.log(e.message);
    }
  }

  
  const [formData, setFormData] = useState<memeData>({
    posted_by:"",
    caption:"",
    meme_src:""
  })

  return (
    <div className="memeform__container">
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelAlign={"left"}
      >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
          <Input value={formData?.posted_by}  name="posted_by" onChange={changeHandler} />
        </Form.Item>

        <Form.Item
          label="Caption"
          name="caption"
          rules={[{ required: true, message: 'Please input a caption for meme!' }]}
        >
          <Input value={formData?.caption}  name="caption" onChange={changeHandler}  />
        </Form.Item>

        <Form.Item
          label="Meme URL"
          name="memeurl"
          rules={[{ required: true, message: 'Please input a valid meme url' }]}
        >
          <Input value={formData?.meme_src}  name="meme_src" onChange={changeHandler}  />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="memeform__button" >
            Submit Meme
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MemeForm;