
import Image from 'next/image';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { schedules } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Schedule() {
    const calendarImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <section id="schedules" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">
            <span className="text-primary">Important</span> Dates
          </h2>
          <p className="text-lg text-muted-foreground mt-3 max-w-3xl mx-auto">
            Mark your calendar for these key submission and event dates to ensure you don&apos;t miss any deadlines for SustainTechCon 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                {calendarImage && (
                    <Image
                        src={calendarImage.imageUrl}
                        alt="Calendar with marked dates"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-2xl object-cover w-full aspect-[3/2]"
                        data-ai-hint="calendar dates"
                    />
                )}
            </div>
            <div className="backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-muted/10">
                            <TableHead className="text-primary font-bold text-lg">Event</TableHead>
                            <TableHead className="text-right text-primary font-bold text-lg">Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {schedules.map((schedule, index) => (
                        <TableRow key={index} className="border-b-muted/20 last:border-b-0 hover:bg-muted/5">
                            <TableCell className="font-semibold text-base text-foreground">{schedule.events[0].topic}</TableCell>
                            <TableCell className="text-right font-medium text-base text-muted-foreground">{schedule.day} {schedule.date}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
      </div>
    </section>
  );
}
