import clsx from "clsx";
import { Navbar } from "./Navbar";
import Image from "next/image";

export function Header() {


  return (
    <header
      className={
        clsx(
          "bg-backgroundSecondary z-40 flex justify-center items-center px-4 pb-4 md:pb-0 fixed top-0 left-0 w-full",
          "md:flex-col"
        )
      }
    >
      <section className="flex flex-col items-center basis-11/12">
        <Image
          src="/stwboot-logo.png"
          width={400}
          alt="Stewart Boot Logo"
          height={150}
        />
      </section>
      <Navbar className="w-full mt-4 self-end basis-1/12" />
    </header>
  )
}