
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Committee } from "@/components/sections/committee";

export default function CommitteePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-20">
        <Committee />
      </main>
      <Footer />
    </div>
  );
}
