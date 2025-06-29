import ListaNoticias from "./ListaNoticias";
import { Form, Spinner } from "react-bootstrap";
import { useState, useEffect, use } from "react";

const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "pub_017614516865446c8e878da5b2e31250";

  const handleChange = (e) => {
    setCategoria(e.target.value);
  };

  useEffect(() => {
    if (categoria) {
      obtenerNoticia();
    }
  }, [categoria]);

  const obtenerNoticia = async () => {
    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=mx&language=es&category=${categoria}`
      );
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setNoticias(datos.results || []);
        setMostrarSpinner(false);
      }
    } catch (error) {
      console.error(error);
      setError(
        "La API no está funcionando en este momento. Por favor intenta más tarde."
      );
    } finally {
      setMostrarSpinner(false);
    }
  };

  return (
    <>
      <section className="container bg-info my-4 p-3 rounded">
        <Form>
          <Form.Group className="d-flex justify-content-between">
            <Form.Label className="fw-bold me-3 w-50">
              Buscar por categoria:
            </Form.Label>
            <Form.Select value={categoria} onChange={handleChange}>
              <option value="">-- Elige una opción --</option>
              <option value="top">Top</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
              <option value="science">Science</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
              <option value="world">World</option>
              <option value="politics">Politics</option>
              <option value="environment">Environment</option>
              <option value="tourism">Tourism</option>
              <option value="education">Education</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </section>

      {mostrarSpinner ? (
        <div className="d-flex justify-content-center align-items-center">
          <Spinner animation="grow" variant="danger" />
        </div>
      ) : (
        <ListaNoticias noticias={noticias}></ListaNoticias>
      )}
    </>
  );
};

export default Formulario;
