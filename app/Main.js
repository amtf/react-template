import React, { useState, useReducer } from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"

function Main() {
  return <Header />
}
ReactDOM.render(<Main />, document.querySelector("#app"))
