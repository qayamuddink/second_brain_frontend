import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./Sidebaritems";
import { CrossIcon } from "../icons/CrossIcons";
import { Toggle } from "../icons/Toggles";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  isMobile: boolean;
}

export function Sidebar({ sidebarOpen, setSidebarOpen, isMobile }: SidebarProps) {
  return (
    <>
      {/* Overlay (visible on mobile when sidebar is open) */}
      {isMobile && sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`h-screen bg-white border-r fixed left-0 top-0 pl-6 transition-all duration-300 z-50 ${
          isMobile
            ? `w-72 transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`
            : `w-72 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`
        }`}
      >
        {/* Close Button (visible on mobile) */}
        {isMobile && sidebarOpen && (
          <div className="flex justify-end pr-6 pt-4">
            <button
              className="cursor-pointer"
              onClick={() => setSidebarOpen(false)}
            >
              <CrossIcon />
            </button>
          </div>
        )}

        <div className="flex text-2xl pt-8 items-center">
          <div className="pr-2 text-purple-600">
            <Logo />
          </div>
          Brainly
        </div>

        <div className="pt-8 pl-4">
          <SidebarItem text="twitter" icon={<TwitterIcon />} />
          <SidebarItem text="youtube" icon={<YoutubeIcon />} />
        </div>
      </div>

      {/* Toggle Button (visible on mobile when sidebar is closed) */}
      {isMobile && !sidebarOpen && (
        <div
          className="cursor-pointer fixed top-3 left-3 z-50"
          onClick={() => setSidebarOpen(true)}
        >
          <Toggle />
        </div>
      )}
    </>
  );
}