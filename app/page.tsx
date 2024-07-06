import Hero from "@/components/Hero";
import Services from "@/components/Services";
import GridBackground from "@/components/ui/GridBackground";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen text-[#1048a0]">
      <div className="h-screen">
        <Hero />
      </div>
      <div className="h-screen">
        <Services/>
      </div>
    </main>
  );
}
