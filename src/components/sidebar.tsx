import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-wedding-bg backdrop-blur-md shadow-lg w-64 min-h-screen p-8 flex flex-col gap-8 border-r border-wedding-text/20">
      <div className="mb-8">
      </div>
      <nav className="flex flex-col gap-4">
        <Link
          to="/"
          className="flex items-center gap-3 text-lg font-charen hover:text-pink-400 transition-colors"
        >HOME</Link>
        <Link
          to="/venue"
          className="flex items-center gap-3 text-lg font-charen hover:text-pink-400 transition-colors"
        >
          VENUE
        </Link>
        <Link
          to="/day"
          className="flex items-center gap-3 text-lg font-charen hover:text-pink-400 transition-colors"
        >
          SCHEDULE
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
