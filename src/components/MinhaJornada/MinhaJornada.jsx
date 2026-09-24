import React from "react";
import "./MinhaJornada.css";
import Nav from "../NavBar/nav";

const MinhaJornada = () => {
  const timelineData = [
    { year: "2022", icon: "🎓", text: "Recém terminado o ensino médio e sem expectativas sobre o futuro. A única certeza que tinha era o curso de letras que iria começar em novembro daquele ano. Havia passado na UFPE através do Enem." },
    { year: "2022.1", icon: "💻", text: "Por destino, conheci o curso Start da rede cidadã. Nele tive meu primeiro contato com o famoso: computador. Aprendi lógica de programação, HTML, CSS, MySQL e um pouco de Java." },
    { year: "2022.2", icon: "🚀", text: "Por destino também, surgiu uma vaga no Embarque Digital. Me matriculei em Sistemas para Internet na UNICAP, largando Letras, e entrei para o ramo que trouxe expectativas para o futuro." },
    { year: "2023", icon: "👩‍💻", text: "Entrei no meu primeiro estágio pela Prefeitura do Recife, desenvolvendo habilidades técnicas, comunicação e resiliência. Uma experiência inesquecível." },
    { year: "2024", icon: "📊", text: "Enfrentei dificuldades no curso, mas comecei a desenvolver APIs em projetos internos e externos. Aqui descobri minha paixão: análise de dados." },
    { year: "2025", icon: "🏫", text: "Entre 2025-2026 fui instrutora pleno na Rede Senac Pernambuco. Construi pontes e amizades." },
    { year: "2026", icon: "💾", text: "Hoje sou dev. em COBOL Mainframe pela Spread Tecnologia. Continuando a sonhar e estudar sem parar." },
  ];

  return (
    <div className="minha-jornada">
      <Nav />
      <main className="minha-jornada-container">
        <h1 className="timeline-title">Minha Jornada</h1>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="icon">{item.icon}</div>
              <div className="year">{item.year}</div>
              <div className="text">
                <p>{item.text}</p>
              </div>
              {index < timelineData.length - 1 && <div className="timeline-line"></div>}
            </div>
          ))}
        </div>
        <div className="decorative-astronaut"></div>
        <div className="decorative-astronaut-2"></div>
      </main>
    </div>
  );
};

export default MinhaJornada;
