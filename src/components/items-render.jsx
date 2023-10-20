import React from "react"

/* eslint-disable react/prop-types */
export function ItemRender ({ item }) {

    return (
        <a href="#" className="flex gap-x-4 text-almost-gray hover:text-almost-back transition-colors text-sm">
            {
                item.icon &&
                React.createElement(item?.icon)
            }
            {item?.label}
        </a>
    )
}