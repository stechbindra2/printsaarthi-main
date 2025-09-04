import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "PrintRocket | #1 Online Printing Services for Students & Businesses | Fast & Affordable",
  description: "PrintRocket is India's leading online printing service. Get instant quotes for documents, assignments, business cards, banners, posters, and custom prints. Free delivery, 24/7 service, and student-friendly prices. Order now!",
  keywords: "printrocket, online printing, student printing, document printing, business cards, banners, posters, custom printing, fast printing, affordable printing, print shop, online print service",
  author: "PrintRocket Team",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "PrintRocket | #1 Online Printing Services",
    description: "Get high-quality prints delivered fast. Students & businesses trust PrintRocket for all printing needs.",
    url: "https://printrocket.com",
    siteName: "PrintRocket",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrintRocket - Online Printing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintRocket | #1 Online Printing Services",
    description: "Get high-quality prints delivered fast. Students & businesses trust PrintRocket.",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://printrocket.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PrintRocket",
              "description": "Professional online printing services for students and businesses",
              "url": "https://printrocket.com",
              "telephone": "+91-9211202801",
              "email": "PrintRocket78@gmail.com",
              "logo": "https://printrocket.com/logo_notBg.svg",
              "image": "https://printrocket.com/logo_notBg.svg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "5th floor, Udhmodya Foundation, Maharishi Kannad Bhawan",
                "addressLocality": "University of Delhi",
                "addressRegion": "Delhi",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "28.6877",
                "longitude": "77.2095"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "₹₹",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "28.6877",
                  "longitude": "77.2095"
                },
                "geoRadius": "50000"
              },
              "services": [
                "Document Printing",
                "Business Cards",
                "Banners",
                "Posters",
                "Custom Printing"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
