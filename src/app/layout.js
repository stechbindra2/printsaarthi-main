import "./globals.css";

export const metadata = {
  title: "PrintRocket | AI-Powered Design, Printing, Stationery & Fast Delivery",
  description: "PrintRocket creates editable print assets from text prompts, fulfills on-demand prints, and delivers stationery quickly to students and SMEs. AI-powered design, easy ordering, and fast delivery.",
  keywords: "PrintRocket, AI printing, prompt design, stationery delivery, student printing, business printing, editable assets, fast delivery, online print studio",
  author: "PrintRocket Team",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "PrintRocket | AI-Powered Print & Design Studio",
    description: "Generate editable designs from text, print on demand, and get fast delivery for students and small businesses with PrintRocket.",
    url: "https://printrocket.com",
    siteName: "PrintRocket",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrintRocket AI-powered design and print services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrintRocket | AI Design, Print, Stationery, Delivery",
    description: "AI-powered editable design, fast print fulfillment, and delivery for students and SMEs.",
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
        <meta name="theme-color" content="#622AD1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "PrintRocket",
              "description": "AI-powered design, printing, stationery, and delivery services for students and SMEs.",
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
                "AI design assets",
                "Editable stationery templates",
                "Document and poster printing",
                "Business cards and flyers",
                "Fast doorstep delivery"
              ]
            })
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
