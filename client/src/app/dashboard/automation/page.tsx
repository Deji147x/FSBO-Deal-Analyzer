"use client"

import { useState, useEffect } from "react"
import { Play, Plus, Zap, History, Loader2, CheckCircle2, XCircle, Clock, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import api from "@/lib/api"
import { WorkflowBuilder } from "@/components/automation/workflow-builder"

export default function AutomationPage() {
    const [workflows, setWorkflows] = useState<any[]>([])
    const [executions, setExecutions] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [activeTab, setActiveTab] = useState<'workflows' | 'history'>('workflows')
    const [isBuilderOpen, setIsBuilderOpen] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const [workflowsRes, executionsRes] = await Promise.all([
                api.get('/automation/workflows'),
                api.get('/automation/executions')
            ])
            setWorkflows(workflowsRes.data)
            setExecutions(executionsRes.data)
        } catch (error) {
            console.error("Failed to fetch automation data", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Automation</h1>
                    <p className="text-muted-foreground">Manage and monitor your automated outreach and workflows.</p>
                </div>
                <button
                    onClick={() => setIsBuilderOpen(true)}
                    className="flex items-center bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                >
                    <Plus size={20} className="mr-2" />
                    Create Workflow
                </button>
            </div>

            <div className="flex items-center space-x-1 p-1 bg-white/5 border border-white/10 rounded-xl w-fit">
                <button
                    onClick={() => setActiveTab('workflows')}
                    className={cn(
                        "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                        activeTab === 'workflows' ? "bg-white/10 text-white shadow-sm" : "text-muted-foreground hover:text-white"
                    )}
                >
                    <Zap size={18} />
                    <span>Workflows</span>
                </button>
                <button
                    onClick={() => setActiveTab('history')}
                    className={cn(
                        "flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                        activeTab === 'history' ? "bg-white/10 text-white shadow-sm" : "text-muted-foreground hover:text-white"
                    )}
                >
                    <History size={18} />
                    <span>History</span>
                </button>
            </div>

            {isLoading ? (
                <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
                    <Loader2 className="animate-spin text-muted-foreground" size={40} />
                    <p className="text-sm text-muted-foreground">Loading your automation engine...</p>
                </div>
            ) : activeTab === 'workflows' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workflows.length === 0 ? (
                        <div className="col-span-full border border-dashed border-white/10 rounded-2xl p-12 flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                                <Zap size={32} className="text-muted-foreground" />
                            </div>
                            <div className="max-w-xs">
                                <p className="text-lg font-medium text-white">No active workflows</p>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Start by creating a workflow to handle new leads automatically.
                                </p>
                            </div>
                            <button className="text-sm font-bold text-white hover:underline">
                                Create your first workflow
                            </button>
                        </div>
                    ) : workflows.map((workflow) => (
                        <div key={workflow.id} className="group p-6 rounded-2xl border border-border bg-white/5 hover:bg-white/[0.08] transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2 rounded-xl bg-white/10 text-emerald-400">
                                    <Zap size={24} />
                                </div>
                                <div className={cn(
                                    "px-2 py-0.5 rounded-full text-[10px] font-bold border",
                                    workflow.isActive ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" : "text-muted-foreground bg-white/5 border-white/10"
                                )}>
                                    {workflow.isActive ? 'ACTIVE' : 'INACTIVE'}
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">{workflow.name}</h3>
                            <p className="text-sm text-muted-foreground mt-1">{workflow.triggerType}</p>
                            <div className="mt-6 space-y-3">
                                {workflow.steps.slice(0, 3).map((step: any, idx: number) => (
                                    <div key={step.id} className="flex items-center text-xs text-gray-400">
                                        <div className="w-5 h-5 rounded-full border border-white/10 flex items-center justify-center mr-2 text-[10px]">
                                            {idx + 1}
                                        </div>
                                        <span className="capitalize">{step.stepType.toLowerCase().replace('_', ' ')}</span>
                                    </div>
                                ))}
                                {workflow.steps.length > 3 && (
                                    <p className="text-[10px] text-muted-foreground pl-7">+{workflow.steps.length - 3} more steps</p>
                                )}
                            </div>
                            <button className="w-full mt-6 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all text-white flex items-center justify-center space-x-2">
                                <ChevronRight size={16} />
                                <span>View Details</span>
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="border border-border rounded-2xl overflow-hidden glass min-h-[400px]">
                    <div className="p-6 border-b border-border bg-white/[0.02]">
                        <h3 className="font-semibold text-white">Execution History</h3>
                    </div>
                    {executions.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-[340px] text-center p-8 space-y-4">
                            <History size={40} className="text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">No executions recorded yet.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-border bg-white/[0.01]">
                                    <tr>
                                        <th className="p-4 text-xs font-semibold text-muted-foreground uppercase">Workflow</th>
                                        <th className="p-4 text-xs font-semibold text-muted-foreground uppercase">Lead</th>
                                        <th className="p-4 text-xs font-semibold text-muted-foreground uppercase">Status</th>
                                        <th className="p-4 text-xs font-semibold text-muted-foreground uppercase">Started</th>
                                        <th className="p-4 text-xs font-semibold text-muted-foreground uppercase text-right">Progress</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border/50">
                                    {executions.map((execution) => (
                                        <tr key={execution.id} className="hover:bg-white/[0.02] transition-colors">
                                            <td className="p-4">
                                                <p className="text-sm font-medium text-white">{execution.workflow.name}</p>
                                            </td>
                                            <td className="p-4">
                                                <p className="text-sm text-gray-300">{execution.lead.name}</p>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center space-x-2">
                                                    {execution.status === 'COMPLETED' ? (
                                                        <CheckCircle2 size={16} className="text-emerald-400" />
                                                    ) : execution.status === 'FAILED' ? (
                                                        <XCircle size={16} className="text-rose-400" />
                                                    ) : (
                                                        <Clock size={16} className="text-amber-400 animate-pulse" />
                                                    )}
                                                    <span className={cn(
                                                        "text-[10px] font-bold",
                                                        execution.status === 'COMPLETED' ? "text-emerald-400" :
                                                            execution.status === 'FAILED' ? "text-rose-400" : "text-amber-400"
                                                    )}>
                                                        {execution.status}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="p-4 text-sm text-muted-foreground">
                                                {new Date(execution.startedAt).toLocaleString()}
                                            </td>
                                            <td className="p-4 text-right">
                                                <div className="text-xs font-mono text-muted-foreground">
                                                    {execution.results.length} steps completed
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}

            <WorkflowBuilder
                isOpen={isBuilderOpen}
                onClose={() => setIsBuilderOpen(false)}
                onSave={async (data) => {
                    await api.post('/automation/workflows', data)
                    fetchData()
                }}
            />
        </div>
    )
}
