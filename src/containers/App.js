import './App.css';
import Sidebar from '../components/sidebar/Sidebar';
import Logo from '../components/logo/Logo';

function App() {
  return (
    <div className="App">
      <Logo className="Logo" />
      <h1 className="Header">HELLO I AM HEADER</h1>
      <p className="Content">
        Hello, this is content.
        I am filled to the brim with content. The best content, some would say. The content is so content
        that it will leave you content with how fantastic the quality of the content was.
      </p>
      <Sidebar className="Sidebar" />
    </div>
  );
}

export default App;