import "./App.css";

import Comentario from "./components/Comentario";

function App() {
  return (
    <div className="App">
      <h1>Meu projeto</h1>
      <Comentario name="João" email="joao@email.com" date={new Date(2022, 3, 19)}>
        Olá, tudo bem?
      </Comentario>
      <Comentario name="Maria" email="maria@email.com" date={new Date(2022, 3, 21)}>
        Olá, tudo bem sim.
      </Comentario>
    </div>
  );
}

export default App;
