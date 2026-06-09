import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Button } from './components/Button'
import { Counter } from './components/Counter'

const news = [
  {
    title: 'Noticia 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
    author: 'Juan Pérez',
    date: '2024-06-01'
  },
  {
    title: 'Noticia 2',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.',
    author: 'María García',
    date: '2024-06-02'
  }
]

function App() {

  // Acá podemos escribir todo el js que necesitemos

  const saludo = "Este es el saludo"

  const op = 2 + 4

  const handleClickButton = () => {
    alert("¡Hola! Has hecho clic en el botón.")
  }

  const handleLogin = () => {
    alert("¡Iniciando sesión!")
  }

  return (
    <>
     Hola mundo
      <Button className='btn' text='Click me' onClick={handleClickButton} type="submit">
        Botón de ejemplo
      </Button>
      <Button className="btn btn-primary btn-small btn-rounded" text="Login" onClick={handleLogin}>
        iniciar sesión
      </Button>

      <section>
        <h2>Noticias</h2>

        { saludo }
        <br />
        { op }
        <br />
        { op === 7 ? "El resultado es 7" : "El resultado no es 7" }
        <br />
        { news.length > 0 
          ? news.map(item => {
            return (
              <article>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div>
                  <ul>
                    <li>Autor: {item.author}</li>
                    <li>Fecha: {item.date}</li>
                  </ul>
                </div>
              </article>
            )
          })
          : <p>No hay noticias disponibles</p> }
      </section>

      <Counter maxValue={10} minValue={0} />
      <br />
      <Counter maxValue={20} minValue={5} />
      <br />
      <Counter maxValue={14} minValue={10} />


      { /* Explicar reglas de componentes (cuantos datos retornan y como se comporta cuando retorna arreglos */ }
    </>
  )
}

export default App
