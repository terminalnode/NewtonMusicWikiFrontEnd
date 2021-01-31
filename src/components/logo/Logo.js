import './Logo.css';
import logo from '../../resources/logo.png';

function Logo() {
  return (
    <div className="Logo">
        <img src={logo} className="LogoImage" alt="logo" />
    </div>
  );
}

export default Logo;