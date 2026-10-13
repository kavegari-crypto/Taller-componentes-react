import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main id="inicio" className="app-container">
        <section className="intro">
          <h1>Control de materiales</h1>
          <p>
            Consulta los materiales, sus categorías y los costos
            estimados de tu proyecto de construcción.
          </p>
        </section>

        <section id="materiales" className="card-grid">
          <Card
            material="Concreto"
            categoria="Estructural"
            costo={19500000}
            imagen="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=800&q=80"
          />

          <Card
            material="Pintura"
            categoria="Acabados"
            costo={10200000}
            imagen="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80"
          />

          <Card
            material="Arena"
            categoria="Estructural"
            costo={55000000}
            imagen="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
          />

          <Card
            material="Baldosa"
            categoria="Acabado"
            costo={72000000}
            imagen="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
