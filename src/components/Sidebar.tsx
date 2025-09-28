import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { NavItem } from '../types/navigation';

interface SidebarProps {
  mainLinks: NavItem[];
  toolLinks: NavItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ mainLinks, toolLinks }) => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-white sidebar collapse">
      <div className="position-sticky pt-3 sidebar-sticky">

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>me</span>
        </h6>

        <ul className="nav flex-column">
          {mainLinks.map((item) => (
            <li key={item.href} className="nav-item">
              <NavLink
                to={item.href}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                aria-current={item.href === window.location.pathname ? 'page' : undefined}
              >
                {item.icon && <i className={`${item.icon} me-2`} />} {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Tools</span>
        </h6>

        <ul className="nav flex-column mb-2">
          {toolLinks.map((item) => (
            <li key={item.href} className="nav-item">
              <Link className="nav-link" to={item.href}>
                {item.icon && <i className={`${item.icon} me-2`} />} {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
