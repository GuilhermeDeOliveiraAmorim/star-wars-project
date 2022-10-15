import Image from "next/image";
import logo from '../../../public/icons8-guerra-nas-estrelas-48.png'

export default function Logo() {
    return (
        <Image
            src={logo}
            alt="Logo"
            className="h-full"
        />
    )
}