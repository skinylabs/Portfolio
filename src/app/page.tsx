import { Icons } from "@/components/Icons/Icons";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="container flex flex-col gap-4 items-center justify-center min-h-screen py-2">
        <h1 className="text-white text-6xl text-center font-bold">
          Nur Afif Misbahuddin<span className="text-blue-500">.</span>
        </h1>
        <p className="text-white">
          Hello, I&apos;m Designer, Videografer,Fullstack Developer and Noodle
          Enthausiast
        </p>

        <div className="flex gap-8">
          <div className="cursor-pointer p-3 border-2 rounded-full text-white hover:text-slate-950 hover:bg-white hover:scale-110 duration-300 ease-in-out">
            <Icons.Instagram />
          </div>
          <div className="cursor-pointer p-3 border-2 rounded-full text-white hover:text-slate-950 hover:bg-white hover:scale-110 duration-300 ease-in-out">
            <Icons.Github />
          </div>
          <div className="cursor-pointer p-3 border-2 rounded-full text-white hover:text-slate-950 hover:bg-white hover:scale-110 duration-300 ease-in-out">
            <Icons.Linkdin />
          </div>
          <div className="cursor-pointer p-3 border-2 rounded-full text-white hover:text-slate-950 hover:bg-white hover:scale-110 duration-300 ease-in-out">
            <Icons.Mail />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="flex text-white text-4xl text-center font-bold">
          Nur Afif Misbahuddin<span className="text-blue-500 ml-[-2px]">.</span>
        </h1>
      </section>
    </>
  );
}
