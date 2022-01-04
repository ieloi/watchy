import './App.css';
import Navbar from './components/Navbar';

function App() {

  const conteudos = [
    {
      slug : 'trending',
      title : 'conteudos populares',
      items : [
        {
          id : 1,
          nome: 'Gavião Arqueiro',
          image: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/10/25/1951977611-hawkeyever2xlg.jpg' 
        },
        {
          id : 2,
          nome: 'A Roda do Tempo',
          image: 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2021/10/08/1472715160-wofts1onesheetheroesvillainspre27x40thafinalpt-br.jpg' 
        },
        {
          id : 3,
          nome: 'Acapulco',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxPfrdhr4OHAWGZFRt4QV5BvG1r89mhJ1tv8b6X7GgnvSFkiPhH0PX-E9jgM9pMjR0AQ&usqp=CAU' 
        },
      ]  
    },
    {
      slug : 'comedy',
      title : 'comédias',
      items : [
        {
          id : 1,
          nome: 'Modern Family',
          image: 'http://poltronanerd.com.br/wp-content/uploads/2016/08/modern.poster.jpg' 
        },
        {
          id : 2,
          nome: 'Black-ish',
          image: 'http://www.spinoff.com.br/wp-content/uploads/blackish-key-art-full.jpg' 
        },
        {
          id : 3,
          nome: 'Ted Lasso',
          image: 'https://entreterse.com.br/wp-content/uploads/2020/12/Ted-Lasso-Poster-2.jpg' 
        },
      ] 
    }
  ]

  const titulo_capa = {
    id : 1,
    title : 'The Witcher',
    capa : 'https://uploads.jovemnerd.com.br/wp-content/uploads/2019/11/v-witcher-1.jpg'
  }

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
