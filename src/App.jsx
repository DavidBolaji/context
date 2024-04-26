import Footer from "./component/Footer"
import Form from "./component/Form"
import Header from "./component/Header"
import Cofee from './assets/image/cofee.jpg'
import { useGlobalContext } from "./store"

// import { useState } from 'react'
function App() {
  const {age} = useGlobalContext()
  return (
    <div>
      <Header />
      <main className="min-h-[90vh] bg-[#fafafa]">
        <h2>i am {age} years old</h2>
        <div className="w-[400px] h-[200px]  bg-[#fafafa] mx-auto pt-20">
          <div className="w-50 h-50">
            <img src={Cofee} alt='cofee' className='w-full h-full object-cover' />
          </div>
        </div>
        <Form  />
      </main>
      <Footer />
    </div>
  )
}

export default App
