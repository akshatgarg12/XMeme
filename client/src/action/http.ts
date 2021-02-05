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
      console.log(request.data)
      return request.data
    }catch(e){
      console.log(e.response.data)
    }finally{
      setLoading && setLoading(false);
    }
}

