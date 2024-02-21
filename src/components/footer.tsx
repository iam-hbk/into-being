import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Headset,
  Mail,
  MapPin,
  Phone,
  Rss,
  Scale,
  Send,
  Unplug,
  Zap,
} from "lucide-react";
import { Textarea } from "./ui/textarea";

export function Footer() {
  return (
    <footer className=" flex w-full flex-col items-center bg-bigtitle py-8 text-bigtitle-foreground dark:bg-background md:py-16">
      <div className="container flex flex-row justify-between gap-5 border border-red-500">
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
            <Textarea className="h-full" placeholder="Type your message here." />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>

        <div className="flex flex-row gap-4 md:col-span-4 md:col-start-2 lg:col-span-2 lg:col-start-4">
          <Link
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline"
            href="#"
          >
            <FacebookIcon className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline"
            href="#"
          >
            <TwitterIcon className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline"
            href="#"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
          <Link
            className="inline-flex items-center text-sm font-medium text-gray-900 hover:underline dark:text-gray-50 dark:hover:underline"
            href="#"
          >
            <InstagramIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
