import { useState } from 'react';
import './Accordion.css';

function Accordion({q, a}) {
    const [show, setShow] = useState(false)
  return (
    <>
    <div className={`accordion ${show ? 'showing' : ''}`}>
      <div className='top' onClick={() => setShow(!show)}>
        <h3>{q}</h3>
        <span className='arrow'>
          ▼
        </span>
      </div>
      {show && (
        <div className='accordion-content slide-down'>
          <p>{a}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default Accordion