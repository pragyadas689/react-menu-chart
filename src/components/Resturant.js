import React,{useState} from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import  Navbar  from './Navbar'

const uniqueList = [  ...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"All"
]

//console.log(uniqueList)

export default function Resturant() {
    const [menuData,setMenuData] = useState(Menu)
    const [menuList,setMenuList] = useState(uniqueList)

    const filterItem= (category)=>{
        const updatedList = Menu.filter((curElem)=>{
           return curElem.category===category;
        })
        if(category==="All")
        setMenuData(Menu)
        else
        setMenuData(updatedList);
      }

  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}/>
   <MenuCard menuData={menuData}/>
    </>
  )
}
