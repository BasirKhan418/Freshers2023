import React, { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import toast,{Toaster} from "react-hot-toast";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { set } from "mongoose";
const Searchorder = () => {
  useEffect(()=>{
    const myAdmin = localStorage.getItem('myAdmin')
    if(!myAdmin){
      router.push('/admin/adminlogin');
     }
  },[])
  const [sid,setsId]=useState("")
  const shandlechange=(e)=>{
    if(e.target.name=="id"){
      setsId(e.target.value)
      SetOrder("")
      
    }
  }
  const handleSearch=async()=>{
    const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/searchsenior`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sid),
    });
    const res=await pr.json();
    SetOrder(res.data);
    console.log(res)
  }
  const [order, SetOrder] = useState();
  const [modal, Setmodal] = useState(false);
  const[regd,setRegd]=useState("");
  const[status,setStatus]=useState("");
  const[email,setEmail]=useState("");
  const[id,setId]=useState("");
  const handlechange=(e)=>{
   if(e.target.name=="regd"){
    setRegd(e.target.value)
   }
   else if(e.target.name=="status"){
    setStatus(e.target.value)
   }
else if(e.target.name=="email"){
    setEmail(e.target.value)
}
  }
  
  const updateorder=(regd,email,status,id)=>{
    setRegd(regd)
    setEmail(email)
    setStatus(status)
    setId(id)
  }
  const handleUpdate=async()=>{
  const data={regd,email,payment:status,id}
  const pr = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/updatesenior`, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const res=await pr.json();
  if(res.success){
    handleSearch();
    Setmodal(false)
    toast.success('Payment updated successfully!', {
        position: "top-right",
        });
  }
  else{
    toast.success(response.message, {
        position: "top-right",
        });
  }
  }
  return (
    <>
    <Head>
        
      <title>Search a for seniors |</title>
     
     </Head>
    <ThemeProvider theme={theme}>
       <FullLayout>
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none
        }
      `}</style>
      <Toaster/>
       <div className='text-black dark:text-white h-16 flex bg-white items-center'>
      <h1 className='sm:text-2xl text-xl font-bold mx-8'>Search a order or bookings</h1>
     
    </div>
    <div className='h-1 w-96 bg-amber-500 rounded '></div>
<div className='my-6'>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input value={sid} onChange={shandlechange} name="id" type="search" id="default-search" className=" font-semibold bock w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Booking ID...." required />
        <button onClick={handleSearch} type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
           
           {order!=null?<table className="w-full text-sm text-left text-gray-500  dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  {/* <th scope="col" className="px-6 py-3 flex items-center">
                    Image
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name (Qty)
                  </th> */}
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Regd
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Payment Status
                  </th>
                  
                  {/* <th scope="col" className="px-6 py-3">
                    {/* Customer Address
                  </th> */} 
                  <th scope="col" className="px-6 py-3 rounded text-center">
                    Action
                  </th>
                </tr>
               
              </thead>
              <tbody>
                    <tr
                      className="bg-white border-b-2 border-blue-200 rounded m-4 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      {/* <td  className="w-4 p-4">
                        <div className="flex items-center">
                          <img
                            src={item.img}
                            className="mt-2 mx-4 w-10 h-10 border-2 border-amber-300 rounded object-cover"
                          />
                        </div>
                      </td> */}
                      {/* <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        
                      </th> */}
                      <td className="px-6 py-4 font-semibold rounded text-center">{order.name}</td>
                      <td className="px-6 py-4 font-semibold rounded text-center">{order.regd}</td>
                      <td className="px-6 py-4 font-semibold rounded text-center">{order.email}</td>
                      <td className={`px-6 py-4 font-semibold rounded text-center text-black ${order.payment=="pending"?"bg-red-500":""}${order.payment=="paid"?"bg-green-500":""} `}>{order.payment}</td>
                      
                    
                      {/* <td className="px-6 py-4 font-semibold">{item.address}/ (District:-{item.city} Pin:-{item.pincode})<br/>Phone:-{item.phone}</td> */}
                      {order&&<td className="px-6 py-4">
                        <button
                          className="font-medium bg-yellow-600 dark:bg-blue-500 hover:bg-amber-800 text-white rounded p-2 m-2"
                          data-modal-target="popup-modal"
                          onClick={() => {
                            Setmodal(!modal);
                            updateorder(
                           order.regd,
                           order.email,
                            order.status,
                            order._id

                            );
                          }}
                        >
                          Update
                        </button>
                       
                      </td>}
                    </tr>
                 
               
              </tbody>
            </table>:<h1 className="font-semibold rounded bg-blue-50 p-2 m-2 text-center">No Orders found for this order id!</h1>}
          </div>
          <div
            id="updateProductModal"
            tabIndex="-1"
            aria-hidden="true"
            className={` ${
              modal ? "" : "hidden"
            } flex h-full overflow-y-auto overflow-x-auto fixed  top-0 right-0 left-0 z-150 justify-center items-center w-full md:inset-0 h-modal md:h-full mt-10 mb-8  border-blue-400`}
          >
            <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
              <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Update Status
                  </h3>
                  <button
                    onClick={() => {
                      Setmodal(false);
                    }}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="updateProductModal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="roomno"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     Regd
                    </label>
                    <input
                      type="text"
                      name="regd"
                      id="roomno"
                      value={regd}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Regd no."
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="checkin"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                     Check In
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={email}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Ex. 10/09/2023"
                    />
                  </div>
              
                  <div>
                    <label
                      htmlFor="status"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      value={status}
                      onChange={handlechange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    >
                      <option>select</option>
                      <option>paid</option>
                      <option>pending</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleUpdate}
                    className="text-white bg-blue-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Update Order
                  </button>
                </div>
              </div>
            </div>
            </div>
          
            
    </FullLayout>
    </ThemeProvider>
    </>
  )
}

export default Searchorder