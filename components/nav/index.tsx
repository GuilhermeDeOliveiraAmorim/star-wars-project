import Logo from "./logo";

export default function Nav() {
    return (
        <div className="flex flex-row bg-swraisinblack text-white p-2">
            <div className="basis-1/3 flex justify-start items-center">
                <Logo />
            </div>
            <div className="basis-1/3 flex justify-center items-center">
                <input className="w-full rounded-lg text-gray-500 p-1 pr-3 pl-3" type="text" name="search" id="search" />
            </div>
            <div className="basis-1/3 flex justify-end items-center"></div>
        </div>
    )
}