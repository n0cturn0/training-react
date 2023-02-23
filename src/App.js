import logo from './logo.svg';
import './App.css';
import Heloword from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const name = 'Luiz Augusto ';
  const email = 'n0cturn0.debian@gmail.com';
  const newname = name.toUpperCase();
  const nome = 'Joaquim';
  function sum(a,b)
  {
    return a+b;
  }

  const url = 'https://via.placeholder.com/150';
  return (
    <div className="App">
     Hello Word!
     <p>Soma: {sum(90,7654)}</p>
     <img src={url} />

     {/* Call Component */}
     {/* <Heloword /> */}
     <SayMyName nome="Luiz Augusto" />
     <SayMyName nome="Fulano" />
     <SayMyName nome={nome} />

     <Pessoa 
     nome="Luiz Augusto" 
     idade="99"
     profissao="Programador"
     foto="https://via.placeholder.com/150"
     />

    </div>
  );
}

export default App;
