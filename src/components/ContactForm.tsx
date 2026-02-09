export default function ContactForm() {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
         <div className="max-w-4xl mx-auto bg-soft-white rounded-[2.5rem] p-12 shadow-soft-ui relative overflow-hidden">
            
            {/* Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="text-center mb-12 relative z-10">
                <span className="text-secondary font-sans font-semibold tracking-wider uppercase text-sm">Kontakt</span>
                <h2 className="text-4xl font-serif text-primary mt-3">Wir sind für Sie da</h2>
            </div>

            <form className="relative z-10 grid md:grid-cols-2 gap-8">
                <div className="col-span-1">
                    <label className="block text-sm font-medium text-neutral-500 mb-2">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-inner-soft focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder="Ihr Name" />
                </div>
                <div className="col-span-1">
                     <label className="block text-sm font-medium text-neutral-500 mb-2">E-Mail</label>
                    <input type="email" className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-inner-soft focus:ring-2 focus:ring-secondary/50 outline-none transition-all" placeholder="ihre@email.com" />
                </div>
                <div className="col-span-full">
                     <label className="block text-sm font-medium text-neutral-500 mb-2">Nachricht</label>
                    <textarea rows={4} className="w-full px-6 py-4 rounded-xl bg-white border-none shadow-inner-soft focus:ring-2 focus:ring-secondary/50 outline-none transition-all resize-none" placeholder="Wie können wir Ihnen helfen?" />
                </div>
                
                <div className="col-span-full text-center mt-4">
                    <button className="px-12 py-4 bg-primary text-white rounded-full font-medium shadow-floating hover:bg-primary/90 hover:scale-105 transition-all duration-300">
                        Nachricht Senden
                    </button>
                </div>
            </form>
         </div>
      </div>
    </section>
  );
}
