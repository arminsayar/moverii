const Header = () => {
  return (
    <>
      <header className="w-full h-24">
        <nav className="flex items-center justify-between">
        <div className="mt-5">
            <img className="logo" src="./files/Logo.png" alt="lego"/>
          </div>
          <ul className="mt-5 flex justify-end items-center">
            <li className="dutch-li">
            <span className="dutch-ico"><img src="./files/image5.png" alt="dutch"/></span> Dutch <span className="dutch-arrow"><img src="./files/Shape.png"/></span>
            </li>
            <li className="ml-16 fav-li"><span className="fav-ico"><img src="./files/1.png"/></span>Favoriten</li>
            <li className="ml-16 help-li"><span className="help-ico"><img src="./files/2.png"/></span>Hilfe</li>
            <li className="ml-16 search-li"><span className="search-ico"><img src="./files/3.png"/></span>Suche</li>
            <li className="ml-16 acc-li"><span className="acc-ico"><img src="./files/4.png"/></span>Anmelden</li>
            <li className="ml-16 button-background sign-button">Registrieren</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
