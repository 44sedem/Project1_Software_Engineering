import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Chrome } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0 left-0 ">
      <div className=" container flex items-center justify-between">
        <Link href="/"><Chrome /></Link>
        <Link className={buttonVariants()} href='/sign-in'>Sign in</Link>
      </div>
    </div>
  )
}

export default Navbar;
