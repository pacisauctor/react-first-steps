import './styles.css'

const Header = () => {
  return (
    <header>
      <h1>Mi primera app en React</h1>
      <nav>
        <ul>
          <li>
            <a href="https://react.dev/learn">Doc React</a>
          </li>
          <li>
            <a href="https://github.com/pacisauctor/react-first-steps" target="_blank" rel="noreferrer">Repo del Proyecto</a>
          </li>
          <li>
            <a href="mailto:agarciadarce@gmail.com">Correo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
