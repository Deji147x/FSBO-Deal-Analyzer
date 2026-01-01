"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Users,
    Home,
    Zap,
    Settings,
    LogOut,
    ChevronLeft,
    ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Leads", href: "/dashboard/leads", icon: Users },
    { name: "Properties", href: "/dashboard/properties", icon: Home },
    { name: "Automation", href: "/dashboard/automation", icon: Zap },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
]

export function Sidebar() {
    const pathname = usePathname()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div
            className={cn(
                "flex flex-col h-screen border-r border-border transition-all duration-300 glass-dark",
                collapsed ? "w-20" : "w-64"
            )}
        >
            <div className="flex items-center justify-between p-6 h-16 border-b border-border">
                {!collapsed && (
                    <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                        FSBO Analyzer
                    </span>
                )}
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-1 rounded-md hover:bg-white/10 transition-colors"
                >
                    {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center p-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                                    : "text-muted-foreground hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("shrink-0", collapsed ? "mx-auto" : "mr-3")} size={22} />
                            {!collapsed && (
                                <span className="font-medium">{item.name}</span>
                            )}
                            {isActive && !collapsed && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
                            )}
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-border">
                <button className={cn(
                    "flex items-center w-full p-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-all duration-200",
                    collapsed && "justify-center"
                )}>
                    <LogOut className={cn("shrink-0", !collapsed && "mr-3")} size={22} />
                    {!collapsed && <span className="font-medium">Logout</span>}
                </button>
            </div>
        </div>
    )
}
