import {React,useState} from 'react'
import Password from './login_components/Password';
import Submit from './login_components/Submit';
import Email from './login_components/Email';

function Create_new(){
    let name={"username":""}
    let email={"email":""};
    let password={"password":""};
    let confirm_password={"password":""};
    let file={"profile":""};
    let [get_name,set_name]=useState(name)
    let [get_email,set_email]=useState(email);
    let [get_password,set_password]=useState(password);
    let [get_confirm_password,set_confirm_password]=useState(confirm_password);
    let [get_file,set_file]=useState(file);
    function submitted(){
        if (!(get_name) || !(get_email) || !(get_password) || !(get_confirm_password) || !(get_file)){
            alert("All input fields are required")
        }
        else if(get_password!==get_confirm_password){
            alert("Password and confirm password should be same");
        }
    
        else{
            let data={"name":get_name,"email":get_email,"password":get_password,"picture":get_file}
            console.log(data);
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 
                        'application/json;charset=utf-8'
                },
                body: JSON.stringify(data)
            }
            
            // my post request for send the data
            let fetchRes = fetch(
                "https://sympatheticcriticalmaintenance.raghul1122.repl.co/signup", options);
                fetchRes.then(res =>
                res.json()).then(d => {
                    console.log(d)
                })
            
            localStorage.setItem("user", fetchRes)

            console.log(get_name,get_email,get_password,get_confirm_password,get_file);
        }
    }

    return (
        <div className="bg-[#000000] flex flex-col justify-top items-center min-h-[100vh] w-[100%] h-[100%] m-0% " >
        <div><img src="https://d24v5oonnj2ncn.cloudfront.net/wp-content/uploads/2018/10/16030301/Amazon-Logo-Black.jpg"  height="200" width="200"/></div>
        <div className="bg-[#a8a29e]   flex flex-col items-center w-[300px] h-[430px] rounded-[10px]">   
            <p className=" font-semibold w-[250px] mt-5 mb-0.5">Name</p>
            <input className="bg-gray w-[250px] h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none p-2.5 dark:bg-[#d9d9d9]"  onChange={(e)=>{set_name(e.target.value);}} />
            
            <p className=" font-semibold w-[250px] mt-2 mb-0.5">Email</p>
            <Email my_style={"bg-gray w-[250px] h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none p-2.5 dark:bg-[#d9d9d9]"} update={set_email}  />
            
            <p className="font-semibold w-[250px] mt-2 mb-0.5">Password</p>
            <Password  my_style={"h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none w-[250px] p-2.5  dark:bg-[#d9d9d9]  "} update={set_password}/> 
            <p className="font-semibold w-[250px] mt-2 mb-0.5">Confirm Password</p>
            <Password  my_style={" h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none w-[250px] p-2.5  dark:bg-[#d9d9d9] "} update={set_confirm_password} /> 
            <div className="w-[250px] mt-2"><input accept="image/png, image/jpeg" onChange={(e)=>{
                var src1 = (e.target.files[0]);
                var fd = new FormData();
                fd.append("image/png, image/jpeg", src1 /*, optional filename */)
                console.log("fd",fd);
                set_file(fd);
            }} type="file"/></div>
            
            <div className="mt-2 "></div>
            <Submit  thing={"Sign up"} onclk={submitted} />
        </div>
        </div>
    );

}

export default Create_new;