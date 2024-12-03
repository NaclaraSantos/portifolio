// src/components/Header.js
import React from 'react';

function Header() {
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', padding: '25px', position:'fixed'}}>
            <nav>
                <a href="#about">SOBRE MIM</a> | 
                <a href="#projects">PROJETOS</a> | 
                <a href="#contact">CONTATO</a>  
                <a class="flutuante" href="https://doc-0o-ak-apps-viewer.googleusercontent.com/viewer/secure/pdf/r0rncd9c2hv33sl5k9vbks1gj8gdk0n2/qo3klo4vumacbmka68c6me28bnlvv3do/1729540950000/gmail/03813436337152343359/ACFrOgDvi7U1Ibglv_aztEtN7NAToDyH11cAtWnvkv9M2LF_D8AMhINov5BDUSPMdW2e45qWjBvyJbx0tqc9k2Nz6F3BDIeDe_2pTOvPy_5BiDNlzwj2fJIDdVf1pdod86B3vy31YefkWemhg1KF?print=true&nonce=ci0g4bq4hoj78&user=03813436337152343359&hash=lgv4o5jhuh6dc3pajoqdpruc4m57v6k8" >DOWLOAD CV</a>
            </nav>
        </header>
    );
}

export default Header;
