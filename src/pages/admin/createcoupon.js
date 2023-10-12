
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import toast,{Toaster} from "react-hot-toast";
import FullLayout from "../../../trc/layouts/FullLayout";
const Createcoupon = () => {
    const[regd,setRegd]=useState('');
    const[loading1,setLoading1]=useState(false);
    const[cpn,setCpn]=useState('');
    const handleChanges=(e)=>{
        if(e.target.name==='regd'){
            setRegd(e.target.value);
        }   
    }
    const handleSubmit=async()=>{
        if(regd.length<=5){
            toast.error('Please enter a Regd No. !', {
                position: "top-right",
              })
        }
        else{
            const data={regd};
            const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/createcoupon`, {
                method: "POST", // or 'PUT'
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });
              const response=await res.json();
              if(response.success==true){
                setCpn(response.data)
                setLoading1(false);
                toast.success('Coupon Created Successfully', {
                    position: "top-right",
                    });
                    setRegd('');
              }
              else if(response.success==false){
                setLoading1(false);
                toast.error(response.message, {
                    position: "top-right",
                    });
              }
             
              setLoading1(false);
        }
    }
  return (
    <div>
       <ThemeProvider theme={theme}>
        <FullLayout>
<style jsx global>{`
            footer {
              display: none;
            }
            .Navbar {
              display: none;
            }
          `}</style>
          <Toaster/>
<div className="flex justify-center items-center flex-col">
    <input type="number" name="regd" value={regd} onChange={handleChanges} className="p-4 m-4 font  text-gray-900 border-2 rounded border-green-600 w-[50vw]" placeholder="Enter regd no."/>
    <button className="text-white bg-green-600 p-2 rounded font " onClick={handleSubmit}>
     {loading1?"Creating...":"Create Coupon"}
    </button>
    {cpn.length>0?<div className="bg-gradient-to-r from-black to-gray-900 flex items-center justify-center my-6">
     
     <div className="bg-white p-8 rounded-lg shadow-lg text-center">
       <div className="animate-tickScale inline-block bg-green-600 rounded-full">
   
           <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
           </svg>
       </div>
       
       <h1 className="text-4xl font-semibold text-gray-800 mb-4 font">Congratulations!</h1>
       <p className="text-lg text-gray-600 mb-4 font">You have successfully registered for the Freshers Party Event.</p>
       <p className="text-lg text-gray-600 mb-2 font">Your Food Coupon Code Is <span className='font-bold text-green-600'>{cpn}</span>.</p>
       
       <p className="text-sm text-gray-600 mb-4 font">Get your free meal after showing it on fresher&apos;s party event. <br/>Thank you for registration.</p>
   </div>
   </div>:""}
</div>
        </FullLayout>
        </ThemeProvider>
    </div>
  )
}

export default Createcoupon
