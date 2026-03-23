
import { Link } from "react-router-dom";
import React from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-40 transition-all duration-300 ${open ? "bg-black/30" : "pointer-events-none bg-transparent"}`}
      aria-hidden={!open}
      onClick={onClose}
    >
      <aside
        className={`bg-wedding-bg backdrop-blur-md shadow-lg w-64 min-h-screen p-8 flex flex-col gap-8 border-r border-wedding-text/20 fixed left-0 top-0 z-50 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="navigation"
        aria-label="Main navigation"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="mb-8 self-end text-wedding-heading hover:text-yellow-100 focus:outline-none"
          aria-label="Close sidebar"
          onClick={onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
        <nav className="flex flex-col gap-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-lg font-charen hover:text-yellow-100 transition-colors"
          >HOME</Link>
          <Link
            to="/day"
            className="flex items-center gap-3 text-lg font-charen hover:text-yellow-100 transition-colors"
          >
            SCHEDULE
          </Link>
           <Link
            to="/accommodation"
            className="flex items-center gap-3 text-lg font-charen hover:text-yellow-100 transition-colors"
          >
            ACCOMMODATION
          </Link>
          <Link
            to="/faq"
            className="flex items-center gap-3 text-lg font-charen hover:text-yellow-100 transition-colors"
          >
            FAQ
          </Link>
            <Link
            to="/gifts"
            className="flex items-center gap-3 text-lg font-charen hover:text-yellow-100 transition-colors"
          >
            GIFTS
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
