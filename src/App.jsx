import "bootstrap/dist/css/bootstrap.min.css";
import Titulo from "./components/Titulo";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <Titulo></Titulo>
      <main>
        <Formulario></Formulario>
      </main>
      <footer className="text-center text-light bg-black py-1 sombra">
        <p>
          By{" "}
          <a
            href="https://github.com/KR3RULIE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none text-danger"
          >
            KR3RULIE
          </a>
        </p>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
