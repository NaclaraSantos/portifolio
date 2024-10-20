// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '25px', position:'fixed'}}>
            <nav>
                <a href="#about">SOBRE MIM</a> | 
                <a href="#projects">PROJETOS</a> | 
                <a href="#contact">CONTATO</a>  
                <a class="flutuante" href="file:///C:/Users/usu%C3%A1rio/Downloads/Curr%C3%ADculo%20TI%20%202024%20(1).pdf" >DOWLOAD CV</a>
            </nav>
        </header>
    );
}

export default Header;
