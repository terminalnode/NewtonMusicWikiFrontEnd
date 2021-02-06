import './SidebarLink.css';

function Sidebar({children, text, onLinkClick}) {
  return (
    <div className="SidebarLink">
        <div className="SidebarLinkText" onClick={onLinkClick}>
          {text}
        </div>
        <div className="SidebarLinkChild">{children}</div>
    </div>

  );
}

export default Sidebar;