# 📰 Web de Noticias - React App

**Autor:** Marcos Joel Tebis  
**Tecnología:** React.js  
**API:** [NewsData.io](https://newsdata.io/docs)

---

## 📌 Descripción

Esta aplicación web permite al usuario visualizar noticias actualizadas, categorizadas por tipo (como tecnología, deportes, salud, etc.). El usuario puede seleccionar una categoría desde un `select` y las noticias serán cargadas automáticamente utilizando una de las APIs mencionadas. Ahora tambien se puede seleccionar las noticias por pais.

---

## 🎯 Objetivo

- Crear una interfaz de usuario en React para visualizar noticias.
- Consumir una API externa (NewsAPI o NewsData.io).
- Usar componentes React de forma modular.

---

## 🧩 Estructura de Componentes

- ### **Título**
  - Muestra el encabezado principal del sitio.
  
- ### **Formulario**
  - Contiene un `select` que permite elegir la categoría de noticias.
  - Al cambiar de categoría, actualiza las noticias listadas.

- ### **ListaNoticias**
  - Renderiza un conjunto de componentes `Noticia` en forma de cards.

- ### **Noticia**
  - Componente individual que representa una sola noticia, con:
    - Título
    - Imagen (si existe)
    - Descripción
    - Enlace a la noticia completa

---