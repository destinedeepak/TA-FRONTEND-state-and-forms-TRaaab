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
                <li className="flex-48 h-20 flex justify-between mb-28">
                    <img src={item.img} className="flex-35 h-32 object-cover border-4 border-primary rounded" alt="" />
                    <div className="flex-60">
                        <div className="flex justify-between border-b-2 border-dotted pb-1">
                            <h5 className="capitalize text-primary font-bold">{item.title}</h5>
                            <span className="font-bold text-secondary">${item.price}</span>
                        </div>
                        <p className='text-tertiary mt-4'>{item.desc}</p>
                    </div>
                </li>
                ))}
            </ul>
        )
    }
}

export default Item;