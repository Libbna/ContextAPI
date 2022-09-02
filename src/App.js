import logo from './logo.svg';
import './App.css';
import { JetProvider } from './context/JetContext';
import Nav from './components/Nav';
import AddJet from './components/AddJet';
import JetList from './components/JetList';

function App() {
  return (
    <JetProvider>
      <div className="App">
        <Nav />
        <AddJet />
        <JetList />
      </div>
    </JetProvider>
  );
}

export default App;
