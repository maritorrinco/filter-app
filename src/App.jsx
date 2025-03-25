import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section class="bg-purple-400 text-white h-screen flex flex-col justify-center items-center">
        <section class="bg-fuchsia-500 flex flex-col justify-center items-center h-64 w-80">
          <div>
            <h1 className="text-3xl font-bold">
              Filter App!
            </h1>
          </div>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count {count}
            </button>
          </div>
        </section>
      </section>
    </>
  )
}

export default App
