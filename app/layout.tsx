import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { AccessibleThemeProvider } from "@/components/accessible-theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { AccessibilityMenu } from "@/components/accessibility-menu"
import { AnalyticsProvider } from "@/components/analytics-provider"
import { ErrorBoundary } from "@/components/error-boundary"

// Load Inter font with specified subsets and display settings
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Ensure text remains visible during font loading
  variable: "--font-inter", // Allow usage as CSS variable
})

// Define metadata for better SEO
export const metadata: Metadata = {
  title: {
    default: "KhyAI - Advanced AI Solutions",
    template: "%s | KhyAI"
  },
  description: "KhyAI builds intelligent systems that transform how businesses operate and innovate through cutting-edge AI technology.",
  keywords: ["AI", "artificial intelligence", "machine learning", "data science", "portfolio", "KhyAI", "technology", "innovation"],
  authors: [{ name: "KhyAI" }],
  creator: "KhyAI",
  publisher: "KhyAI",
  generator: "Next.js",
  applicationName: "KhyAI Portfolio",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://khyai.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khyai.com",
    title: "KhyAI - Advanced AI Solutions",
    description: "KhyAI builds intelligent systems that transform how businesses operate and innovate.",
    siteName: "KhyAI",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "KhyAI - Advanced AI Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KhyAI - Advanced AI Solutions",
    description: "KhyAI builds intelligent systems that transform how businesses operate and innovate.",
    creator: "@khyai",
    images: ["/api/og"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: any
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <AccessibleThemeProvider>
              <AnalyticsProvider>
                {children}
                <AccessibilityMenu />
                <Toaster position="bottom-right" />
              </AnalyticsProvider>
            </AccessibleThemeProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
