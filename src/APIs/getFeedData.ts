import axios from "axios"

import { getBaseUrl } from "../Utils/baseUrl"

export const getFeedData = async(page:number)=>{
  try{
    const res = await axios.get(`${getBaseUrl()}/${page}`)
    return res
  }catch(err){
    console.error(err)
    throw err
  }
}
