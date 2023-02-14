import React from 'react'
import Email from './login_components/Email'
import Navbar from './Navbar'


export default function Content() {


    return (<>
        <Navbar/>
        <div className="flex flex-row justify-center items-center m-10">
            <Email my_style={"bg-gray w-[250px] h-[40px]  rounded-[5px] hover:border-2 border-[#F97707] focus:outline-none p-2.5 dark:bg-[#d9d9d9]"}/>
        </div>

      </>
    );
  }