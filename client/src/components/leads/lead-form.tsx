"use client"

import { useState } from "react"
import { X, Save, MapPin, Phone, Mail, User, Info } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface LeadFormProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (data: any) => void
}

export function LeadForm({ isOpen, onClose, onSubmit }: LeadFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        source: "DIRECT",
        property: {
            bed: 3,
            bath: 2,
            sqft: 1500,
        }
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        if (name.startsWith("prop.")) {
            const propField = name.split(".")[1]
            setFormData(prev => ({
                ...prev,
                property: { ...prev.property, [propField]: value }
            }))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
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
                        className="fixed right-0 top-0 h-screen w-full max-w-lg glass-dark border-l border-border z-50 overflow-y-auto p-8 custom-scrollbar"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-bold text-white">Add New Lead</h2>
                                <p className="text-muted-foreground text-sm">Enter the lead and property details manually.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-xl hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center">
                                    <User size={16} className="mr-2" />
                                    Personal Information
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1.5ColSpan2 col-span-2">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">Full Name</label>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="e.g. John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">Phone</label>
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="(555) 000-0000"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center">
                                    <MapPin size={16} className="mr-2" />
                                    Property Location
                                </h3>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-muted-foreground ml-1">Street Address</label>
                                    <input
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        placeholder="123 Main St"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                    />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">City</label>
                                        <input
                                            name="city"
                                            value={formData.city}
                                            onChange={handleChange}
                                            placeholder="Richmond"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">State</label>
                                        <input
                                            name="state"
                                            value={formData.state}
                                            onChange={handleChange}
                                            placeholder="VA"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">Zip</label>
                                        <input
                                            name="zip"
                                            value={formData.zip}
                                            onChange={handleChange}
                                            placeholder="23220"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center">
                                    <Info size={16} className="mr-2" />
                                    Property Details
                                </h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">Beds</label>
                                        <input
                                            name="prop.bed"
                                            type="number"
                                            value={formData.property.bed}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">Baths</label>
                                        <input
                                            name="prop.bath"
                                            type="number"
                                            value={formData.property.bath}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-medium text-muted-foreground ml-1">Sqft</label>
                                        <input
                                            name="prop.sqft"
                                            type="number"
                                            value={formData.property.sqft}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-4 focus:border-white/20 outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] active:scale-95"
                                >
                                    <Save size={22} className="mr-2" />
                                    Save Lead
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
