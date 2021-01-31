import './SidebarLink.css';

function Sidebar({children, text}) {
  return (
    <div className="SidebarLink">
        <p>{text}</p>
        <p className="SidebarLinkChild">{children}</p>
    </div>

  );
}

export default Sidebar;