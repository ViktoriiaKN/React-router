import { Outlet, Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container">
     <h1>Dětský koutek</h1>
     <p>Vítejte v našem dětském koutku! Jsme místo plné zábavy a dobrodružství pro všechny děti do 6 let. Najdete u nás hry, aktivity, kvízy a mnoho dalšího, co zabaví vaše ratolesti a pomůže jim učit se nové věci. Vyberte si některou z našich poboček a začněte objevovat svět plný překvapení!</p>
     <nav>
        <Link to="/contact">Contact</Link>
        <span> | </span>
        <Link to="/about">About</Link>
        <span> | </span>
        <Link to="/pobocky">Pobočky</Link>
      </nav>
<Outlet/>
    </div>

    
  );
};
