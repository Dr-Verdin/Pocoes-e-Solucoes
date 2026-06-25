import { useEffect, useState } from "react";
import { api } from "../services/api";
import Footer from "../components/Footer";
import "../styles.css";

export default function Home() {
  const [potions, setPotions] = useState([]);

  useEffect(() => {
    api.get("/potions").then((res) => setPotions(res.data));
  }, []);

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">
          Poções e Soluções
        </h1>

        <p className="hero-text">
          A Poções e Soluções é a loja mais tradicional do Beco da Última Saída,
          especializada em poções artesanais, experimentais e históricas.
          Desde o século XIX, ajudamos bruxos e alquimistas a encontrar soluções
          para os problemas mais complexos da magia moderna.
        </p>
      </section>

      {/* HISTÓRIA */}
      <section className="history">
        <h2 className="section-title">
          Nossa História (desde 1867)
        </h2>

        <p className="section-text">
          Fundada em 1867 por Annabelle Merigold, a loja nasceu como um pequeno
          laboratório alquímico no Beco da Última Saída. Ao longo dos anos,
          tornou-se referência em poções experimentais e de uso cotidiano no
          mundo bruxo.
        </p>

        <div className="history-images">
          <img src="/images/historia_1.png" />
          <img src="/images/historia_2.png" />
          <img src="/images/historia_3.png" />
        </div>
      </section>

      {/* PRODUTOS */}
      <section className="products">
        <h2 className="section-title">
          Poções disponíveis
        </h2>

        <div className="product-grid">
          {potions.map((p) => (
            <div key={p.id} className="product-card">

              <img
                src={p.image}
                alt={p.name}
                className="product-image"
              />

              <h3 className="product-name">
                {p.name}
              </h3>

              <p className="product-desc">
                {p.description}
              </p>

              <strong className="product-price">
                {p.price} moedas
              </strong>

              <div className="product-button-area">
                <button className="btn-padrao">
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}