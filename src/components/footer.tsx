import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Headset,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Rss,
  Scale,
  Send,
  Twitter,
  Unplug,
  Users,
  Zap,
} from "lucide-react";
import { Textarea } from "./ui/textarea";

export function Footer() {
  return (
    <footer className=" flex w-full flex-col items-center bg-bigtitle py-6 text-bigtitle-foreground dark:bg-background">
      <div className="container flex flex-row justify-between gap-5">
        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="flex flex-row items-center gap-2 text-xl font-semibold">
              Address <MapPin />
            </h3>
            <Link
              href="https://maps.google.com/?q=375+Vine+Avenue,+Ferndale,+Randburg,+2194"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-primary hover:underline"
            >
              375 Vine Avenue, Ferndale, Randburg, 2194
            </Link>
          </div>
          <div className="space-y-2">
            <h3 className="flex flex-row items-center gap-2 text-xl font-semibold">
              Contact Us <Headset />
            </h3>
            <div className="flex flex-col">
              <span className="flex flex-row items-center gap-2 hover:text-primary hover:underline">
                <Phone size={18} />
                <Link
                  className="hover:text-primary hover:underline"
                  href="tel:+27646599145"
                >
                  +27 64 659 9145
                </Link>
              </span>
              <span className="flex flex-row items-center gap-2 hover:text-primary hover:underline">
                <Mail size={18} />
                <Link href="mailto:info@intobeingplacements.co.za">
                  info@intobeingplacements.co.za
                </Link>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-2 text-sm">
            <h3 className="flex flex-row items-center gap-2 text-xl font-semibold">
              Legal <Scale />
            </h3>
            <Link className="hover:text-primary hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:text-primary hover:underline" href="#">
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="max-w-[20%]">
          <h3 className="flex flex-row items-center gap-2 text-xl font-semibold">
            Quick Links <Zap />
          </h3>
          <div className="mt-3 flex flex-col gap-2 text-sm">
            <Link className="hover:text-primary hover:underline" href="#">
              Available Positions
            </Link>
            <Link className="hover:text-primary hover:underline" href="#">
              Upload CV
            </Link>
            <Link className="hover:text-primary hover:underline" href="#">
              Upload Vacancy
            </Link>
          </div>
          <h3 className="mt-5 flex flex-row items-center gap-2 text-xl font-semibold">
            Newsletter <Rss />
          </h3>
          <p className="mt-3 text-sm">
            Subscribe to our newsletter to get the latest news and updates
          </p>
          <form className="my-3 flex flex-row gap-2">
            <Input placeholder="Email" />
            <Button size="icon" className="p-3">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="flex h-full flex-col gap-4 ">
          <h3 className="flex flex-row items-center gap-2 text-xl font-semibold">
            Get In Touch
            <Unplug />
          </h3>
          <form className="flex h-full flex-grow flex-col gap-2 md:col-span-4 md:col-start-2 lg:col-span-3 lg:col-start-3">
            <div className="grid gap-4 md:grid-cols-2">
              <Input className="w-full" placeholder="Name" />
              <Input className="w-full" placeholder="Email" />
            </div>
            <Textarea
              className="h-full"
              placeholder="Type your message here."
            />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="flex flex-row items-center gap-2 text-xl font-semibold">
            Social Media <Users />
          </h3>
          <Link
            target="_blank"
            className="flex flex-row gap-3 hover:text-primary hover:underline"
            href="https://x.com/intobeingplaced"
          >
            <Twitter />
            Twitter
          </Link>
          <Link
            target="_blank"
            className="flex flex-row gap-3 hover:text-primary hover:underline"
            href="https://www.instagram.com/intobeingplacements/"
          >
            <Instagram />
            Instagram
          </Link>
          <Link
            target="_blank"
            className="flex flex-row gap-3 hover:text-primary hover:underline"
            href="https://www.linkedin.com/company/intobeing-placements/"
          >
            <Linkedin />
            LinkedIn
          </Link>
        </div>
      </div>
      <Link
        href={"https://heritier-kaumbu.vercel.app"}
        className="mt-5 text-sm hover:text-primary hover:underline"
      >
        ©{new Date().getFullYear()} Into Being Placements. All rights reserved.
      </Link>
      <Link
        href={"https://heritier-kaumbu.vercel.app"}
        className="text-sm hover:text-primary hover:underline"
      >
        Made with ❤️ by Heritier Kaumbu
      </Link>
    </footer>
  );
}
