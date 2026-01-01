"use client"

import { useState, useEffect } from "react"
import { MoreHorizontal, Search, Filter, Plus, Loader2, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import api from "@/lib/api"

import { LeadForm } from "@/components/leads/lead-form"
import { LeadDetail } from "@/components/leads/lead-detail"

export default function LeadsPage() {
    const [leads, setLeads] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [selectedLead, setSelectedLead] = useState<any | null>(null)

    useEffect(() => {
        fetchLeads()
    }, [])

    const fetchLeads = async () => {
        try {
            const response = await api.get('/leads')
            setLeads(response.data)
        } catch (error) {
            console.error("Failed to fetch leads", error)
        } finally {
            setIsLoading(false)
        }
    }

    const handleAddLead = async (data: any) => {
        try {
            const response = await api.post('/leads/ingest', data)
            setLeads([response.data, ...leads])
            setIsFormOpen(false)
        } catch (error) {
            console.error("Failed to add lead", error)
        }
    }

    return (
        <div className="space-y-6 animate-in zoom-in-95 duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Leads</h1>
                    <p className="text-muted-foreground">Manage and track your latest real estate opportunities.</p>
                </div>
                <button
                    onClick={() => setIsFormOpen(true)}
                    className="flex items-center bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    <Plus size={20} className="mr-2" />
                    Add Lead
                </button>
            </div>

            <LeadForm
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
                onSubmit={handleAddLead}
            />

            <LeadDetail
                lead={selectedLead}
                isOpen={!!selectedLead}
                onClose={() => setSelectedLead(null)}
                onUpdate={fetchLeads}
            />

            <div className="flex items-center space-x-4">
                <div className="relative flex-1 max-w-sm group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-white transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Filter leads..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 outline-none focus:border-white/20 transition-all text-sm text-white"
                    />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-xl hover:bg-white/5 transition-all text-sm text-muted-foreground">
                    <Filter size={18} />
                    <span>Filters</span>
                </button>
            </div>

            <div className="border border-border rounded-2xl overflow-hidden glass min-h-[400px]">
                {isLoading ? (
                    <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
                        <Loader2 className="animate-spin text-muted-foreground" size={40} />
                        <p className="text-sm text-muted-foreground">Fetching your leads...</p>
                    </div>
                ) : leads.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-[400px] space-y-4 text-center p-8">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                            <Users size={32} className="text-muted-foreground" />
                        </div>
                        <div>
                            <p className="text-lg font-medium text-white">No leads found</p>
                            <p className="text-sm text-muted-foreground mt-1 max-w-xs">Start by adding a lead manually or connecting an external source.</p>
                        </div>
                        <button
                            onClick={() => setIsFormOpen(true)}
                            className="mt-4 text-sm font-bold text-white hover:underline"
                        >
                            Add your first lead
                        </button>
                    </div>
                ) : (
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-border bg-white/[0.02]">
                                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Lead Info</th>
                                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</th>
                                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Score</th>
                                <th className="p-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border/50">
                            {leads.map((lead) => (
                                <tr
                                    key={lead.id}
                                    className="hover:bg-white/[0.03] transition-colors group cursor-pointer"
                                    onClick={() => setSelectedLead(lead)}
                                >
                                    <td className="p-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mr-3 font-bold group-hover:bg-white/10 transition-colors uppercase text-white">
                                                {lead.name ? lead.name[0] : 'L'}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">{lead.name}</p>
                                                <p className="text-xs text-muted-foreground">{lead.source}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <p className="text-sm text-gray-300">{lead.address}</p>
                                        <p className="text-xs text-muted-foreground">{lead.city}</p>
                                    </td>
                                    <td className="p-4">
                                        <span className={cn(
                                            "text-[10px] font-bold px-2 py-0.5 rounded-full border",
                                            lead.status === 'NEW' && "text-blue-400 bg-blue-400/10 border-blue-400/20",
                                            lead.status === 'QUALIFIED' && "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
                                            lead.status === 'NURTURE' && "text-amber-400 bg-amber-400/10 border-amber-400/20",
                                            lead.status === 'OFFER_MADE' && "text-purple-400 bg-purple-400/10 border-purple-400/20",
                                        )}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex-1 h-1.5 w-16 bg-white/5 rounded-full overflow-hidden">
                                                <div
                                                    className={cn(
                                                        "h-full transition-all duration-500",
                                                        (lead.score || 0) > 80 ? "bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" :
                                                            (lead.score || 0) > 60 ? "bg-amber-500" : "bg-rose-500"
                                                    )}
                                                    style={{ width: `${lead.score || 0}%` }}
                                                />
                                            </div>
                                            <span className="text-xs font-mono font-bold text-gray-300">{lead.score || 0}%</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" onClick={(e) => {
                                            e.stopPropagation();
                                            // Handle actions
                                        }}>
                                            <MoreHorizontal size={18} className="text-muted-foreground" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}
