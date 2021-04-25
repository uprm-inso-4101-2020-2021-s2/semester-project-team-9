import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"

export const SidebarData = [
    {
        title: 'Subscriptions',
        path: '/',
        icon: <AiIcons.AiFillAppstore/>,
        className: 'side-text'
    },
    {
        title: 'Entertainment',
        path: '/entertainment',
        icon: <AiIcons.AiFillAmazonCircle/>,
        className: 'side-text'
    },
]