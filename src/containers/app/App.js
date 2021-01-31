import './App.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Logo from '../../components/logo/Logo';
import ContentDisplay from '../content-display/ContentDisplay';

function App() {
  return (
    <div className="App">
      <Logo className="Logo" />
      <Sidebar className="Sidebar" />
      <ContentDisplay className="ContentDisplay" />
    </div>
  );
}

export default App;