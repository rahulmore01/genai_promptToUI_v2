import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { DM_Sans } from "next/font/google";
const Dm_Sans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "GenUI",
  description: "GenUI is a AI tool to generate UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={Dm_Sans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
