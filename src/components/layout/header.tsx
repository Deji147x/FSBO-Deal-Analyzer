"use client"

import { Search, Bell, User } from "lucide-react"

export function Header() {
    return (
        <header className="h-16 border-b border-border px-8 flex items-center justify-between glass">
            <div className="flex items-center flex-1 max-w-md">
                <div className="relative w-full group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-white transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search leads or properties..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 outline-none focus:border-white/20 focus:bg-white/10 transition-all text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-xl hover:bg-white/5 transition-colors relative">
                    <Bell size={20} className="text-muted-foreground" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border border-background" />
                </button>

                <div className="h-8 w-[1px] bg-border mx-2" />

                <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="text-right">
                        <p className="text-sm font-medium text-white group-hover:text-gray-300 transition-colors">Admin User</p>
                        <p className="text-xs text-muted-foreground">Premium Plan</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-700 to-gray-900 border border-white/10 flex items-center justify-center overflow-hidden">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    )
}
