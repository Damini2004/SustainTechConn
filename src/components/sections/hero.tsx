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
          src="/2.jpg"
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-4">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl">
            {heroData.title}
          </h1>

          <p className="text-lg text-slate-200 md:text-xl lg:text-2xl">
            {heroData.subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-primary" />
              <span>{heroData.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{heroData.location}</span>
            </div>
          </div>

          <div className="my-8">
            <Countdown targetDate={heroData.countdownTarget} />
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#tickets">Register Now</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white bg-transparent text-white hover:bg-white hover:text-black"
            >
              <Link href="#papers">Submit Paper</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
