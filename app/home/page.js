import Image from "next/image";
import { RectangleStackIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-row">
        <div className="h-full w-60 border-r flex flex-col pl-5 pt-10">
            <Image src={"/next.svg"} alt="logo" height={50} width={50} />
        </div>
        <div></div>
    </div>
  );
}
