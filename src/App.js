import logo from './logo.svg';
import './App.css';
import Heloword from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {
  const meusItens = ['React', 'Vue', 'Angular'];
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
     <Frase />
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
    <List />
    <Evento  />
    
    <Form />
    <Condicional />
    <OutraLista itens={meusItens} />
    <OutraLista itens={[]} />
    </div>
  );
}

export default App;
