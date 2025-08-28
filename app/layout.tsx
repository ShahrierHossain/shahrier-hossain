import Header from "@/components/header";
import "./globals.css";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

// Move providers to a separate client component
import React from "react";
import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: '--font-poppins'
});

// Separate client component for providers
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <ActiveSectionContextProvider>
        {children}
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  );
}

export const metadata = {
  title: "Shahrier Hossain | AI, Robotics & Human-Centered Computing",
  description:
    "Shahrier Hossain is a Software Engineer and aspiring researcher specializing in Artificial Intelligence, Robotics, Human-Robot Interaction, UAV Systems, Human-Computer Interaction, and Behavioral Psychology.",
  keywords: [
    "Shahrier Hossain",
    "Artificial Intelligence",
    "Robotics",
    "Human-Robot Interaction",
    "Human-Computer Interaction",
    "UAV Systems",
    "Unmanned Aerial Vehicles",
    "Software Engineering",
    "Human Behavior",
    "Behavioral Psychology",
    "Tech Enthusiast",
    "Researcher",
    "Personal Portfolio",
    "AI in Robotics",
    "Human-Centered AI",
  ],
  authors: [{ name: "Shahrier Hossain" }],
  openGraph: {
    title: "Shahrier Hossain | AI, Robotics & Human-Centered Computing",
    description:
      "Portfolio of Shahrier Hossain — Software Engineer and aspiring researcher in Artificial Intelligence, Robotics, Human-Robot Interaction, UAV Systems, and Human Behavior.",
    url: "https://shahrier-hossain.vercel.app", 
    siteName: "Shahrier Hossain Portfolio",
    images: [
      {
        url: "/shahrier_hossain_casual_Image.jpg", 
        width: 1200,
        height: 630,
        alt: "Shahrier Hossain Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahrier Hossain | AI, Robotics & Human-Centered Computing",
    description:
      "Software Engineer & aspiring researcher in AI, Robotics, HRI, UAV Systems, and Human Behavior.",
    images: ["/shahrier_hossain_casual_Image.jpg"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`!scroll-smooth ${poppins.variable}`} suppressHydrationWarning>
      <body
        className={`${poppins.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
        
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
