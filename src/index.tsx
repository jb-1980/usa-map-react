import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { USAMap } from "./components"
import { DATA } from "./components/data"
import reportWebVitals from "./reportWebVitals"

const App = () => {
  let question = React.useMemo(() => {
    let names = Object.values(DATA).map((d) => ({
      name: d.name,
      abb: d.abbreviation,
    }))
    return names[Math.floor(Math.random() * names.length)]
  }, [])
  let [guess, setGuess] = React.useState("")
  const config = {
    [guess]: {
      fill: "#F00",
    },
    [question.abb]: {
      fill: !guess ? "" : "#0F0",
    },
  }
  const mapHandler = (event: any) => {
    setGuess(event.target.dataset.name)
  }

  return (
    <div className="App">
      <div>Click on {question.name}</div>
      <USAMap hideStateTitle onClick={mapHandler} customize={config} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
