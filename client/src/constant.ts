export const URLS = {
  DEV : "http://localhost:5000",
  PROD : "http://localhost:5000",
}
export interface memeData{ 
  posted_by: string,
  caption : string,
  meme_src : string
}
export const SERVER_BASE = process.env.NODE_ENV === "development" ? URLS.DEV: URLS.PROD;