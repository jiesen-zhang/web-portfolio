import React from 'react'
// import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
import * as BiIcons from 'react-icons/bi'
import * as GiIcons from 'react-icons/gi'
// import * as SiIcons from 'react-icons/si'
// import { IoSchool } from 'react-icons/io5'

export const SidebarData = [
  {
    title: 'Home',
    path: '/web-portfolio/',
    icon: <AiIcons.AiOutlineHome />,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/web-portfolio/education',
    icon: <IoIcons.IoSchoolOutline />,
    cName: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/web-portfolio/experience',
    icon: <BiIcons.BiNetworkChart />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/web-portfolio/projects',
    icon: <AiIcons.AiOutlineCode />,
    cName: 'nav-text'
  },
  {
    title: 'Skills',
    path: '/web-portfolio/skills',
    icon: <GiIcons.GiSkills />,
    cName: 'nav-text'
  },
  {
    title: 'Info',
    path: '/web-portfolio/info',
    icon: <AiIcons.AiOutlineInfoCircle />,
    cName: 'nav-text'
  },
]