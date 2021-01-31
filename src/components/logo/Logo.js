import './Logo.css';
import logo from '../../resources/logo.png';

function Logo() {
  return (
    <div>
        <img src={logo} className="Logo" alt="logo" />
    </div>
  );
}

export default Logo;