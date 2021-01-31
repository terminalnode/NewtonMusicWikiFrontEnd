import './Sidebar.css';
import SidebarLink from './sidebar-link/SidebarLink'

function Sidebar({setContentNameFunction}) {
  return (
    <div className="Sidebar">
      <SidebarLink onLinkClick={() => setContentNameFunction("home")} text="Home" />
      <SidebarLink onLinkClick={() => setContentNameFunction("artists")} text="Artists">
        <SidebarLink onLinkClick={() => setContentNameFunction("artists-people")} text="- People" />
        <SidebarLink onLinkClick={() => setContentNameFunction("artists-band")} text="- Bands" />
      </SidebarLink>
      <SidebarLink onLinkClick={() => setContentNameFunction("albums")} text="Albums" />
      <SidebarLink onLinkClick={() => setContentNameFunction("songs")} text="Songs" />
    </div>
  );
}

export default Sidebar;