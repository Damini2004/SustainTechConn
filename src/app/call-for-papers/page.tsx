
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CallForPapers } from "@/components/sections/call-for-papers";

export default function CallForPapersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <CallForPapers />
      </main>
      <Footer />
    </div>
  );
}
