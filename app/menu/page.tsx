"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
import MenuSkeleton from "@/components/skeletons/MenuSkeleton";

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Suspense fallback={<MenuSkeleton />}>
          <Menu />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
