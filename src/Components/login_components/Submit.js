import React from 'react'

export default function Submit(props){
    
    return (<div style={{marginTop:"10px"}}>


        <input className="w-[250px] bg-[#f97316] hover:bg-[#fb923c] text-white font-bold py-2 px-4 rounded-[5px]" type="submit" value={props.thing} onClick={props.onclk}></input>
        </div>
    );
}