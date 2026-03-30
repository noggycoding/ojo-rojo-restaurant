"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { GlassFilter } from "@/components/ui/liquid-glass";

export default function Home() {
  return (
    <>
      <GlassFilter />
      <Header />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
