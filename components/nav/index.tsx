import Logo from "./logo";
import { FaSearch } from 'react-icons/fa';

export default function Nav() {
    return (
        <div className="flex flex-row bg-swraisinblack text-white p-2">
            <div className="basis-1/3 flex items-center">
                <Logo />
            </div>
            <div className="basis-2/3 lg:basis-1/3 flex justify-center items-center gap-2">
                <input className="w-full rounded-lg text-gray-500 p-1 pr-3 pl-3 h-full" type="text" name="search" id="search" />
                <button className="rounded-lg text-swbone p-1 pr-3 pl-3 h-full bg-swbdazzledblue hover:bg-swflame hover:text-swxiketic">
                    <FaSearch />
                </button>
            </div>
        </div>
    )
}