import { useState } from "react"
import Footer from "./component/Footer"
import Form from "./component/Form"
import Header from "./component/Header"

// import { useState } from 'react'
function App() {
  const [name, setName] = useState('David')
  return (
    <div>
      <Header name={name} />
      <main className="min-h-[90vh] bg-[#fafafa]">
        <Form setName={setName} />
      </main>
      <Footer name={name} />
    </div>
  )
}

export default App
