import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
