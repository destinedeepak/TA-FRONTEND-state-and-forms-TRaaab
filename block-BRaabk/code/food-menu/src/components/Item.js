import React from 'react';
import data from '../data';

class Item extends React.Component{
    render(){
        let items;
        let activeCategory = this.props.activeCategory;
        if(activeCategory === 'all'){
            items = data
        }else {
            items = data.filter((item)=>item.category === activeCategory)
        }
        return(
            <ul className="flex flex-wrap justify-between p-20">
                {items.map((item)=>(
                <li className="flex-48 h-20 flex justify-between mb-20">
                    <img src={item.img} className="flex-28 h-20" alt="" />
                    <div className="flex-65">
                        
                        <div className="flex justify-between">
                            <h5>{item.title}</h5>
                            <span>${item.price}</span>
                        </div>
                        <p>{item.desc}</p>
                    </div>
                </li>
                ))}
            </ul>
        )
    }
}

export default Item;