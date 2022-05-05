import React, { useState, useReducer } from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import Photos from "./components/Photos"

function Main() {
  return (
    <>
      <Header />
      <Photos />
    </>
  )
}
ReactDOM.render(<Main />, document.querySelector("#app"))
