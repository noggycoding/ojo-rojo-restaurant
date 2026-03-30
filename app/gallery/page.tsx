"use client";

import { Suspense } from "react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import GallerySkeleton from "@/components/skeletons/GallerySkeleton";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Suspense fallback={<GallerySkeleton />}>
          <Gallery />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
