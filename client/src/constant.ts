export const URLS = {
  DEV : "http://localhost:8081",
  PROD : "https://xmeme-crio.herokuapp.com",
}
export interface memeData{ 
  name: string,
  caption : string,
  url : string
}
export const SERVER_BASE = process.env.NODE_ENV === "development" ? URLS.DEV: URLS.PROD;