"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";
import AboutSkeleton from "@/components/skeletons/AboutSkeleton";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Suspense fallback={<AboutSkeleton />}>
          <About />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
