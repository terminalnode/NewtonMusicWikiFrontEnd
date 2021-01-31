import './App.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Logo from '../../components/logo/Logo';
import ContentDisplay from '../content-display/ContentDisplay';
import { useState } from 'react';

function App() {
  const [ contentName, setContentName ] = useState("home")

  return (
    <div className="AppGrid">
      <Logo />
      <Sidebar setContentNameFunction={setContentName} />
      <ContentDisplay contentName={contentName} />
    </div>
  );
}

export default App;