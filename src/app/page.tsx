import { ThemeChanger } from "@/components/ThemeChanger";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       Hi, I am Md Saddam Hossain
       <ThemeChanger />
    </main>
  );
}
