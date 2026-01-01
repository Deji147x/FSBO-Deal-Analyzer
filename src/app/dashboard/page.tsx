"use client"

import { ArrowUpRight, ArrowDownRight, Users, Home, Zap, DollarSign, Activity } from "lucide-react"
import { useEffect, useState } from "react"
import api from "@/lib/api"
import { motion } from "framer-motion"

export default function DashboardPage() {
    const [stats, setStats] = useState<any>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get('/stats/overview')
                setStats(response.data)
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error)
            } finally {
                setLoading(false)
            }
        }
        fetchStats()
    }, [])

    const formatRevenue = (val: number) => {
        if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`
        if (val >= 1000) return `$${(val / 1000).toFixed(0)}K`
        return `$${val}`
    }

    const statCards = [
        { name: "Total Leads", value: stats?.totalLeads || 0, icon: Users, change: "+5%", trending: "up" },
        { name: "Properties", value: stats?.activeProperties || 0, icon: Home, change: "+2%", trending: "up" },
        { name: "Automations", value: stats?.totalExecutions || 0, icon: Zap, change: "+12%", trending: "up" },
        { name: "Est. Revenue", value: formatRevenue(stats?.potentialRevenue || 0), icon: DollarSign, change: "+8%", trending: "up" },
    ]

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Overview</h1>
                <p className="text-muted-foreground">Monitor your real estate performance and active leads.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, i) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="p-6 rounded-2xl border border-border bg-white/5 hover:bg-white/[0.08] transition-all duration-300 group"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                                <stat.icon className="text-muted-foreground group-hover:text-white transition-colors" size={24} />
                            </div>
                            <span className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${stat.trending === 'up' ? 'text-emerald-400 bg-emerald-400/10' : 'text-rose-400 bg-rose-400/10'
                                }`}>
                                {stat.trending === 'up' ? <ArrowUpRight size={14} className="mr-1" /> : <ArrowDownRight size={14} className="mr-1" />}
                                {stat.change}
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">{stat.name}</p>
                            <h3 className="text-2xl font-bold text-white mt-1">{loading ? "..." : stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 p-8 rounded-2xl border border-border bg-white/5 min-h-[400px]">
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="text-xl font-semibold flex items-center">
                            <Activity size={20} className="mr-2 text-purple-400" />
                            Engagement Trend
                        </h3>
                    </div>
                    <div className="flex items-center justify-center h-64 text-muted-foreground italic border border-dashed border-border rounded-xl bg-white/[0.02]">
                        Dynamic chart visualization pending market data...
                    </div>
                </div>
                <div className="p-8 rounded-2xl border border-border bg-white/5 min-h-[400px]">
                    <h3 className="text-xl font-semibold mb-6">Top Markets</h3>
                    <div className="space-y-6">
                        {loading ? (
                            <p className="text-sm text-muted-foreground">Loading markets...</p>
                        ) : stats?.topMarkets?.length > 0 ? (
                            stats.topMarkets.map((market: any) => (
                                <div key={market.city} className="flex items-center justify-between group">
                                    <div>
                                        <p className="text-sm font-medium group-hover:text-white transition-colors">{market.city}</p>
                                        <p className="text-xs text-muted-foreground">{market.leads} leads</p>
                                    </div>
                                    <div className="text-right text-emerald-400 font-mono font-bold">
                                        {market.score}%
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-sm text-muted-foreground italic">No market data available yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
