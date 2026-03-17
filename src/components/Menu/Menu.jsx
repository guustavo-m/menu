import './Menu.css';

const Menu = ({ menu, setMenu }) => {
  return (
    <>
    <div className="container">
      <header>
        <button className='menu' onClick={() => setMenu(!menu)}>
          {menu ? '☰ Fechar' : '☰ Menu'}
        </button>
      </header>

      {menu && (
        <div className='sider'>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#jogos">Jogos</a></li>
            <li><a href="#programacao">Programação</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      )}
    </div>
    </>
  );
};

export default Menu;