
"use client"

import { useState, useEffect, useRef } from "react"
import { ShieldAlert, FolderPen, Settings, Bell, Search, ChevronDown } from 'lucide-react';
import DouglasProfile from "../assets/douglas.profile.jpeg"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { SidebarState, ProfileImage, NavLink } from '../Components/types';
import FormType  from "./Form";
import ConfigConta from "./Config";


export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<SidebarState>(true);
  const [activeScreen, setActiveScreen] = useState("Dashboard");
  const [angle, setAngle] = useState<number>(0);
  const [textAnchor, setTextAnchor] = useState<"start" | "middle" | "end">("middle");
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1350) {
        setAngle(90);
        setTextAnchor("end");
      } else {
        setAngle(0);
        setTextAnchor("middle");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isSidebarOpen && window.innerWidth < 768 && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const navLinks: NavLink[] = [
    { href: "#", label: "Dashboard", icon: <ShieldAlert className="h-5 w-5 mr-3" /> },
    { href: "#", label: "Formulário", icon: <FolderPen className="h-5 w-5 mr-3" /> },
    { href: "#", label: "Configurações", icon: <Settings className="h-5 w-5 mr-3" /> },
  ];

  const profileImage: ProfileImage = DouglasProfile;

  const dadosDenuncias = [
    { bairro: "Centro", casos: 30 },
    { bairro: "Jardim América", casos: 18 },
    { bairro: "Vila Nova", casos: 25 },
    { bairro: "Ana Maria", casos: 25 },
    { bairro: "maré mansa", casos: 15 },
    { bairro: "jardim virginia", casos: 30 },
    { bairro: "Mar e Céu", casos: 5 },
    { bairro: "Prainha", casos: 2 },
    { bairro: "Guarujá", casos: 9 },
  ];

  const renderContent = () => {
    const BackButton = () => (
      <button
        onClick={() => setActiveScreen("Dashboard")}
        className="mb-4 text-indigo-600 hover:underline flex items-center"
      >
        ← Voltar ao Dashboard
      </button>
    );

    switch (activeScreen) {
      case "Dashboard":
        return (
          <main className="p-6 space-y-6 bg-gray-100 flex-1 overflow-auto min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white shadow rounded-xl p-4">
                <p className="text-sm text-gray-500">Total de denúncias</p>
                <p className="text-2xl font-bold">152</p>
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <p className="text-sm text-gray-500">Este mês</p>
                <p className="text-2xl font-bold">18</p>
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <p className="text-sm text-gray-500">Casos graves</p>
                <p className="text-2xl font-bold text-red-600">7</p>
              </div>
              <div className="bg-white shadow rounded-xl p-4">
                <p className="text-sm text-gray-500">Resolvidos</p>
                <p className="text-2xl font-bold text-green-600">84</p>
              </div>
            </div>

            <div className="bg-white shadow rounded-xl p-6 w-full">
              <h3 className="text-lg font-semibold mb-4">Denúncias por Bairro</h3>
              <div className="w-full h-72 overflow-x-auto">
                <div style={{ minWidth: `${dadosDenuncias.length * 80}px`, height: "100%" }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dadosDenuncias} margin={{ bottom: angle === 90 ? 100 : 40 }}>
                      <XAxis dataKey="bairro" angle={-angle} textAnchor={textAnchor} interval={0} />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="casos" fill="#6366f1" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </main>
        );
      case "Formulário":
        return (
          <main className="p-6 bg-gray-100 flex-1 overflow-auto min-w-0">
            <BackButton />
            <FormType />
          </main>
        );
      case "Configurações":
        return (
          <main className="p-6 bg-gray-100 flex-1 overflow-auto min-w-0">
            <BackButton />
            <ConfigConta/>
          </main>
        );
      default:
        return null
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden w-full">
      <aside
        ref={sidebarRef}
        className={`bg-indigo-700 text-white w-64 flex-shrink-0 ${isSidebarOpen ? '' : 'hidden'}`}
      >
        <div className="justify-center items-center p-3 pt-8">
          <h1 className="text-2xl font-bold flex items-center justify-center gap-3">
            <ShieldAlert className="h-8 w-8" />
            S M V I
          </h1>
        </div>
        <nav className="mt-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => setActiveScreen(link.label)}
              className={`flex items-center w-full text-left px-4 py-3 hover:bg-indigo-800 transition-colors ${
                activeScreen === link.label ? "bg-indigo-800" : ""
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="hover:text-gray-600 p-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
            >
              <ShieldAlert className="h-6 w-6" />
            </button>

            <div className="flex items-center space-x-4">
              {isSidebarOpen && (
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="sm:hidden p-2 hover:bg-gray-100 rounded-md"
                >
                  <Search className="h-5 w-5 text-gray-600" />
                </button>
              )}

              {(!isSidebarOpen || window.innerWidth >= 640) && (
                <div className="pl-2.5 relative w-full max-w-xs">
                   <Search className="absolute left-6 top-3 h-5 w-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Pesquisar..."
                    className="w-full text-center pr-4 py-2 border border-transparent hover:border-black focus:border-black rounded-lg transition duration-200 focus:outline-none"
                  />
                
                </div>
              )}

              <button className="relative p-2 hover:bg-gray-100 rounded-full">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <button className="flex items-center space-x-2">
                <img src={profileImage.src} alt="Profile" className="h-8 w-8 rounded-full" />
                <ChevronDown className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {renderContent()}
      </div>
    </div>
  );
}
