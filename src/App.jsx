import Header from "./components/Header"
import UserInput from "./components/UserInput"

function App() {
  
  return (
    <>
    <Header/>
    <div className="input-group">
      <UserInput title="Initial Investment"></UserInput>
      <UserInput title="Annual Investment"></UserInput>
      <UserInput title="Expected Return"></UserInput>
      <UserInput title="Duration"></UserInput>
    </div>
    
    </>
  )
}

export default App
