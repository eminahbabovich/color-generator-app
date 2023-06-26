import Form from './Form'
import Colorlist from './Colorlist'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Values from 'values.js'
const App = () => {
  const [colors, setColors] = useState([])

  const addColor = (color) => {
    try {
      setColors(new Values(color).all(10))
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <main>
      <Form addColor={addColor} />
      <Colorlist colors={colors} />
      <ToastContainer position="top-center" />
    </main>
  )
}
export default App
