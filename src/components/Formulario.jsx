import ListaNoticias from "./ListaNoticias";
import { Form, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";

const Formulario = () => {
  const [categoria, setCategoria] = useState("");
  const [pais, setPais] = useState("");
  const [noticias, setNoticias] = useState([]);
  const [mostrarSpinner, setMostrarSpinner] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "pub_017614516865446c8e878da5b2e31250";

  const handleChangeCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const handleChangePais = (e) => {
    setPais(e.target.value);
  };

  useEffect(() => {
    if (categoria && pais) {
      obtenerNoticia();
    }
  }, [categoria, pais]);

  const obtenerNoticia = async () => {
    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${pais}&language=es&category=${categoria}`
      );
      if (respuesta.status === 200) {
        const datos = await respuesta.json();
        setNoticias(datos.results || []);
        setError(null);
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
            <Form.Select value={categoria} onChange={handleChangeCategoria}>
              <option value="">-- Elige una opción --</option>
              <option value="top">Principal</option>
              <option value="sports">Deportes</option>
              <option value="technology">Tecnología</option>
              <option value="business">Negocios</option>
              <option value="science">Ciencia</option>
              <option value="entertainment">Entretenimiento</option>
              <option value="health">Salud</option>
              <option value="world">Mundo</option>
              <option value="politics">Política</option>
              <option value="environment">Medio ambiente</option>
              <option value="tourism">Turismo</option>
              <option value="education">Educación</option>
              <option value="crime">Crimen</option>
              <option value="domestic">Nacional</option>
              <option value="food">Comida</option>
              <option value="lifestyle">Estilo de vida</option>
              <option value="other">Otro</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="d-flex justify-content-between mt-4">
            <Form.Label className="fw-bold me-3 w-50">
              Buscar por país
            </Form.Label>
            <Form.Select value={pais} onChange={handleChangePais}>
              <option value="">-- Elige un país --</option>
              <option value="ar">Argentina</option>
              <option value="au">Australia</option>
              <option value="at">Austria</option>
              <option value="be">Bélgica</option>
              <option value="br">Brasil</option>
              <option value="bg">Bulgaria</option>
              <option value="ca">Canadá</option>
              <option value="cn">China</option>
              <option value="co">Colombia</option>
              <option value="cu">Cuba</option>
              <option value="cz">Chequia</option>
              <option value="eg">Egipto</option>
              <option value="fr">Francia</option>
              <option value="de">Alemania</option>
              <option value="gr">Grecia</option>
              <option value="hk">Hong Kong</option>
              <option value="hu">Hungría</option>
              <option value="in">India</option>
              <option value="id">Indonesia</option>
              <option value="ie">Irlanda</option>
              <option value="il">Israel</option>
              <option value="it">Italia</option>
              <option value="jp">Japón</option>
              <option value="lv">Letonia</option>
              <option value="lb">Líbano</option>
              <option value="lt">Lituania</option>
              <option value="my">Malasia</option>
              <option value="mx">México</option>
              <option value="ma">Marruecos</option>
              <option value="nl">Países Bajos</option>
              <option value="nz">Nueva Zelanda</option>
              <option value="ng">Nigeria</option>
              <option value="kp">Corea del Norte</option>
              <option value="no">Noruega</option>
              <option value="pk">Pakistán</option>
              <option value="ph">Filipinas</option>
              <option value="pl">Polonia</option>
              <option value="pt">Portugal</option>
              <option value="ro">Rumania</option>
              <option value="ru">Rusia</option>
              <option value="sa">Arabia Saudita</option>
              <option value="rs">Serbia</option>
              <option value="sg">Singapur</option>
              <option value="sk">Eslovaquia</option>
              <option value="si">Eslovenia</option>
              <option value="za">Sudáfrica</option>
              <option value="kr">Corea del Sur</option>
              <option value="es">España</option>
              <option value="se">Suecia</option>
              <option value="ch">Suiza</option>
              <option value="tw">Taiwán</option>
              <option value="th">Tailandia</option>
              <option value="tr">Turquía</option>
              <option value="ua">Ucrania</option>
              <option value="ae">Emiratos Árabes Unidos</option>
              <option value="gb">Reino Unido</option>
              <option value="us">Estados Unidos</option>
              <option value="ve">Venezuela</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </section>
      {error && (
        <div className="alert alert-danger text-center fw-bold">{error}</div>
      )}
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
