export const dateFormat = (timestamp)=>{
  const date = new Date(convertUTCToLocal(timestamp))
  const year = date.getFullYear()
  const month = date.toLocaleString("default", {month:"short"})
  const day = `0${date.getDate()}`.slice(-2)
  const time = date.toLocaleString("en-US", {
    hour:"numeric",
    minute:"numeric",
    hour12:true,
  })
  return `${time}, ${day} ${month} ${year}`
}

const convertUTCToLocal = (timeStamp)=>{
  const date = new Date(timeStamp)
  const newDate = new Date(date.getTime() - date.getTimezoneOffset()*60*1000)
  return newDate
}