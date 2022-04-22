import React from 'react';
import ReactDOM from 'react-dom';
import data from './data'
import Card from './Card'
import Header from './Header'

export default function App (props) {
    const [myname, myFunction] = React.useState("Yes")
    
         
    function ChangeToYes() {
            
            if (myname === "Yes") {
                   myFunction("No")
            }
            else if (myname === "No") {
                myFunction("yeepp")
            }
        
          }
          
    
    
       const cards = data.map(item => {
        return (
            <div>
        
            <Card 
            key={item.key}
            name={item.name}
            age={item.age}
            img={item.img}
            />
            </div>
        )
    })        
    
       
    
     return (
         
         <div> 
                       <Header />
                           <h1 onClick={ChangeToYes}> {myname} </h1>
         
           {cards}
         </div>
         
     )
    
    
}