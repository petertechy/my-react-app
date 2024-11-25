//JSX - javascript + HTML

import NavBar from "../component/Navbar"
import { useState } from "react"

const myName = "Emmanuel"
const myNum = 10

function Home(){
  const [count, setCount] = useState(0)

  const handleincrease = () =>{
    setCount(count + 1)
  }
  return (
    <>
    <NavBar/>
      <h1 className="text-danger display-1 fw-bold text-end">Hello World {myName}</h1>
      <h1>Hello there {count}</h1>
      <h1>{Math.random()}</h1>
      <button onClick={handleincrease}>Change Number</button>
    </>
  )
}

export default Home