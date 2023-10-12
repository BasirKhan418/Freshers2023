import { Grid } from "@mui/material";
import BlogCard from "../../../trc/components/dashboard/BlogCard";
import SalesOverview from "../../../trc/components/dashboard/SalesOverview";
import DailyActivity from "../../../trc/components/dashboard/DailyActivity";
import ProductPerfomance from "../../../trc/components/dashboard/ProductPerfomance";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../../trc/theme/theme";
import FullLayout from "../../../trc/layouts/FullLayout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import { set } from "mongoose";
export default function Index() {
  const[seniorveg,setSeniorveg]=useState(0);
  const[seniornonveg,setSeniornonveg]=useState(0);
  const[juniorveg,setJuniorveg]=useState(0);
  const[juniornonveg,setJuniornonveg]=useState(0);
  const router= useRouter();
  useEffect(()=>{
    const myAdmin = localStorage.getItem('myAdmin')
    if(!myAdmin){
      router.push('/admin/adminlogin');
     }
      FetchDatajunior();
      FetchDatasenior();
  },[])
  const FetchDatajunior=async()=>{
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/juniormeal`);
    const resp = await a.json();
    setJuniorveg(resp.veg);
    setJuniornonveg(resp.nonveg);
  
  }
  const FetchDatasenior=async()=>{
    let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/seniormeal`);
    const resp = await a.json();
    setSeniorveg(resp.veg);
    setSeniornonveg(resp.nonveg);
    
  }
  return (
    <ThemeProvider theme={theme}>
       <Head>
      <title>ARAMBH Admin Panel | Manage All data</title>
  
     </Head>
       <style jsx global>{`
        footer {
          display:none;
        }
        .Navbar{
          display:none;
        }
        .nav2{
          display:none;
        }
      `}</style>
        <FullLayout>
          <div className="flex justify-start items-center">
          <span className="text-white bg-green-600 p-2 text-2xl font-bold font mx-4 rounded">Senior Veg:-{seniorveg}</span>
          <span className="text-white bg-red-600 p-2 text-2xl font-bold font mx-4 rounded">Senior NonVeg:-{seniornonveg}</span>
          <span className="text-white bg-green-600 p-2 text-2xl font-bold font mx-4 rounded ">Junior Veg:-{juniorveg}</span>
          <span className="text-white bg-red-600 p-2 text-2xl font-bold font mx-4 rounded ">Junior NonVeg:-{juniornonveg}</span>
          </div>
   
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      <Grid item xs={12} lg={8}>
        <ProductPerfomance />
      </Grid>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
    </Grid>
    </FullLayout>
    </ThemeProvider>
    
  );
}

