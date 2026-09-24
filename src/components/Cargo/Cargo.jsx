import React from "react";
import "../Cargo/Cargo.css";
import Nav from "../NavBar/nav";
import { Briefcase, MapPin, GraduationCap, School } from "lucide-react";
import img from "../../assets/astro.png"
import img2 from "../../assets/astro2.png"

const Cargo = () => {
  return (
    <>
      <Nav />
      <div className="cargo-container">
        <div className="cargo-card">
          <h1 className="nome">🔹Patrícia Lucena 🔹</h1>

          <div className="info-bloco">
            <h2 className="titulo">Cargo Atual</h2>
            <p><Briefcase size={18} /> <strong>Cargo:</strong> Desenvolvedora em COBOL Mainframe Jr</p>
            <p><MapPin size={18} /> <strong>Local:</strong> Spread Tecnologia</p>
          </div>

          <div className="info-bloco">
            <h2 className="titulo">Formação em andamento</h2>
            <p><GraduationCap size={18} /> <strong>Curso:</strong> Pós-graduação em Deep Learning </p>
            <p><School size={18} /> <strong>Instituição:</strong> CIn UFPE - EAD</p>
            <br />
            <h2 className="titulo">Formação Atual</h2>
            <p><GraduationCap size={18} /> <strong>Curso:</strong>Sistemas para Internet</p>
            <p><School size={18} /> <strong>Instituição:</strong> Universidade Católica em Pernambuco- UNICAP</p>
          </div>
        </div>

      
      <img src={img} alt="Fundo decorativo" className="fundo-imagem" />
        
     <img src={img2} alt="Fundo decorativo" className="fundo-imagem2" />
      </div>
    </>
  );
};

export default Cargo;
