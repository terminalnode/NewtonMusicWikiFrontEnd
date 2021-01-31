import './SidebarLink.css';

function Sidebar({children, text, onLinkClick}) {
  return (
    <div className="SidebarLink">
        <p onClick={onLinkClick}>{text}</p>
        <p className="SidebarLinkChild">{children}</p>
    </div>

  );
}

export default Sidebar;