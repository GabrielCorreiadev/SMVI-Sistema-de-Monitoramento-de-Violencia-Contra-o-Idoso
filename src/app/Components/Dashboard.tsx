// Dashboard.tsx
"use client"

import { motion } from "framer-motion";
import { useState, useEffect } from "react"
import { ShieldAlert, Users, Settings, Bell, Search, ChevronDown, BarChart3,
    DollarSign, ShoppingCart, UserPlus} from 'lucide-react';
import DouglasProfile from "../assets/douglas.profile.jpeg"

import { SidebarState, ProfileImage, NavLink } from '../Components/types'; // Importando os tipos

export default function Dashboard() {

    // Definindo o tipo do estado de sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState<SidebarState>(true);

    // Definindo os links de navegação
    const navLinks: NavLink[] = [
        { href: "#", label: "Relatórios", icon: <ShieldAlert className="h-5 w-5 mr-3" /> },
        { href: "#", label: "Usuários", icon: <Users className="h-5 w-5 mr-3" /> },
        { href: "#", label: "Configurações", icon: <Settings className="h-5 w-5 mr-3" /> },
    ];

    // Definindo o tipo de imagem de perfil
    const profileImage: ProfileImage = DouglasProfile;

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`bg-indigo-700 text-white w-64 flex-shrink-0 ${isSidebarOpen ? '' : 'hidden'} `}>
                <div className="justify-center items-center p-3 pt-8">
                    <h1 className=" text-2xl font-bold flex items-center justify-center gap-3">
                        <ShieldAlert className="h-8 w-8" />
                        S M V I
                    </h1>
                </div>
                <nav className="mt-7">
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className="flex items-center px-4 py-3 hover:bg-indigo-800 transition-colors">
                            {link.icon}
                            {link.label}
                        </a>
                    ))}
                </nav>
            </aside>
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white shadow-sm">
                    <div className="flex items-center justify-between p-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:text-gray-600">
                            <ShieldAlert className="h-6 w-6" />
                        </button>
                        <div className="flex items-center space-x-4">
                            <div className="relative ">
                                <input
                                    type="text"
                                    placeholder="Pesquisar..."
                                    className="pl-10 pr-4 py-1 border rounded-lg focus:outline-none focus:ring-indigo-500"
                                />
                                <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
                            </div>
                            <button className="relative p-2 hover:bg-gray-100 rounded-full">
                                <Bell className="h-5 w-5 text-gray-600"/>
                                <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                                    3
                                </span>
                            </button>
                            <button className="flex items-center space-x-2">
                                <img
                                    src={profileImage.src}
                                    alt="Profile"
                                    className="h-8 w-8 rounded-full"
                                />
                                <ChevronDown className="h-4 w-4 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </header>

            </div>
        </div>
    );
}
