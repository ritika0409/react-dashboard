import { FaTags } from "react-icons/fa"
import {BsCashStack}  from "react-icons/bs"
import {AiOutlineLike} from "react-icons/ai"
import {HiOutlineUsers} from "react-icons/hi"
export const cardData = [
    {
        title:'Total Revenue',
        numeric : '$2,129,430',
        color:'#DDEFE0',
        icon : <BsCashStack />
    },
    {
        title:'Total Transactions   ',
        numeric : '1,520',
        color:'#F4ECDD',
        icon : <FaTags />
    },
    {
        title:'Total Likes',
        numeric : '9,721',
        color:'#EFDADA',
        icon : <AiOutlineLike />
    },
    {
        title:'Total Users',
        numeric : '892',
        color:'#DEE0EF',
        icon : <HiOutlineUsers />
    }
]