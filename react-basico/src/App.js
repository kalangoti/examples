import { Component } from "react";
import "./App.css";

import Comentario from "./components/Comentario";

// Stateful Components
class App extends Component {
  state = {
    comentarios: [
      {
        id: 123,
        name: "João",
        email: "joao@email.com",
        date: new Date(2022, 3, 19),
        message: "Olá, tudo bem?",
      },
      {
        id: 321,
        name: "Maria",
        email: "maria@email.com",
        date: new Date(2022, 3, 21),
        message: "Olá, tudo bem sim.",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, index) => (
          <Comentario
            key={index}
            name={comentario.name}
            email={comentario.email}
            date={comentario.date}
          >
            {comentario.message}
          </Comentario>
        ))}
      </div>
    );
  }
}

export default App;
