import React from 'react';
import './Exploremenu.css'
import {menu_list} from '../../assets/assets'

const Exploremenu = ({category,setcategory}) => {
  return (
    <div className='exploremenu' id='exploremenu'>
        <h1>Explore our Menu</h1>
        <p className='explore-menu-text'>Choose from a diverse range of menu, the food you like to eat
            Choose from a diverse range of menu, the food you like to eat
            Choose from a diverse range of menu, the food you like to eat
        </p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='em-list-items'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      <hr />
    </div>
  );
}

export default Exploremenu;
