import { useState } from 'react'

const Form = ({ addColor }) => {
  const [color, setColor] = useState('')
  const handleChange = (e) => {
    setColor(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(color)
  }

  return (
    <section className="container" onSubmit={handleSubmit}>
      <h4>Color Generator</h4>
      <form className="color-form">
        <input type="color" value={color} onChange={handleChange}></input>
        <input
          type="text"
          value={color}
          placeholder="#f15025"
          onChange={handleChange}
        ></input>
        <button
          type="submit"
          className="btn"
          style={{ backgroundColor: color }}
        >
          Submit
        </button>
      </form>
    </section>
  )
}
export default Form
