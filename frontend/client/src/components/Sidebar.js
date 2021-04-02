import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import { SidebarData } from './SidebarData'
import './Sidebar.css';
import { IconContext } from 'react-icons'
import { icons } from 'antd/lib/image/PreviewGroup'
function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
//verify this line of code
    const showsidebar = () => setSidebar(!sidebar);
    return (
        <>
        <IconContext.Provider value ={{color: '#fff'}}>
        <div className="sidebar">
            <Link to="#" className='menu-tabs'>
                <FaIcons.FABars onClick={showsidebar}/>
                <FaIcons.FaAdjust/>
            </Link>
        </div>
        <nav className={tabbar ? 'side-menu active' : 'side-menu'}>
            <ul className='side-menu-items' onClick={showsidebar}>
                <li className="sidebar-toggle">
                    <Link to="#" className='menu-bars'>
                        <AiIcons.AiOutlineCloseSquare/>
                    </Link>
                </li>
                {SidebarData.map((item, index) =>{
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar
