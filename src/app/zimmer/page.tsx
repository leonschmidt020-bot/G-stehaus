import RoomGrid from "@/components/rooms/RoomGrid";
import FadeIn from "@/components/ui/FadeIn";

export default function RoomsPage() {
    return (
        <main className="min-h-screen bg-soft-white selection:bg-secondary/30 pb-20">
            {/* Page Header */}
            <section className="bg-neutral-100 py-20 px-6">
                <div className="container mx-auto text-center">
                    <FadeIn direction="up">
                        <h1 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-4">
                            Unsere Zimmer
                        </h1>
                        <p className="max-w-xl mx-auto text-neutral-600 leading-relaxed">
                            Wohlfühlen wie zu Hause. Entdecken Sie unsere liebevoll eingerichteten Zimmer für Ihren perfekten Aufenthalt.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Room Grid */}
            <div className="pt-12">
                <RoomGrid />
            </div>
        </main>
    );
}
