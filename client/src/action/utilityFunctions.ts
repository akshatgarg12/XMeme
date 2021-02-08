import {HTTP_REQUEST} from './http'


export const imageExists = (url:string) => {
  var image = new Image();
  console.log(url)
  image.src = url;
  if (!image.complete) {
      return false;
  }
  else if (image.height === 0) {
      return false;
  }
  return true;
}

export const getMemes = async () => {
  try{
    const response = await HTTP_REQUEST({method:"GET",path:"/memes", body:null, setLoading:null})
    return response
  }catch(e){  
    console.log(e);
    return []
  }  
}

export const updateMemes = async (dispatch:any) => {
    const data = await getMemes()
    dispatch({type:"update", payload:data})
  }