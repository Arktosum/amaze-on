import React from 'react'

export default function Email(props){
    
    return (
        <div >
        <div  >
        <input type="email" className="w-[250px] h-[40px] hover:bg-blue" placeholder='Enter your gmail'  onChange={(e)=>{
            props.update(e.target.value)
            
        }}/>
        </div>
        </div>
    );
}
