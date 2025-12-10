"use client";
import "./home.css";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedMenuSection from "@/components/FeaturedMenuSection";
import ReservationCTA from "@/components/ReservationCTA";
import GallerySection from "@/components/GallerySection";

export default function HomePage() {
  return (
    <main className="home-container">
      <HeroSection />
      <AboutSection />
      <FeaturedMenuSection />
      <GallerySection />
      <ReservationCTA />
    </main>
  );
}
