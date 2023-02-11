import Email from "./login_components/Email.js"
import Password from "./login_components/Password.js"
import Submit from "./login_components/Submit"
import {React,useState,useEffect} from "react"


function Login() {
  let dic={"gmail":""};
  let dic2={"password":""}
  let [get_value_state,set_value_State]=useState(dic);
  let [get_value_state2,set_value_State2]=useState(dic2);
  function set_the_state(){
      console.log(get_value_state,get_value_state2)
  }
  function open_create_new(){
    console.log("open new");
  }
  return (
  <div className="bg-[#000000] flex flex-col justify-top items-center min-h-[100vh] w-[100%] h-[100%] m-0% "  > 
                <div><img src="https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg"  height="200" width="200"/></div>
                
                <div  className="bg-[#a8a29e]   flex flex-col items-center w-[300px] h-[320px] rounded-[10px]"> 
                <p className="font-bold text-[24px] w-[250px] mt-5 mb-2  ">Sign in</p>
                
                <Email  update={set_value_State}  />
                <Password style={{}} update={set_value_State2}/>
                
                <div onClick={(e)=>{console.log(e.target.checked)}} style={{display:"flex",width:"250px",marginTop:"10px" }}> <input type="checkbox"  ></input> <div style={{marginLeft:"3px"}}>Keep me signed in</div> </div>
                
                <Submit  onclk={set_the_state} thing={"Login"}/>
                
                <div><p className="font-semibold mt-[10px] mb-[-8px] mr-[10px] text-[14px] " >New to Amaze-On?</p></div>
                
                <Submit  onclk={set_the_state} thing={"Create a new Amazon account"}/>
                </div>
                
          </div>);
}
//<!--style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-end", minHeight:"90vh",width:"100",height:"100"}}> -->
export default Login;
