import React, { useState } from "react";
import { Link } from "react-router-dom";
import Theme from "../../components/Tema/tema";
import questionsData from "../../components/questions";
import "../Quiz/index.css";

// Criar 10 unidades com 3 perguntas cada
const units = {};
for (let i = 1; i <= 10; i++) {
  units[`Unidade ${i}`] = questionsData.filter((q) => q.unit === i).slice(0, 3);
}

const Quiz = () => {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  const questions = selectedUnit ? units[selectedUnit] : [];

  const handleUnitSelect = (unitName) => {
    setSelectedUnit(unitName);
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnsweredQuestions([]);
  };

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (!answeredQuestions.includes(current)) {
      setAnsweredQuestions([...answeredQuestions, current]);
    }

    setTimeout(() => {
      if (current + 1 < questions.length) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setSelectedUnit(null);
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

      <div className="quiz-wrapper">
        {/* Sidebar - Unidades */}
        <aside className="quiz-sidebar">
          <h3>Unidades</h3>
          <ul className="unit-list-vertical">
            {Object.keys(units).map((unitName) => (
              <li key={unitName}>
                <button
                  className={`unit-tab ${selectedUnit === unitName ? "active" : ""}`}
                  onClick={() => handleUnitSelect(unitName)}
                >
                  {unitName}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Conteúdo - Perguntas */}
        <main className="quiz-main">
          {!selectedUnit ? (
            <div className="unit-placeholder">
              <p>Selecione uma unidade ao lado para começar.</p>
            </div>
          ) : finished ? (
            <div className="result">
              <h2>Resultado</h2>
              <p>Você acertou {score} de {questions.length} perguntas.</p>
              <button onClick={restartQuiz}>Escolher outra unidade</button>
            </div>
          ) : (
            <div className="question-box">
              <h2>{questions[current]?.question}</h2>
              <div className="options">
                {questions[current].options.map((option) => (
                  <button
                    key={option}
                    className={`option-button ${
                      selected
                        ? option === questions[current].answer
                          ? "correct"
                          : option === selected
                          ? "incorrect"
                          : ""
                        : ""
                    }`}
                    onClick={() => handleAnswer(option)}
                    disabled={selected}
                  >
                    {option}
                  </button>
                ))}
              </div>

              <div className="quiz-progress">
                {[...Array(questions.length)].map((_, index) => (
                  <div
                    key={index}
                    className={`progress-dot ${
                      answeredQuestions.includes(index) ? "answered" : ""
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Quiz;
