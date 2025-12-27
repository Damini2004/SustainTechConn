
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Schedule } from "@/components/sections/schedule";

export default function ImportantDatesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}
