function Header() {
  return (
    <header style={{ backgroundColor: "red" }}>
      <nav
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div>
          <ul>
            <li>
              <a href="#" style={{ color: "white" }}>
                Inicio{" "}
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "white" }}>
                Acerca
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "white" }}>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
