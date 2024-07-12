import Hero from "@/components/Hero";
import ContactUs from "@/components/ui/contactUs";
import Footer from "@/components/ui/footer";
import GridBackground from "@/components/ui/GridBackground";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen text-[#1048a0] bg-[#1048a0]/[0.2]">
      <div className="h-screen">
        <Hero />
      </div>
      <ContactUs/>
      <Footer/>
    </main>
  );
}
