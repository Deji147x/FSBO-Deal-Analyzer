"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { LogIn, Mail, Lock, Loader2, ArrowRight } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { cn } from "@/lib/utils"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useAuth()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulating login for now. In a real app, this would be an API call.
        setTimeout(() => {
            login("mock-token", { id: "1", name: "Admin User", email: "admin@fsbo.com", role: "ADMIN" })
            setIsLoading(false)
        }, 1500)
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#050505] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px]" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md p-8 relative z-10"
            >
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6 shadow-2xl">
                        <LogIn size={32} className="text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-white tracking-tight mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to manage your real estate portfolio.</p>
                </div>

                <div className="glass-dark border border-white/10 rounded-3xl p-8 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-white transition-colors" size={18} />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@fsbo-analyzer.com"
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-10 pr-4 outline-none focus:border-white/20 focus:bg-white/10 transition-all text-white"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400 ml-1">Password</label>
                            <div className="relative group">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-white transition-colors" size={18} />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••"
                                    className="w-full bg-white/5 border border-white/5 rounded-2xl py-3 pl-10 pr-4 outline-none focus:border-white/20 focus:bg-white/10 transition-all text-white"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isLoading ? (
                                <Loader2 className="animate-spin mr-2" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/5 text-center">
                        <p className="text-sm text-muted-foreground">
                            Don't have an account? <span className="text-white font-medium cursor-pointer hover:underline">Contact your administrator</span>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
