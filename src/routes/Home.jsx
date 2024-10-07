import About from "../components/About"
import Banner from "../components/Banner"
import Contact from "../components/Contact"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Services from "../components/Services"
import Work from "../components/Work"

function Home() {

  return (
    <>
    <div className="bg-gradient-to-b from-black to-zinc-950 bg-no-repeat bg-cover overflow-hidden">
      <Header/>
      <Banner/>
      <Nav/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
    </div>
    </>
  )
}

export default Home