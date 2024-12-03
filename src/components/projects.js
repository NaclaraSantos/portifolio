// src/components/Projects.js
import React from 'react';

function Projects() {
    return (
        <section id="projects">
            <h2>Projetos</h2>
            <div className="carousel">
  <div className="carousel-item">

  <p className='title-project'>Gestão Smart</p>
  <img
  src={`${process.env.PUBLIC_URL}/projeto1.png`} // Ajuste o caminho se necessário
  alt="Ana Clara"                 
   />
   <button className='button-project'>
    <a href="https://naclarasantos.github.io/GestaoSmart/" target="_blank">Ver projeto</a>
    </button>
  </div>

  <div className="carousel-item">
  <p className='title-project'>Finanças</p>
  <img
  src={`${process.env.PUBLIC_URL}/projeto2.png`} // Ajuste o caminho se necessário
  alt="Ana Clara"                 
   />
   <button className='button-project'>
    <a href="https://naclarasantos.github.io/Financas/" target="_blank">Ver projeto</a>
    </button>
  </div>

  <div className="carousel-item">
  <p className='title-project'>Controle financeiro</p>
  <img
  src={`${process.env.PUBLIC_URL}/projeto3.png`} // Ajuste o caminho se necessário
  alt="Ana Clara"                 
   />
   <button className='button-project'>
    <a href="https://naclarasantos.github.io/ControleFinanceiro/" target="_blank">Ver projeto</a>
    </button>
  </div>

  <div className="carousel-item">
   <p className='title-project'>Calculadora-IMC</p>
  <img
  src={`${process.env.PUBLIC_URL}/projeto4.png`} // Ajuste o caminho se necessário
  alt="Ana Clara"                 
   />
   <button className='button-project'>
    <a href=" https://naclarasantos.github.io/calculadora-imc/" target="_blank">Ver projeto</a>
    </button>
  </div>

  <div className="carousel-item">
 <p className='title-project'>Relógio Digital</p>
  <img
  src={`${process.env.PUBLIC_URL}/projeto5.png`} // Ajuste o caminho se necessário
  alt="Ana Clara"                 
   />
    <button className='button-project'>
    <a href="https://naclarasantos.github.io/Rel-gio_Digital/" target="_blank">Ver projeto</a>
    </button>
  </div>

  <div className="carousel-item">
  <p className='title-project'>Jornada Tech</p>
  <img
  src={`${process.env.PUBLIC_URL}/projeto6.png`} // Ajuste o caminho se necessário
  alt="Ana Clara"                 
   />
    <button className='button-project'>
    <a href="https://naclarasantos.github.io/Jornada-Tech/" target="_blank">Ver projeto</a>
    </button>
  </div>
</div>




        </section>
        
    );
}

export default Projects;
