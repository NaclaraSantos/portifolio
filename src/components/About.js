// src/components/About.js
import React from 'react';

function About() {
    return (
        <section>
          <div id="about">
            <div className="apresentacao">
                <div className="apresentacao1"> Olá! Eu sou a</div>
                <div className="apresentacao2">Ana Clara</div>
                <div className="apresentacao3">Desenvolvedora Front End</div>
                <div className='sobreMim'>Sobre Mim
                  <p className='descricao'>
                      Olá! Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente estagiária na área de sistemas na Prefeitura Municipal de Nova Lima. Possuo sólidos conhecimentos em linguagens de programação como JavaScript, Python, C e C#, além de experiência com os frameworks web React e Bootstrap.
                  </p>
                </div>
            </div>
          
            <h2 className="sobre"></h2>
            <div style={{ display: 'flex', flexDirection: 'row-reverse', alignItems: 'left', gap:950}}>
                <div className="img-max">
                    <img
                        src={`${process.env.PUBLIC_URL}/minha-imagem.jpg`} // Ajuste o caminho se necessário
                        alt="Ana Clara"
                        style={{ width: '480px', height: '480px', borderRadius: '50%', objectFit: 'cover', display: 'flex' , marginLeft:'530px', marginTop:'50px'}} 
                    />
                </div>
            </div>
            </div>
        </section>
       
    );
}

export default About;
