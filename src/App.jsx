import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <div className="bg-gradient-to-b from-black to-zinc-950 bg-no-repeat bg-cover overflow-hidden">
      <Outlet/>
    </div>
    </>
  )
}

export default App
