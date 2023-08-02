import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center p-24">
      <h1 className="text-6xl font-bold mb-2">
        Post
        <span className="text-rose-600">Wiz</span>
      </h1>
      <span className="text-gray-500">Write better social media posts.</span>
      <div className="flex justify-around space-x-4 mt-2 items-center">
        {" "}
        <Button className="mt-6 hover:bg-rose-600" variant="outline" size="lg">
          Get Started
        </Button>{" "}
        <Button className="mt-6" size="lg">
          Sign in
        </Button>
      </div>
    </main>
  );
}
