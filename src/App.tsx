import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReactDOM from "react-dom"
import Page from "./component/page"

function App() {

  return (
    <div className ="App">
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Page />} />  
        </Routes>
      </BrowserRouter>
    </div>
  )
}
//          <Route path="/editfaq element={<PrivateRoute path="/editfaq" element={<EditerFaq />} isAuthenticated={isAuthenticated}/>}/>
// faire le lien avec la page index.html
ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root")
)
export default App

