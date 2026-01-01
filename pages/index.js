import Head from 'next/head';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-purple-500/30">
            <Head>
                <title>FSBO Deal Analyzer | Premium Real Estate Intelligence</title>
                <meta name="description" content="AI-powered real estate deal analysis, automation, and lead management." />
            </Head>

            {/* Decorative background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-white/5 bg-black/20 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">V</div>
                    <span className="text-xl font-bold tracking-tight">Voltixio <span className="text-purple-400">FSBO</span></span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
                    <a href="#features" className="hover:text-white transition-colors">Features</a>
                    <a href="#ai" className="hover:text-white transition-colors">AI Engine</a>
                    <a href="#automation" className="hover:text-white transition-colors">Automation</a>
                </div>
                <a href="/login" className="px-5 py-2.5 bg-white text-black rounded-full font-semibold text-sm hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-white/5">
                    Launch Dashboard
                </a>
            </nav>

            <main className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-32">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold mb-6 tracking-widest uppercase">
                        Phase 6 Production Ready
                    </div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-gradient-to-b from-white to-white/40 bg-clip-text text-transparent italic">
                        Analyze Deals. <br />
                        <span className="not-italic bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">Automate Growth.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/50 mb-12 leading-relaxed max-w-2xl mx-auto">
                        The ultimate FSBO intelligence platform. AI-driven insights,
                        automated outreach, and deep property enrichment in one sleek interface.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="/login" className="w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-purple-600/20 flex items-center justify-center gap-2 group">
                            Get Started Free
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                        <a href="https://github.com/Deji147x/FSBO-Deal-Analyzer" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                            View Repository
                        </a>
                    </div>
                </div>

                {/* Feature Grid */}
                <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    {[
                        {
                            title: "AI Summaries",
                            desc: "GPT-4o powered lead analysis. Get instant summaries, sentiment, and key takeaways from every lead.",
                            icon: "✨",
                            color: "from-purple-500/20 to-purple-600/5"
                        },
                        {
                            title: "Automation Engine",
                            desc: "Multi-step workflows with BullMQ and Redis. Set your outreach on autopilot with smart delays and triggers.",
                            icon: "⚡",
                            color: "from-blue-500/20 to-blue-600/5"
                        },
                        {
                            title: "Data Enrichment",
                            desc: "Deep property intelligence using Google Maps API. Auto-fetch beds, baths, sqft, and estimated values.",
                            icon: "🏠",
                            color: "from-emerald-500/20 to-emerald-600/5"
                        }
                    ].map((feature, i) => (
                        <div key={i} className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${feature.color} backdrop-blur-sm hover:border-white/20 transition-all group cursor-default`}>
                            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-white/50 leading-relaxed text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </section>

                {/* System Status / Trust Bar */}
                <div className="p-1 border border-white/5 bg-white/5 rounded-3xl max-w-3xl mx-auto overflow-hidden">
                    <div className="p-6 bg-black/40 rounded-[calc(1.5rem-1px)] flex flex-wrap items-center justify-between gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-medium text-emerald-400 uppercase tracking-widest">System Online</span>
                        </div>
                        <div className="flex gap-8 text-xs font-bold text-white/30 uppercase tracking-widest">
                            <span>Next.js 16</span>
                            <span>NestJS 11</span>
                            <span>Prisma ORM</span>
                            <span>OpenAI API</span>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="relative z-10 border-t border-white/5 py-12 text-center text-white/20 text-sm">
                <p>&copy; 2026 Voltixio AI. All rights reserved.</p>
            </footer>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        body {
          font-family: 'Outfit', sans-serif;
        }
      `}</style>
        </div>
    );
}
