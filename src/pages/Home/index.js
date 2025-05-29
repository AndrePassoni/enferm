import { Link } from "react-router-dom";
import Logo from "../../assets/Images/funcionalogo.png";
import "../Home/index.css";

import Theme from "../../components/Tema/tema";

const Home = () => {
    return (
        <main className="home">
            
    <div className='home-content-box'>

        <div className="header-background">
            <header className="custom-header">
        
               <Link to="/glossario" className="bar-link" >Glossário</Link>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <Link to="/penicilina" className="bar-link">Penicilina</Link>
                <div className="dot"></div>
                <div className="dot_home">
                   
                    <Link to="/" className="bar-link"></Link>
                </div>
                <div className="dot"></div>
                <Link to="/extra" className="bar-link">Extra</Link>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <Link to="/quiz" className="bar-link">Quiz</Link>
       
            </header>
        </div>

        <img src={Logo} alt="Logo" className="logo" />
        
        
        <Theme />
    
    </div>

    </main>
  );
}

export default Home;
