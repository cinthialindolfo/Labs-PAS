// import logo from './assets/logo.svg';
// import Formulario from './components/Formulario';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.jsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://react.dev"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.jsx
import React from 'react';
import Formulario from './components/Formulario';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Formulário de Cadastro</h1>
      <Formulario />
    </div>
  );
}

export default App;