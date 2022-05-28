import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'

export default function Navbar({filterItem,menuList}) {
  return (
    <>
    
    <nav className="navbar">
        <div className="btn-group">
          {menuList.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>
      
    </>
  )
}
