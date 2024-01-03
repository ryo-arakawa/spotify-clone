import SupabaseProvider from "@/providers/SupabaseProvider";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";
import "./globals.css";
import { Figtree } from "next/font/google";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/hooks/ModalProvider";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Spotify Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider />
            <Sidebar>{children}</Sidebar>
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
