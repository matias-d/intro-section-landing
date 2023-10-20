import { companies } from "../utils/company-list";
import { features } from "../utils/features-list";
import { Dropdown } from "./dropdown-action";
import { ItemRender } from "./items-render";
import { IconMenu, Logo } from "../assets";
import { Sidebar } from "./Sidebar";
import { useState } from "react";



export function Header () {

    const [dropwdowns, setDropdowns] = useState({
        features : false,
        company: false
    }) 

    const [sidebar, setSidebar] = useState(false)

    const onDropdown = (type) => {
        setDropdowns(prevValues => ({
            features: type === "features" ? !prevValues.features : false,
            company: type === "company" ? !prevValues.company : false
        }))
    }

    const onSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <header className="flex justify-between lg:justify-normal px-8 py-6 gap-x-14 w-full items-center lg:text-base dt:text-[18px] ">
                <Logo />
                <nav className={`hidden lg:flex justify-between w-full`}>
                    <ul className="flex gap-x-8 items-center">
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
                    <div className="flex gap-x-6 items-center">
                        <a href="#" className="text-almost-gray  hover:text-almost-back transition-colors">Login</a>
                        <a href="#" className="text-almost-gray  border border-almost-back px-4 py-2 rounded-xl hover:text-almost-back transition-colors">Register</a>
                    </div>
                </nav>
                <button className="inline-block lg:hidden" onClick={onSidebar}>
                    <IconMenu />
                </button>
            </header>
            <Sidebar 
                isActive={sidebar}
                onSidebar={onSidebar}
            />
        </>

    )
}