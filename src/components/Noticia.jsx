import { Col, Button, Card } from "react-bootstrap";

const Noticia = ({ noticia }) => {
  const recortarTexto = (texto, maxLength) => {
    if (!texto) return "";
    if (texto.length <= maxLength) return texto;
    return texto.slice(0, maxLength) + "...";
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="h-100">
        <Card.Header className="p-0">
          <Card.Img
            variant="top"
            src={noticia.image_url || "https://placehold.co/300x200"}
            alt={noticia.title || "Imagen de la noticia"}
          />
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">
            {noticia.title || "Sin título"}
          </Card.Title>

          <div className="d-flex small text-muted mb-2">
            <Card.Text className="mb-0 me-3">
              Categoria: {noticia.category?.[0] || "Sin categoría"}
            </Card.Text>
            <Card.Text className="mb-0">
              País: {noticia.country?.[0] || "Sin país"}
            </Card.Text>
          </div>

          <Card.Text>
            {recortarTexto(noticia.description, 100) ||
              "Sin descripción disponible."}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button
            variant="primary"
            as="a"
            type="button"
            href={noticia.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto"
          >
            Ver la noticia completa
          </Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Noticia;
