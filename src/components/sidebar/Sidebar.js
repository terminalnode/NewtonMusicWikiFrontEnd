import './Sidebar.css';
import SidebarLink from './sidebar-link/SidebarLink'

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarLink text="Artists">
        <SidebarLink text="People" />
        <SidebarLink text="Bands" />
      </SidebarLink>
      <SidebarLink text="Albums" />
      <SidebarLink text="Songs" />
    </div>
  );
}

export default Sidebar;