import './Logo.css';
import logo from '../../resources/logo.svg';

function Logo() {
  return (
    <div>
        <img src={logo} className="Logo" alt="logo" />
    </div>
  );
}

export default Logo;