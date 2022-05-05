import React, { useEffect, useState } from "react"
import Axios from "axios"

function Photos() {
  const [imgs, setImgs] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await Axios.get("images")
        console.log(response.data)
        setImgs(response.data)
      } catch (e) {
        console.log("There has a problem.")
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {imgs.map((img) => {
        return <img src={`images/${img}`} key={img} width="300" height="300" />
      })}
    </>
  )
}

export default Photos
