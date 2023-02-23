import logo from './logo.svg';
import './App.css';
import Heloword from './components/HelloWord';

function App() {
  const name = 'Luiz Augusto ';
  const email = 'n0cturn0.debian@gmail.com';
  const newname = name.toUpperCase();
  function sum(a,b)
  {
    return a+b;
  }

  const url = 'https://via.placeholder.com/150';
  return (
    <div className="App">
     Hello Word!
     <p>Olá {newname}</p>
     <p>{email}</p>
     <p>{10/5}</p>
     <p>Soma: {sum(90,7654)}</p>
     <img src={url} />

     {/* Call Component */}
     <Heloword />
    </div>
  );
}

export default App;
