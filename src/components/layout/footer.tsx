import Link from 'next/link';
import Image from 'next/image';
import { socialLinks, contactInfo, navLinks } from '@/lib/data';
import * as Icons from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const Icon = ({
  name,
  ...props
}: {
  name: keyof typeof Icons;
} & React.ComponentProps<typeof Icons.Icon>) => {
  const LucideIcon = Icons[name] as React.ComponentType<any>;
  return <LucideIcon {...props} />;
};

export function Footer() {
  const bgImage = PlaceHolderImages.find(
    (img) => img.id === 'testimonials-background'
  );

  return (
    <footer className="relative bg-black text-white py-8 md:py-12 overflow-hidden">
      {/* Background Image */}
      {bgImage && (
        <Image
          src={bgImage.imageUrl}
          alt={bgImage.description}
          fill
          className="object-cover"
          data-ai-hint={bgImage.imageHint}
          priority={false}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-12 gap-8 mb-10">
          {/* ===================== */}
          {/* Column 1: Quick Links */}
          {/* ===================== */}
          <div className="col-span-12 md:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="font-headline text-2xl font-bold mb-3">
              Quick <span className="text-accent">Links</span>
            </h2>

            <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
              {navLinks.map((link) =>
                link.isDropdown
                  ? link.subLinks?.map((subLink) => (
                      <Link
                        key={subLink.href}
                        href={subLink.href}
                        className="text-sm text-white/80 hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap py-1"
                      >
                        {subLink.label}
                      </Link>
                    ))
                  : (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm text-white/80 hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap py-1"
                    >
                      {link.label}
                    </Link>
                  )
              )}
            </nav>
          </div>

          {/* ===================== */}
          {/* Column 2: Get in Touch */}
          {/* ===================== */}
          <div className="col-span-12 md:col-span-4 flex flex-col items-center text-center md:items-start md:text-left">
            <h2 className="font-headline text-2xl font-bold mb-3">
              Get in <span className="text-accent">Touch</span>
            </h2>

            <div className="space-y-3 mt-2 w-full flex flex-col items-center md:items-start">
              {contactInfo.map((info) => (
                <Card
                  key={info.title}
                  className="w-full max-w-sm md:max-w-none bg-card/20 backdrop-blur-sm text-card-foreground border-l-4 border-accent shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <CardHeader className="flex flex-row items-start gap-3 p-3 md:p-4">
                    <div className="flex items-center justify-center h-8 w-8 rounded-md bg-accent/20 shrink-0 mt-1">
                      <Icon
                        name={info.icon}
                        className="h-4 w-4 text-accent"
                      />
                    </div>

                    <div className="flex-1">
                      <CardTitle className="font-headline text-sm md:text-base text-white">
                        {info.title}
                      </CardTitle>
                      <p className="text-white/80 text-xs md:text-sm whitespace-pre-line leading-relaxed">
                        {info.value}
                      </p>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* ===================== */}
          {/* Column 3: Social Links */}
          {/* ===================== */}
          <div className="col-span-12 md:col-span-4 flex flex-col items-center text-center">
            <h2 className="font-headline text-2xl font-bold mb-3">
              Follow <span className="text-accent">Us</span>
            </h2>

            <div className="flex gap-3 mt-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-md"
                >
                  <Icon name={link.icon} className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>

            <div className="mt-5">
              <Image
                src="/RC Updated.jpeg"
                alt="Researcher Connect Logo"
                width={180}
                height={180}
                className="object-contain bg-white rounded-md p-1"
              />
            </div>
          </div>
        </div>

        {/* ===================== */}
        {/* Footer Bottom */}
        {/* ===================== */}
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-xs text-white/80">
            © {new Date().getFullYear()} – SustainTechCon by Researcher Connect
            Innovation & Impact Pvt Ltd
          </p>
        </div>
      </div>
    </footer>
  );
}
