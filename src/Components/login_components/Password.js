import React from 'react'

export default function Password(props){
    
    
    return (<div style={{marginTop:"0px"}}>
        <input style={{width:"250px",height:"40px"}} type="password" placeholder="Password" onChange={(e)=>{
            props.update(e.target.value)
        }
        }/>
        </div>
    );
}