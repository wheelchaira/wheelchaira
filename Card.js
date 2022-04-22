import React from "react"
import data from "./data"
import App from "./App"

export default function Card(props) {
    
    return (
         <div className="Card"> 
    
         <img src={props.img} />
         <h1> {props.name}</h1>
         <h1> {props.age}</h1>
                                         
         
         </div>
        
        
    )
    
    
}