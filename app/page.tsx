import AmbientBackground from "@/components/AmbientBackground";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Deployments from "@/components/Deployments";
import Sandbox from "@/components/Sandbox";
import Flagship from "@/components/Flagship";
import Stack from "@/components/Stack";
import Trajectory from "@/components/Trajectory";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AmbientBackground />
      <Header />
      <main className="pt-28 sm:pt-36 flex-1 flex flex-col gap-28 md:gap-36">
        <Hero />
        <Deployments />
        <Sandbox />
        <Flagship />
        <Stack />
        <Trajectory />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
