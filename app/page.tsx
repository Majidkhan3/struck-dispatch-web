import Banner from "@/components/home/Banner";
import Features from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Process from "@/components/home/Process";
import Service from "@/components/home/Service";
import Trucks from "@/components/home/Trucks";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="pl-14 pr-14 wow">
        <Process />
        <Banner />
      </main>
      <Service />
      <Features />
      <Trucks />
    </>
  );
}
