import './Tabs.css';
import python from '../../assets/img/python.png';
import js from '../../assets/img/js.png';
import java from '../../assets/img/java.png';
import cpp from '../../assets/img/cpp.png';
import fortran from '../../assets/img/fortran.png';

const Tabs = ({ tabNow, setTabNow }) => {
  return (
    <section className='tabs'>
      <div className='header-tabs'>
        <button 
          className={`tab-button ${tabNow === 'tab1' ? 'active' : ''}`} 
          onClick={() => setTabNow('tab1')}
        >
          Games
        </button>
        <button 
          className={`tab-button ${tabNow === 'tab2' ? 'active' : ''}`} 
          onClick={() => setTabNow('tab2')}
        >
          Tecnologias
        </button>
        <button 
          className={`tab-button ${tabNow === 'tab3' ? 'active' : ''}`} 
          onClick={() => setTabNow('tab3')}
        >
          Programação
        </button>
      </div>

      <div className="tab-content">
        {tabNow === 'tab1' && (
          <div className="games">
            <h3>Meus jogos Favoritos</h3>
            <ul>
              <li><a href="game 1">Minecraft</a></li>
              <li><a href="game 2">Battlefield V</a></li>
              <li><a href="game 3">Fortnite</a></li>
              <li><a href="game 4">Forza</a></li>
              <li><a href="game 5">Overwatch</a></li>
            </ul>
          </div>
        )}

        {tabNow === 'tab2' && (
          <div className="tech">
            <h3>Curiosidades da Tecnologia</h3>
            <ul>
              <li>JavaScript foi criado em apenas 10 dias</li>
              <li>O nome quase não foi JavaScript</li>
              <li>JavaScript não é a mesma coisa que Java</li>
              <li>Quase todos os sites usam JavaScript</li>
              <li>Também é possível usar JavaScript fora do navegador</li>
            </ul>
          </div>
        )}

        {tabNow === 'tab3' && (
          <div className="langs">
            <h3>Algumas Linguagens</h3>
            <ul className='languages'>
              <li><img src={python} alt="Python" className="langimg python"/></li>
              <li><img src={js} alt="JavaScript" className="langimg js"/></li>
              <li><img src={java} alt="Java" className="langimg java"/></li>
              <li><img src={cpp} alt="C++" className="langimg cpp"/></li>
              <li><img src={fortran} alt="Fortran" className="langimg fortran"/></li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Tabs;