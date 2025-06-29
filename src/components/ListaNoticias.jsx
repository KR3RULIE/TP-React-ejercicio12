import { Container, Row } from "react-bootstrap";
import Noticia from "./Noticia";

const ListaNoticias = ({ noticias }) => {
  return (
    <section className="container bg-info my-4 p-3 rounded">
      {noticias.length === 0 && (
        <p className="text-center">Aún no hay noticias</p>
      )}
      {noticias.length !== 0 && (
        <Container>
          <Row>
            {noticias.map((noticia, indice) => (
              <Noticia key={indice} noticia={noticia}></Noticia>
            ))}
          </Row>
        </Container>
      )}
    </section>
  );
};

export default ListaNoticias;
