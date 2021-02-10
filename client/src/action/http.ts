import axios from 'axios';
import {SERVER_BASE} from '../constant'

interface params{
  method : "GET" |  "POST" | "PATCH" | "DELETE",
  path : string,
  body : JSON | any,
  setLoading: any
}

const baseURL = SERVER_BASE
const headers = {
  "Content-type": "application/json"
}
export const HTTP_REQUEST = async ({method, path, body, setLoading} : params) => {
    
    try{
      setLoading && setLoading(true);
      const request = await axios(path,{
        method,
        data : body,
        headers,
        baseURL
      });
      return request.data
    }catch(e){
      console.log(e.response.data)
      const {displayMessage} = e.response.data
      if(displayMessage){
        throw new Error(JSON.stringify(displayMessage))
      }else{
        throw new Error("try again later")
      }
    }finally{
      setLoading && setLoading(false);
    }
}

