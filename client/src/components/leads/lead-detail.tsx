"use client"

import { X, MapPin, Phone, Mail, Clock, Zap, MessageSquare, ExternalLink, Brain, RefreshCw } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import api from "@/lib/api"
import { useState } from "react"

interface LeadDetailProps {
    lead: any | null
    isOpen: boolean
    onClose: () => void
    onUpdate?: () => void
}

export function LeadDetail({ lead, isOpen, onClose, onUpdate }: LeadDetailProps) {
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    if (!lead) return null

    const aiInsight = lead.aiInsights?.[0]

    const handleRegenerate = async () => {
        setIsAnalyzing(true)
        try {
            await api.post(`/ai/summarize/${lead.id}`)
            if (onUpdate) onUpdate()
        } catch (error) {
            console.error("Failed to regenerate AI summary", error)
        } finally {
            setIsAnalyzing(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-screen w-full max-w-2xl glass-dark border-l border-border z-50 overflow-y-auto p-10 custom-scrollbar"
                    >
                        <div className="flex items-start justify-between mb-10">
                            <div className="flex items-center">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mr-5 text-2xl font-bold">
                                    {lead.name[0]}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white">{lead.name}</h2>
                                    <div className="flex items-center mt-1 space-x-3">
                                        <span className={cn(
                                            "text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-widest",
                                            lead.status === 'NEW' && "text-blue-400 border-blue-400/20 bg-blue-400/10",
                                            lead.status === 'QUALIFIED' && "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
                                        )}>
                                            {lead.status}
                                        </span>
                                        <span className="text-xs text-muted-foreground flex items-center">
                                            <Clock size={12} className="mr-1" />
                                            Added 2h ago
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="p-6 rounded-2xl bg-white/5 border border-border">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Lead Score</p>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-3xl font-bold text-white font-mono">{lead.score}%</h3>
                                    <div className="w-12 h-12 rounded-full border-4 border-emerald-500/30 border-t-emerald-500 -rotate-45" />
                                </div>
                                <p className="text-xs text-muted-foreground mt-4 italic">"High potential property with 3+ beds in a growing area."</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-border">
                                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">Contact Info</p>
                                <div className="space-y-3">
                                    <div className="flex items-center text-sm text-gray-300">
                                        <Mail size={16} className="mr-2 text-muted-foreground" />
                                        {lead.email || "N/A"}
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <Phone size={16} className="mr-2 text-muted-foreground" />
                                        {lead.phone || "N/A"}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <section>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground flex items-center">
                                        <Brain size={16} className="mr-2 text-purple-400" />
                                        AI Intelligence
                                    </h3>
                                    <button
                                        onClick={handleRegenerate}
                                        disabled={isAnalyzing}
                                        className="text-[10px] font-bold text-muted-foreground hover:text-white flex items-center transition-colors uppercase tracking-widest"
                                    >
                                        <RefreshCw size={12} className={cn("mr-1", isAnalyzing && "animate-spin")} />
                                        Regenerate
                                    </button>
                                </div>

                                {aiInsight ? (
                                    <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className={cn(
                                                "text-[10px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-widest",
                                                aiInsight.sentiment === 'POSITIVE' && "text-emerald-400 border-emerald-400/20 bg-emerald-400/10",
                                                aiInsight.sentiment === 'NEGATIVE' && "text-rose-400 border-rose-400/20 bg-rose-400/10",
                                                aiInsight.sentiment === 'NEUTRAL' && "text-blue-400 border-blue-400/20 bg-blue-400/10",
                                            )}>
                                                {aiInsight.sentiment} Sentiment
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-200 leading-relaxed italic">
                                            "{aiInsight.summary}"
                                        </p>
                                        <div className="space-y-2 pt-2">
                                            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Key Takeaways</p>
                                            <div className="flex flex-wrap gap-2">
                                                {aiInsight.keyTakeaways?.map((takeaway: string, i: number) => (
                                                    <span key={i} className="text-xs px-2 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                                                        {takeaway}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-6 rounded-2xl bg-white/5 border border-dashed border-border text-center">
                                        <p className="text-sm text-muted-foreground mb-4">No AI analysis available for this lead yet.</p>
                                        <button
                                            onClick={handleRegenerate}
                                            disabled={isAnalyzing}
                                            className="inline-flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold transition-all"
                                        >
                                            <RefreshCw size={14} className={cn(isAnalyzing && "animate-spin")} />
                                            <span>{isAnalyzing ? "Analyzing..." : "Generate Analysis"}</span>
                                        </button>
                                    </div>
                                )}
                            </section>

                            <section>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center">
                                    <MapPin size={16} className="mr-2" />
                                    Property Information
                                </h3>
                                <div className="p-6 rounded-2xl bg-white/5 border border-border space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <p className="text-lg font-medium">{lead.address}</p>
                                            <p className="text-sm text-muted-foreground italic">Zillow Estimate: $425,000</p>
                                        </div>
                                        <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                                            <ExternalLink size={18} />
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                                        <div className="text-center">
                                            <p className="text-xs text-muted-foreground">Beds</p>
                                            <p className="text-lg font-bold">3</p>
                                        </div>
                                        <div className="text-center border-x border-border/50">
                                            <p className="text-xs text-muted-foreground">Baths</p>
                                            <p className="text-lg font-bold">2.5</p>
                                        </div>
                                        <div className="text-center">
                                            <p className="text-xs text-muted-foreground">Sqft</p>
                                            <p className="text-lg font-bold">1,850</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4 flex items-center">
                                    <MessageSquare size={16} className="mr-2" />
                                    Timeline & Interactions
                                </h3>
                                <div className="space-y-4 relative before:absolute before:left-3.5 before:top-4 before:bottom-4 before:w-[1px] before:bg-border">
                                    {[
                                        { type: 'INGESTION', content: 'Lead ingested from Zillow scraper', time: '2h ago', icon: Zap },
                                        { type: 'AI_ENRICHMENT', content: 'AI analyzed listing text: "Motivated seller"', time: '1h ago', icon: Zap },
                                        { type: 'SYSTEM', content: 'Lead score updated to 92%', time: '1h ago', icon: Clock },
                                    ].map((event, i) => (
                                        <div key={i} className="flex space-x-4 pl-1">
                                            <div className="relative z-10 w-7 h-7 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground">
                                                <event.icon size={14} />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium">{event.content}</p>
                                                <p className="text-xs text-muted-foreground">{event.time}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="sticky bottom-0 mt-10 pt-6 border-t border-border bg-gradient-to-t from-[#0a0a0a] to-transparent">
                            <div className="grid grid-cols-2 gap-4">
                                <button className="w-full bg-white/5 border border-border py-3 rounded-xl font-medium hover:bg-white/10 transition-all">
                                    Edit Details
                                </button>
                                <button className="w-full bg-white text-black py-3 rounded-xl font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                                    Perform Action
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
