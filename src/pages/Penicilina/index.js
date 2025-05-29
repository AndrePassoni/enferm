import { useState } from "react";
import { Link } from "react-router-dom";
import Theme from "../../components/Tema/tema";
import "../Penicilina/index.css";

export default function Penicilina() {
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState("");

  const calcularDose = () => {
    const pesoNum = parseFloat(peso);
    if (isNaN(pesoNum) || pesoNum <= 0) {
      setResultado("Insira um peso válido.");
      return;
    }

    const dosePorKg = 50000;
    const doseTotal = pesoNum * dosePorKg;
    setResultado(`Dose total recomendada: ${doseTotal.toLocaleString()} UI`);
  };

  return (
    <div className="home-content-box">
      {/* Header */}
      <div className="header-background">
        <header className="custom-header">
          <Link to="/glossario" className="bar-link">Glossário</Link>
          <div className="dot"></div><div className="dot"></div><div className="dot"></div>
          <Link to="/penicilina" className="bar-link">Penicilina</Link>
          <div className="dot"></div>
          <div className="dot_home"><Link to="/" className="bar-link"></Link></div>
          <div className="dot"></div>
          <Link to="/extra" className="bar-link">Extra</Link>
          <div className="dot"></div><div className="dot"></div><div className="dot"></div>
          <Link to="/quiz" className="bar-link">Quiz</Link>
        </header>
      </div>

      <Theme />

      {/* Conteúdo da calculadora */}
      <main className="penicilina">
        <div className="penicilina-content-box">
          <h1>Calculadora de Penicilina</h1>
          <p>
            A penicilina é um antibiótico utilizado para tratar infecções bacterianas. Ela foi descoberta em 1928 por Alexander Fleming e revolucionou a medicina.
          </p>

          <label htmlFor="peso">Peso do paciente (kg):</label>
          <input
            id="peso"
            type="number"
            placeholder="Ex: 70"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />

          <button onClick={calcularDose}>Calcular</button>

          {resultado && <div className="resultado">{resultado}</div>}

   
        </div>
      </main>
    </div>
  );
}
