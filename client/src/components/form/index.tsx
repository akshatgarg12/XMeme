import { Form, Input, Button } from 'antd';
import { ChangeEvent, useState } from 'react';
import {HTTP_REQUEST} from '../../action/http';
import {memeData} from '../../constant'
import {updateMemes} from '../../action/utilityFunctions'
import {useMemeContext} from '../../context/useMemeContext'
import { message } from 'antd';

import './style.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const MemeForm = () => {
  const initialFormData:memeData ={
    name:"",
    caption:"",
    url:""
  } 
  const [formData, setFormData] = useState<memeData>(initialFormData)
  const [loading, setLoading] = useState<boolean>(false)
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
  const {dispatch}  = useMemeContext()
 
  const submitHandler = async () => {
    try{
      const request = await HTTP_REQUEST({method:"POST", path:"/memes", body:formData, setLoading})
      console.log(request)
      message.success("New meme created",5)
    }
    catch(e){
      message.error("error occured : " + e?.message,5)
    }finally{
      updateMemes(dispatch)
    }
  }
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
          <Input value={formData?.name}  name="name" onChange={changeHandler} />
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
          <Input value={formData?.url}  name="url" onChange={changeHandler}  />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="memeform__button" loading={loading}>
            Submit Meme
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default MemeForm;