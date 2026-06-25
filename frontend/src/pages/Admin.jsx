import { useEffect, useState } from "react";
import { api } from "../services/api";
import "../styles.css";

export default function Admin() {
  const [potions, setPotions] = useState([]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
    price: "",
  });

  async function load() {
    const res = await api.get("/potions");
    setPotions(res.data);
  }

  useEffect(() => {
    load();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function createPotion(e) {
    e.preventDefault();

    await api.post("/potions", {
      ...form,
      price: Number(form.price),
    });

    setForm({ name: "", description: "", image: "", price: "" });
    load();
  }

  async function deletePotion(id) {
    await api.delete(`/potions/${id}`);
    load();
  }

  return (
    <div className="admin-container">

      <h1 className="admin-title">
        Administrador
      </h1>

      {/* FORM */}
      <form className="admin-form" onSubmit={createPotion}>
        <input
          name="name"
          placeholder="Nome"
          value={form.name}
          onChange={handleChange}
          className="admin-input"
        />

        <input
          name="description"
          placeholder="Descrição"
          value={form.description}
          onChange={handleChange}
          className="admin-input"
        />

        <input
          name="image"
          placeholder="Imagem URL"
          value={form.image}
          onChange={handleChange}
          className="admin-input"
        />

        <input
          name="price"
          placeholder="Preço"
          value={form.price}
          onChange={handleChange}
          className="admin-input"
        />

        <button type="submit" className="btn-primary">
          Adicionar item
        </button>
      </form>

      {/* LIST */}
      <div className="admin-list">
        {potions.map((p) => (
          <div key={p.id} className="admin-card">
            <span>
              {p.name} — {p.price} moedas
            </span>

            <button
              className="btn-padrao"
              onClick={() => deletePotion(p.id)}
            >
              Excluir
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}