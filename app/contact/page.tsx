"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ContactSkeleton from "@/components/skeletons/ContactSkeleton";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Suspense fallback={<ContactSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
