import Image from "next/image";
import { useEffect } from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen bg-gradient-to-tr from-purple-500 to-pink-500 font-serif">
      {/* <Image className="absolute z-0" src="https://picsum.photos/id/1/200/300" alt="Forever Kind" width={100} height={100} /> */}
      <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-24 text-center rounded-lg">
        <h1 className="text-5xl m-4">Forever Kind</h1>
        <button className="bg-violet-500 hover:bg-violet-900 p-2 rounded-lg"><a href="/">
          Book an appointment
        </a>
        </button>
      </div>
    </main>
  );
}
