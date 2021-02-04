import { Form, Input, Button } from 'antd';
import './style.css'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const MemeForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

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
        <Input />
      </Form.Item>

      <Form.Item
        label="Caption"
        name="caption"
        rules={[{ required: true, message: 'Please input a caption for meme!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Meme URL"
        name="memeurl"
        rules={[{ required: true, message: 'Please input a valid meme url' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="memeform__button">
          Submit Your Meme
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default MemeForm;