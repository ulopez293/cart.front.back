import { useState, useEffect } from 'react'
import callAPI from './api/callAPI.js'

import Products from './components/Products'

function App() {
  const [car, setCar] = useState(null)

  useEffect(() => {
    const getDataCar = async () => {
      const data = await callAPI('http://localhost:3000/products', 'GET')
      setCar(data)
    }
    getDataCar()
  }, [])

  const sumTotal = (items) => items.reduce((a, b) => {
    let sum = a + (b.amount * b.price)
    if (b.code === 'PEN') return (b.amount > 1) ? (sum-b.price) : sum
    if (b.code === 'TSHIRT') return (b.amount > 2) ? (sum - ((b.amount * b.price) * .25) ) : sum
    return sum
  }, 0)

  const sumAmount = (items) => items.reduce((a, b) => a + b.amount , 0)
  
  if (car == null) return
  return (
    <div>
      <div className="card">
        <div className="card-body">
          Cantidad Productos: {sumAmount(car)}  Total: $ {sumTotal(car)}
        </div>
      </div>
      <hr />
      <Products car={car} setCar={setCar} />
    </div>
  )
}

export default App
