/* eslint-disable react/prop-types */
import { IconArrowDown, IconArrowUp } from "../assets";

export function Dropdown ({ label, items, render, isActive ,onActive }) {
    return (
        <div className="relative ">
            <button onClick={onActive} className="flex items-center gap-x-2 text-almost-gray hover:text-almost-back transition-colors">{label} {isActive ? <IconArrowUp /> : <IconArrowDown />}</button>
            <div className={`${!isActive && 'hidden '} shadow-lg rounded-xl px-4 py-2 absolute top-12 left-0 flex flex-col gap-y-4 w-36 z-50 bg-almost animate-fade-down `}>
                {
                    items.map(item => render(item))
                }
            </div>
        </div>
    )
}