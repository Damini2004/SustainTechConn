
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Speakers } from "@/components/sections/speakers";

export default function SpeakersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <Speakers />
      </main>
      <Footer />
    </div>
  );
}
