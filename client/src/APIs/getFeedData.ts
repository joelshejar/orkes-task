import axios from "axios"

import recursiveToCamel from "../Utils/recursiveToCamel";

import { getBaseUrl } from "../Utils/baseUrl"

export const getFeedData = async(page:number)=>{
  try{
    const res = await axios.get(`${getBaseUrl()}/${page}`)
    const response = recursiveToCamel(res.data)
    return response
  }catch(err){
    console.error(err)
    throw err
  }
}
