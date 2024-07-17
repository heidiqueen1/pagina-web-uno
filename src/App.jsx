import React from "react";
import Contenedores from "./componentes/Contenedores";
import "./App.css";
import Heidi from "./componentes/Heidi";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Layout/>}>
        <Route path="/" element= {<Home/>} />
        <Route path="./componentes/Heidi" element= {<Heidi/>} />
        <Route path="/blog" element= {<Blog/>} />
        <Route path="/contacto" element= {<Contacto/>} />

        </Route>
      </Routes>
      
      <Heidi/>

      <Contenedores
        id="contenedorUno"
        titulo="Soy tu Asesora en @MigraciónExitosa"
        sub=""
        cuerpo=""
        style={{
          backgroundColor: "#dfdce3ce",
          padding: "20px",
          borderRadius: "10px",
        }}
      />

      <Contenedores
        titulo="Heidi Sánchez"
        sub="Msc Asesoramiento y Desarrollo Humano"
        cuerpo="Un gusto tenerles por aquí. Mi nombre es Heidi Sánchez, soy Licenciada en Letras y Diplomada en Enseñanza de Español como Segunda Lengua, ambos títulos obtenidos en la Universidad Central de Venezuela. Además, estudié una Maestría en Asesoramiento y Desarrollo Humano en la Universidad Experimental Simón Rodríguez. Amo la tecnología, por lo que realicé un Bootcamp en Desarrollo de Frontend y sigo aprendiendo muchas cosas más.
Hace ocho años me vi en la necesidad de emigrar de mi amado país natal, Venezuela, junto con mis dos hijos y esposo. Transitamos el mismo camino que muchos venezolanos, sin una base económica sólida ni un plan perfectamente delineado. Vivimos aproximadamente seis meses en Colombia y posteriormente llegamos a Ecuador, donde pudimos sentar bases. Nuestra historia familiar de migración da para otro libro, así que no profundizaré mucho en ello. Más bien, lo que quiero resaltar es que gracias al proceso de la migración y a la curva del cambio, pude descubrir nuevas posibilidades en mí misma.
Estas posibilidades han permitido que una humanista con alta sensibilidad social se haya abocado a aprender tecnología, reinventarse y entrar al mundo del trabajo remoto. Hoy en día, puedo compartir mi experiencia después de cinco años trabajando en remoto.
En este sentido, he visto historias de otras personas de diversas edades, incluyendo algunas mayores, que han logrado adaptarse a esta modernidad líquida y mantenerse competitivas en el mundo profesional a distancia.
Si estás aquí, te pido que no desistas de tu sueño. Sé que no es un paso fácil y que no necesariamente lo lograrás en tres meses, pero lo más importante es dar el primer paso y, aún más importante, perseverar en esta nueva forma de trabajar."
        style={{
          backgroundColor: "#dfdce3ce",
          padding: "20px",
          borderRadius: "10px",
        }}
      />
      <Contenedores
        titulo="Titulo 3"
        sub="subtitulo"
        cuerpo="lorem ipsum lorem ipsum"
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default App;
