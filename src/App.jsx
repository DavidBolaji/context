import Footer from "./component/Footer"
import Form from "./component/Form"
import Header from "./component/Header"

// import { useState } from 'react'
function App() {

  return (
    <div>
      <Header />
      <main className="min-h-[90vh] bg-[#fafafa]">
        <Form  />
      </main>
      <Footer />
    </div>
  )
}

export default App
