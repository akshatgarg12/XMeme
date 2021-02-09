import {Form, Input, Button} from 'antd'
import {HTTP_REQUEST} from '../../action/http'
import {useMemeContext} from '../../context/useMemeContext'
import {updateMemes} from '../../action/utilityFunctions'
import {ChangeEvent, useState} from 'react'

interface EditFormData{
  caption : string,
  url : string
}

const EditForm :React.FC<{_id:string, toggleShowForm:any}> = ({_id,toggleShowForm}) => { 
  const initialFormData:EditFormData = {
    caption : "",
    url : ""
  }
  const [formData, setFormData] = useState<EditFormData>(initialFormData)
  const [loading, setLoading] = useState<boolean>(false)
  const {dispatch} = useMemeContext()
  const changeHandler = (e : ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setFormData((prev) => ({...prev, [name]: value}))
  }
  const submitHandler = async (e:React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    
    try{
      if(formData.caption === "" && formData.url === ""){
        return;
      }
      console.log("update data : ",formData)
      setLoading(true)
      const request = await HTTP_REQUEST({method:"PATCH", path:`/memes/${_id}`, body:formData, setLoading:null})
      console.log(request)
    }
    catch(e){
      console.log(e.message);
    }finally{
      updateMemes(dispatch)
      toggleShowForm()
      setLoading(false)
    }
  }
  return (
    <Form>
          <Form.Item
            label="caption"
            name="caption"
          >
            <Input value={formData.caption} name="caption" onChange={changeHandler} /> 
          </Form.Item>
          <Form.Item
            label="URL"
            name="meme_src"
          >
            <Input value={formData.url} name="url" onChange={changeHandler} /> 
          </Form.Item>
          <Button type="primary" htmlType="submit" onClick={submitHandler} loading={loading}>
            Update
          </Button>
          
    </Form>
    );
}
export default EditForm