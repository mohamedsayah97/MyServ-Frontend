import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { instance } from "../../config/axios";

const Layout = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    window.location.href = "/login";
  }

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const res = await instance.get("/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(res.data.data.role);
        localStorage.setItem("user", JSON.stringify(res.data.data));
        if (res.data.data.role !== "RH" && res.data.data.role !== "ADMIN") {
          localStorage.clear();
          window.location.href = "/login";
        }
      } catch (error) {
        localStorage.clear();
        window.location.href = "/login";
        console.error("Error fetching user data:", error);
      }
    };
    getUser();
  }, [token]);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
