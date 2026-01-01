"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Plus, Trash2, Mail, MessageSquare, Clock, Save, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface WorkflowBuilderProps {
    isOpen: boolean
    onClose: () => void
    onSave: (data: any) => Promise<void>
}

const STEP_TYPES = [
    { id: 'SEND_EMAIL', name: 'Send Email', icon: Mail, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'SEND_SMS', name: 'Send SMS', icon: MessageSquare, color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { id: 'WAIT', name: 'Wait / Delay', icon: Clock, color: 'text-amber-400', bg: 'bg-amber-400/10' },
]

export function WorkflowBuilder({ isOpen, onClose, onSave }: WorkflowBuilderProps) {
    const [name, setName] = useState("")
    const [triggerType, setTriggerType] = useState("NEW_LEAD")
    const [steps, setSteps] = useState<any[]>([])
    const [isSaving, setIsSaving] = useState(false)

    const addStep = (type: string) => {
        const config = type === 'WAIT' ? { delay: 3600 } :
            type === 'SEND_EMAIL' ? { subject: "", body: "" } :
                { body: "" };

        setSteps([...steps, {
            stepType: type,
            order: steps.length + 1,
            config
        }])
    }

    const removeStep = (index: number) => {
        const newSteps = steps.filter((_, i) => i !== index).map((step, i) => ({
            ...step,
            order: i + 1
        }))
        setSteps(newSteps)
    }

    const updateStepConfig = (index: number, config: any) => {
        const newSteps = [...steps]
        newSteps[index].config = { ...newSteps[index].config, ...config }
        setSteps(newSteps)
    }

    const handleSave = async () => {
        if (!name || steps.length === 0) return
        setIsSaving(true)
        try {
            await onSave({ name, triggerType, steps, config: {} })
            onClose()
            setName("")
            setSteps([])
        } catch (error) {
            console.error("Save failed", error)
        } finally {
            setIsSaving(false)
        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-end">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-2xl h-full bg-[#0A0A0A] border-l border-white/10 shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
                            <div>
                                <h2 className="text-xl font-bold text-white">Create Workflow</h2>
                                <p className="text-sm text-muted-foreground">Define your automation sequence.</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                                <X size={20} className="text-muted-foreground" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 space-y-8">
                            <section className="space-y-4">
                                <label className="text-sm font-medium text-gray-400">Workflow Settings</label>
                                <div className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Workflow Name (e.g. New Lead Welcome)"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-emerald-500/50 transition-all text-white"
                                        />
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <span className="text-sm text-muted-foreground">Trigger:</span>
                                        <select
                                            value={triggerType}
                                            onChange={(e) => setTriggerType(e.target.value)}
                                            className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white outline-none"
                                        >
                                            <option value="NEW_LEAD">New Lead Ingested</option>
                                            <option value="STATUS_CHANGE">Lead Status Changed</option>
                                        </select>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <label className="text-sm font-medium text-gray-400">Workflow Steps</label>
                                    <div className="flex space-x-2">
                                        {STEP_TYPES.map((type) => (
                                            <button
                                                key={type.id}
                                                onClick={() => addStep(type.id)}
                                                className={cn(
                                                    "flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all border border-transparent hover:border-white/20",
                                                    type.bg, type.color
                                                )}
                                            >
                                                <type.icon size={14} />
                                                <span>{type.name.split(' ')[1] || type.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-4 relative">
                                    {steps.length === 0 ? (
                                        <div className="border border-dashed border-white/10 rounded-2xl p-8 text-center">
                                            <p className="text-sm text-muted-foreground italic">No steps added yet. Add your first action above.</p>
                                        </div>
                                    ) : (
                                        steps.map((step, idx) => {
                                            const typeInfo = STEP_TYPES.find(t => t.id === step.stepType)!
                                            return (
                                                <motion.div
                                                    layout
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    key={idx}
                                                    className="p-4 rounded-xl border border-white/10 bg-white/5 relative group"
                                                >
                                                    <div className="flex items-start justify-between mb-4">
                                                        <div className="flex items-center space-x-3">
                                                            <div className={cn("p-2 rounded-lg", typeInfo.bg, typeInfo.color)}>
                                                                <typeInfo.icon size={18} />
                                                            </div>
                                                            <span className="font-semibold text-sm">{typeInfo.name}</span>
                                                        </div>
                                                        <button
                                                            onClick={() => removeStep(idx)}
                                                            className="opacity-0 group-hover:opacity-100 p-2 text-rose-400 hover:bg-rose-400/10 rounded-lg transition-all"
                                                        >
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>

                                                    <div className="space-y-3">
                                                        {step.stepType === 'SEND_EMAIL' && (
                                                            <>
                                                                <input
                                                                    type="text"
                                                                    placeholder="Subject"
                                                                    value={step.config.subject}
                                                                    onChange={(e) => updateStepConfig(idx, { subject: e.target.value })}
                                                                    className="w-full bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-sm text-white"
                                                                />
                                                                <textarea
                                                                    placeholder="Email Body (HTML supported)"
                                                                    value={step.config.body}
                                                                    onChange={(e) => updateStepConfig(idx, { body: e.target.value })}
                                                                    className="w-full bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-sm text-white min-h-[100px]"
                                                                />
                                                            </>
                                                        )}
                                                        {step.stepType === 'SEND_SMS' && (
                                                            <textarea
                                                                placeholder="SMS Body"
                                                                value={step.config.body}
                                                                onChange={(e) => updateStepConfig(idx, { body: e.target.value })}
                                                                className="w-full bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-sm text-white min-h-[80px]"
                                                            />
                                                        )}
                                                        {step.stepType === 'WAIT' && (
                                                            <div className="flex items-center space-x-3">
                                                                <span className="text-xs text-muted-foreground">Wait for</span>
                                                                <input
                                                                    type="number"
                                                                    value={step.config.delay}
                                                                    onChange={(e) => updateStepConfig(idx, { delay: parseInt(e.target.value) })}
                                                                    className="w-24 bg-black/40 border border-white/5 rounded-lg px-3 py-2 text-sm text-white text-center"
                                                                />
                                                                <span className="text-xs text-muted-foreground">seconds</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            )
                                        })
                                    )}
                                </div>
                            </section>
                        </div>

                        <div className="p-6 border-t border-white/10 bg-white/[0.02]">
                            <button
                                onClick={handleSave}
                                disabled={!name || steps.length === 0 || isSaving}
                                className="w-full bg-emerald-500 text-black font-bold py-3 rounded-xl hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.2)] disabled:opacity-50 disabled:grayscale flex items-center justify-center space-x-2"
                            >
                                {isSaving ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
                                <span>{isSaving ? "Saving Workflow..." : "Save Workflow"}</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}
