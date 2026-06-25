import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ICON + NOME */}
        <div className="footer-col">
          <img
            src="/icon.png"
            alt="Logo"
            className="footer-icon"
          />
        </div>

        {/* ENDEREÇO */}
        <div className="footer-col">
          <h3>ENDEREÇO</h3>
          <p>Beco da Última Saída, nº 13</p>
        </div>

        {/* CONTATO */}
        <div className="footer-col">
          <h3>CONTATO</h3>
          <p>contato@pocoes.com</p>
          <p>(11) 99999-9999</p>
        </div>

      </div>
    </footer>
  );
}