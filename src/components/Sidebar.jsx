/* eslint-disable react/prop-types */
import { companies } from "../utils/company-list";
import { Dropdown } from "./dropdown-action";
import { ItemRender } from "./items-render";
import { IconCloseMenu } from "../assets";
import { useState } from "react";
import { features } from "../utils/features-list";

export function Sidebar({ isActive, onSidebar }) {


    const [dropwdowns, setDropdowns] = useState({
        features : false,
        company: false
    }) 

    const onDropdown = (type) => {
        setDropdowns(prevValues => ({
            features: type === "features" ? !prevValues.features : false,
            company: type === "company" ? !prevValues.company : false
        }))
    }

    return (
        <div className={`lg:hidden fixed ${isActive ? 'inset-x-0' : '-right-full'} inset-y-0 w-full min-h-screen bg-black/50 z-40`}>
            <aside className={`${isActive ? 'right-0' : '-right-full'} bg-almost h-screen w-60 fixed top-0 transition-all duration-300 ease-in-out  `}>
                <button className="absolute top-4 right-4" onClick={onSidebar}>
                    <IconCloseMenu />
                </button>
                <nav className="pt-20 px-6 w-full">
                    <ul className="flex flex-col gap-y-6 mb-6">
                            <li >
                                <Dropdown 
                                    label={'Features'}
                                    items={features}
                                    isActive={dropwdowns.features}
                                    onActive={() => onDropdown('features')}
                                    render={(item) => <ItemRender item={item} key={item.id}/>}
                                />
                            </li>
                            <li>
                                <Dropdown 
                                    label={'Company'}
                                    items={companies}
                                    isActive={dropwdowns.company}
                                    onActive={() => onDropdown('company')}
                                    render={(item) => <ItemRender item={item} key={item.id}/>}
                                />
                            </li>
                            <li className="text-almost-gray hover:text-almost-back transition-colors">
                                <a href="#">Careers</a>
                            </li>
                            <li className="text-almost-gray hover:text-almost-back transition-colors">
                                <a href="#">About</a>
                            </li>
                    </ul>
                    <div className="flex flex-col gap-y-6 items-center w-full">
                        <a href="#" className="text-almost-gray  hover:text-almost-back transition-colors text-sm">Login</a>
                        <a href="#" className="text-almost-gray  border border-almost-back px-4 py-2 rounded-xl hover:text-almost-back transition-colors text-sm w-full text-center">Register</a>
                    </div>
                </nav>

            </aside>
        </div>

    )
}