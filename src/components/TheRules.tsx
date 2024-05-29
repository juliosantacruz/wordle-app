import React from 'react'
import GuessRowSample from '@/components/GuessRowSample'

export default function TheRules() {
  return (
    <div>
      <div className="header">
      Cómo jugar
      </div>
      <div className="intro">
        <p>Adivina la palabra oculta en cinco intentos.</p>
        <p>Cada intento debe ser una palabra válida de 5 letras.</p>
        <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
      </div>
      <div className="examples">
        <div className="example">
          <p>Ejemplos</p>
          <GuessRowSample guess='gatos' word='ggggg' isGuessed/>
        </div>
        <div className="example">
          <p>La letra G está en la palabra y en la posición correcta.</p>
          <GuessRowSample guess='vocal' word='cffff' isGuessed/>
        </div>
        <div className="example">
          <p>La letra C está en la palabra pero en la posición incorrecta.</p>
          <GuessRowSample guess='gatos' word='ggggg' isGuessed/>
        </div>
      </div>
    </div>
  )
}
