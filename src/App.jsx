import './App.css'
import Accordion from './components/Accordion/Accordion'
import { useState } from 'react';
import Menu from './components/Menu/Menu'
import Tabs from './components/Tabs/Tabs'

function App() {
  const [menu, setMenu] = useState(false)
  const [tabNow, setTabNow] = useState('tab1')
  return (
    <>
       <div className='container'>
        <Menu menu={menu} setMenu={setMenu} />
      </div>
      
      <div className='body'>
        <main className={`main ${menu ? 'showing' : ''}`}>
          <div className='middle'>
            <h1 className="title">GeekHub</h1>
            <Tabs tabNow={tabNow} setTabNow={setTabNow} />
          </div>
        </main>
      
          <div className='help-faq'>
            <h2>Tem alguma dúvida ? Veja abaixo !</h2>
              <Accordion 
                q="O que é React?" 
                a="React é uma biblioteca JavaScript usada para criar interfaces de usuário, principalmente em aplicações web. Ela facilita a construção de telas usando componentes reutilizáveis." 
              />
              <Accordion 
                q="Para que serve o useState?" 
                a="O useState é um Hook do React usado para criar e controlar estados (dados que podem mudar) dentro de um componente." 
              />
              <Accordion 
                q="O que são eventos em interfaces?" 
                a="Eventos são ações do usuário na interface, como cliques, digitação, movimento do mouse ou envio de formulários, que o programa pode detectar e responder." 
              />
          </div>
          </div>
    </>
  )
}

export default App
