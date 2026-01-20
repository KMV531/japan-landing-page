"use client";

import DomeGallery from "@/components/DomeGallery";

export default function GaleyPhoto() {
  return (
    <main className="flex flex-col space-y-8 items-center justify-center">
      <h1 className="font-bold text-2xl md:text-4xl max-w-lg text-center">
        SNAPSHOTS OF JAPAN <br />— Nihon no sunappushotto
      </h1>
      <div style={{ width: "95vw", height: "100vh" }}>
        <DomeGallery
          fit={0.8}
          minRadius={600}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
        />
      </div>
    </main>
  );
}
