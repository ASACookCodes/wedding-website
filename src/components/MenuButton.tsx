import { useState } from "react";
import Sidebar from "./sidebar";

const MenuButton = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <button
                className="fixed top-4 left-4 z-50 min-w-[100px] bg-yellow-100 text-wedding-text rounded-full shadow-lg p-3 focus:outline-none hover:bg-yellow-200 transition-colors"
                aria-label="Open sidebar"
                onClick={() => setSidebarOpen(true)}
            >
                <span className="font-charen" aria-hidden="true">☰ Menu</span>
            </button>
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    )
};

export default MenuButton;