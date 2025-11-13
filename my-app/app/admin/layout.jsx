// my-app/app/layout.jsx  (or inside any subfolder layout like /app/admin/layout.jsx)
import Sidebar from "../components/AdminComponents/Sidebar";
import { IoPerson } from "react-icons/io5";


export default function Layout({ children }) {
  return (
    <div className="flex bg-white">
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between w-full py-3 max-h-[60px] text-[40px] px-12 border-b border-black text-black">
            <h3>ADMIN PANEL</h3>
            <IoPerson/>
        </div>
      </div>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
