import { Link } from "react-router-dom";
import "../Glossário/index.css";
import Theme from "../../components/Tema/tema";
import { useState, useEffect } from "react";
import glossaryData from "../../components/glossarioData";

export default function Glossário() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Atualizar sugestões quando o input muda
  useEffect(() => {
    if (input.trim() === "") {
      setSuggestions([]);
      return;
    }

    const matchedTerms = glossaryData.filter(item =>
      item.term.toLowerCase().includes(input.toLowerCase())
    ).slice(0, 5); // Limita a 5 sugestões

    setSuggestions(matchedTerms);
  }, [input]);

  const handleSend = () => {
    if (!input.trim()) return;

    const termEntry = glossaryData.find(item =>
      item.term.toLowerCase() === input.toLowerCase()
    );

    setMessages(prev => [
      ...prev,
      { sender: "user", text: input },
      {
        sender: "bot",
        text: termEntry
          ? `${termEntry.term}: ${termEntry.definition}`
          : "Termo não encontrado no glossário."
      }
    ]);

    setInput("");
    setShowSuggestions(false);
  };

  const handleTermClick = (term) => {
    setInput(term);
    setShowSuggestions(false);
    
    const termEntry = glossaryData.find(item =>
      item.term.toLowerCase() === term.toLowerCase()
    );

    setMessages(prev => [
      ...prev,
      { sender: "user", text: term },
      {
        sender: "bot",
        text: termEntry
          ? `${termEntry.term}: ${termEntry.definition}`
          : "Termo não encontrado no glossário."
      }
    ]);
  };

  const handleSuggestionClick = (term) => {
    setInput(term);
    setShowSuggestions(false);
    handleTermClick(term);
  };

  return (
    <main className="glossario">
      <div className="home-content-box">
        <div className="header-background">
          <header className="custom-header">
            <Link to="/glossario" className="bar-link">Glossário</Link>
            <div className="dot"></div><div className="dot"></div><div className="dot"></div>
            <Link to="/penicilina" className="bar-link">Penicilina</Link>
            <div className="dot"></div>
            <div className="dot_home">
              <Link to="/" className="bar-link"></Link>
            </div>
            <div className="dot"></div>
            <Link to="/extra" className="bar-link">Extra</Link>
            <div className="dot"></div><div className="dot"></div><div className="dot"></div>
            <Link to="/quiz" className="bar-link">Quiz</Link>
          </header>
        </div>

        <div className="glossario-box">
          <div className="glossario-chat">
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  {msg.text}
                </div>
              ))}
            </div>
            <div className="input-area">
              <div className="suggestion-wrapper">
                <input
                  type="text"
                  value={input}
                  onChange={e => {
                    setInput(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  placeholder="Digite um termo..."
                  onKeyDown={e => e.key === "Enter" && handleSend()}
                />
                {showSuggestions && suggestions.length > 0 && (
                  <ul className="suggestions-list">
                    {suggestions.map((item, index) => (
                      <li 
                        key={index}
                        onClick={() => handleSuggestionClick(item.term)}
                        onMouseDown={(e) => e.preventDefault()} // Evita perder o foco do input
                      >
                        {item.term}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <button onClick={handleSend}>Buscar</button>
            </div>
          </div>
        </div>
          <Theme />
      </div>

    
    </main>
  );
}