import { RiPantoneFill } from "@remixicon/react";
import Link from "next/link";

function Logo() {
    return (
    <Link href={`/`} className={`w-fit inline-flex gap-x-2 outline-none bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent`}
        draggable={false}>
        <RiPantoneFill className={`w-7 h-7 text-primary`} />
        <h1 className={`text-xl xl:text-2xl font-bold`}>focura</h1>
    </Link>
)}

export default Logo;