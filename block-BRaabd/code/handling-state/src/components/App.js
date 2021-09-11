import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.imageNames = ['basketball', 'cricket', 'laptop', 'phone', 'pubg', 'tiger'];
        this.state = {
            currentImage : '/media/basketball.jpg'
        }
    }
    handleClick = (event) =>{
        this.setState({
            currentImage:`/media/${event.target.innerText}.jpg`
        })
    }
    render(){
        return (
            <div className="w-7/12  mx-auto m-20 justify-start ">
             <div className="flex w-full flex-wrap">
             {this.imageNames.map((name)=>(
               <button className="bg-yellow-500 text-white rounded px-12 py-4 mr-4 inline-block mb-4" onClick={this.handleClick}>{name}</button>
           ))}
             </div>
           <img className="w-80 mx-auto" src={this.state.currentImage} alt="" />
            </div>
        )   
    }
}