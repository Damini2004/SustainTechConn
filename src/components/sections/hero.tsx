
import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

import { heroData } from "@/lib/data";
import { Countdown } from "./countdown";
import { Button } from "../ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full text-white"
    >
      {/* Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/Sustainable Development.png"
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <div className="max-w-4xl space-y-4 md:space-y-6">
          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            {heroData.title}
          </h1>

          <p className="text-base text-slate-200 sm:text-lg md:text-xl">
            {heroData.subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-2 text-sm sm:text-base md:gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary" />
              <span>{heroData.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{heroData.location}</span>
            </div>
          </div>

          <div className="py-4 md:py-6">
            <Countdown targetDate={heroData.countdownTarget} />
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/registration">Register Now</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-black"
            >
              <Link href="/call-for-papers">Submit Paper</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
