const Header = () => {
  return (
    <>
      <header className="w-full h-24">
        <nav className="flex items-center justify-between">
        <div className="mt-5">
            <img className="logo" src="./files/Logo.png" alt=""Logo/>
          </div>
          <ul className="mt-5 flex justify-end items-center">
            <li className="">
              <select>
                <option>Dutch</option>
              </select>
            </li>
            <li className="ml-10">Favorite</li>
            <li className="ml-10">help</li>
            <li className="ml-10">search</li>
            <li className="ml-10">account</li>
            <li className="ml-10 button-background sign-button">sign in</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
