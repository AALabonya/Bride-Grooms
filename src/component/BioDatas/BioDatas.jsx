/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../pages/Loading";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Helmet } from "react-helmet-async";

const BioDatas = () => {
  const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure()
  const [checkGender, setCheckGender] = useState('')
  const [check, setCheck] = useState('')
  const [totalData, setTotalData] = useState(0)
  const [page, setPage] = useState(0)
  const [minAge, setMinAge] = useState(null);
  const [maxAge, setMaxAge] = useState(null);
  const [selectDafultValue, setSelectDafultValue] = useState();
  const totalPage = Math.ceil(parseInt(totalData / 6));
  const countableBtn = [...Array(totalPage).keys()]
  axiosSecure("/allBioDataCount").then((res) => setTotalData(res.data.count))
 
  const { data: allBioData = [], refetch, isLoading } = useQuery({
    queryKey: ['allBioData', check, checkGender, page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allBioData?minAge=${minAge}&maxAge=${maxAge}&search=${check}&gender=${checkGender}&page=${page}`)
      return res.data;
    }

  })
  // ?search=${check}&gender=${checkGender}&page=${page}&minAge=${minAge}&maxAge=${maxAge}
  //?minAge=20&maxAge=35
  const handleCount = (event, value) => {
    setPage(value - 1)
    setCheck("")
    setCheckGender("")
    setMinAge("")
    setMaxAge("")
    
  }
  const handleMinAge = (event) => {
    event.preventDefault()
    setMinAge(event.target.value)
    setCheck("")
    setCheckGender("")
    setPage(0)

  }
  const handleMaxAge = (event) => {
    event.preventDefault()
    setMaxAge(event.target.value)
    setCheck("")
    setCheckGender("")
    setPage(0)
  }



  const handleRefetch = () => {
    refetch()
    setSelectDafultValue(true)
    setPage(0)
    
  }



  if (isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
      <Helmet>
        <title>BrideAndGrooms | Biodatas</title>
      </Helmet>
      <div className="w-full dark:bg-gray-500 h-96" style={{ backgroundImage: `url('https://moments.qodeinteractive.com/wp-content/uploads/2016/06/blog-standard-title-image.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundBlendMode: " multiply" }}>
        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
          <h1 className="text-5xl antialiased font-semibold leadi text-center dark:text-gray-100 mt-8">All Members BioData</h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100 mt-3">Find your matches</p>
          <div className="flex justify-center mt-5">
            <img src="https://rn53themes.net/themes/matrimo/images/icon/wedding-2.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 mx-auto gap-16 p-5">

        <div className="grid  gap-16 bg-white mx-auto h-96 ml-8 rounded-xl w-[500px]">
          <article className="rounded-xl border border-gray-700 shadow-2xl shadow-red-800 bg-white p-4">
            <div className="mt-5 mb-5">
              <label>
                Min Age:
                <input
                  className="bg-slate-200 rounded-md w-20"
                  type="number"

                  onChange={handleMinAge}
                />
              </label>
              <label>
                Max Age:
                <input
                  className="w-20 bg-slate-200 rounded-md"
                  type="number"

                  onChange={handleMaxAge}
                />
              </label>
              <button type="submit" onClick={() => handleRefetch()}>Search</button>
            </div>


            <ul className="mt-4 space-y-2">
              <li>
                <div >
                  <label className="block text-base font-semibold text-gray-900 mb-1">
                    Select Division
                  </label>

                  <select onChange={(e) => {
                    setSelectDafultValue(null)
                    setCheck(e.target.value)
                  }}
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1 mb-5 w-full rounded-lg py-3 border-gray-300 text-gray-700 bg-slate-300 border sm:text-sm"
                  >{
                      selectDafultValue ? <option defaultValue={"choose"}>{"choose"}</option> :
                        <option value={check}>{check}</option>
                    }

                    <option value="Dhaka">Dhaka</option>
                    <option value="Chattagram">Chattagram</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Barisal">Barisal</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Maymansign">Maymansign</option>
                    <option value="Sylhet">Sylhet</option>
                  </select>
                </div>
              </li>

              <li>
                <h1 className="mb-1 font-semibold">Gender</h1>
                <div

                  className="block h-full rounded-lg border border-gray-700 p-3 hover:border-pink-600"
                >
                  <fieldset onChange={(e) => {
                    setSelectDafultValue(true)
                    setCheckGender(e.target.value)
                  }} className="flex justify-around">

                    <div>
                      <input
                        type="radio"
                        name="ColorOption"
                        value="Male"
                        id="ColorRed"
                        className="peer hidden"
                      />

                      <label
                        htmlFor="ColorRed"
                        className="block h-8 w-8 cursor-pointer rounded-full bg-red-500 shadow-sm peer-checked:ring-2 peer-checked:ring-red-500 peer-checked:ring-offset-2"
                      >
                        <span className="sr-only">Fiesta Red</span>
                        <h1 className="ml-12 py-1 font-bold">Male</h1>
                      </label>

                    </div>

                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="ColorOption"
                        value="Female"
                        id="ColorBlue"
                        className="peer hidden"
                      />

                      <label
                        htmlFor="ColorBlue"
                        className="block h-8 w-8 mr-12 cursor-pointer rounded-full bg-blue-500 shadow-sm peer-checked:ring-2 peer-checked:ring-blue-500 peer-checked:ring-offset-2"
                      >
                        <h1 className="ml-10 py-1 font-bold">Female</h1>
                        <span className="sr-only">Cobalt Blue</span>
                      </label>
                    </div>


                  </fieldset>
                </div>
              </li>
            </ul>
          </article>
        </div>
        <div>
          <section className="bg-white text-blackrounded-lg border-gray-900 border">
            <div
              className="mx-auto max-w-screen-xl px-4 py-4 sm:py-12 sm:px-6 lg:py-5 lg:px-8"
            >

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                {
                  allBioData.map(all => <div key={all._id}
                    className="block rounded-xl p-2 shadow-2transition shadow-amber-800 border-8 bg-red-200 border-white hover:border-pink-500/10 hover:shadow-pink-500/10"
                  >
                    <img src={all.image} alt="" className="h-[250px] w-96 rounded-lg " />




                    <h4 className="mb-1 text-lg font-semibold text-center mt-2">Biodata Id: {all.biodataId} </h4>
                    <p className="text-sm dark:text-gray-400 text-center">BiodataType: {all.biodataType}</p>
                    <p className="text-sm dark:text-gray-400 text-center">Age: {all.age}</p>
                    <p className="text-sm dark:text-gray-400 text-center">Permanent Division: {all.permanentDivision}</p>
                    <p className="text-sm dark:text-gray-400 text-center">Occupation: {all.occupation}</p>
                    <div className="flex w-full justify-center mt-3">
                      <Link to={`/detailsPage/${all._id}`}>  <button className="text-white font-bold py-2 px-3 rounded-md w-full bg-gray-700 border-4">View Profile</button></Link>
                    </div>
                  </div>)
                }

              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-between bg-white items-center h-10 p-8">
      <div>
          <p className="bg-white shadow-2xl shadow-red-700 py-2 px-5 rounded-md"> {totalData}/{page+1} </p>

        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: "10px" }}>
          <Stack spacing={3}>
            <Pagination count={countableBtn.length} page={page + 1} onChange={handleCount} variant="outlined" shape="rounded"

              sx={{
                '& .MuiPaginationItem-root': {
                  color: 'blue', // Change the button color
                },
                '& .Mui-selected': {
                  backgroundColor: 'blue', // Change the active background color
                  color: 'white', // Change the active text color
                  '&:hover': {
                    backgroundColor: 'darkblue', // Change the active background color on hover
                  },
                },
              }}

            />
          </Stack>
        </div>
       
      </div>


    </div>
  );
};

export default BioDatas;