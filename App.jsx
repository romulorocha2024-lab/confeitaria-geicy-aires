import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Cardapio from './pages/Cardapio';
import Contato from './pages/Contato';

function App() {
  const urlAtual = window.location.pathname;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'sans-serif', backgroundColor: '#fffafb' }}>
      <Header />
      
      <main style={{ flex: 1 }}>
        {(urlAtual === '/' || urlAtual === '/inicio') && <Inicio />}
        {urlAtual === '/cardapio' && <Cardapio />}
        {urlAtual === '/contato' && <Contato />}
      </main>

      <Footer />
    </div>
  );
}

export default App;