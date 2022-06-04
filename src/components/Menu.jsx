import {FaTh, FaUserAlt, FaRegChartBar,FaCommentAlt,FaShoppingBag,FaThList} from "react-icons/fa";

const Menu = [
    {
        path:"/",
        name:"Dashboard",
        icon:<FaTh/>
    },
    {
        path:"/about",
        name:"About",
        icon:<FaUserAlt/>
    },
    {
        path:"/analytics",
        name:"Analytics",
        icon:<FaRegChartBar/>
    },
    {
        path:"/comment",
        name:"Comment",
        icon:<FaCommentAlt/>
    },
    {
        path:"/product",
        name:"Product",
        icon:<FaShoppingBag/>,
        submenu: [
            {
                path:"/productList/dress",
                name:"Dress",
                icon:<FaThList/>
            },
            {
                path:"/productList/shoe",
                name:"Shoe",
                icon:<FaThList/>
            },
        ]
    },
    {
        path:"/productList",
        name:"Product List",
        icon:<FaThList/>
    }
]

export default Menu;