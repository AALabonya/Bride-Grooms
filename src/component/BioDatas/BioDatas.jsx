import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";

const BioDatas = () => {
  const axiosPublic = useAxiosPublic()
  const { data: allBioData = [] } = useQuery({
    queryKey: ['premiumRequest'],
    queryFn: async () => {
      const res = await axiosPublic.get('/allBioData')
      return res.data;
    }

  })
  console.log(allBioData);
  return (
    <div>
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
            <div className="flex justify-center items-center">

              <div className="flex justify-center items-center ">
                <h1 className="mr-2">Search By Age </h1>
              <div className="relative">
                <input
                  type="text"
                  id="Search"
                  placeholder=" Search for  Age..."
                  className="w-full rounded-md bg-slate-200 border border-slate-900 py-2.5 pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
              </div>
            </div>

            <ul className="mt-4 space-y-2">
              <li>
                <div >
                  <label className="block text-base font-semibold text-gray-900 mb-1">
                    Select Devition
                  </label>

                  <select
                    name="HeadlineAct"
                    id="HeadlineAct"
                    className="mt-1 mb-5 w-full rounded-lg py-3 border-gray-300 text-gray-700 bg-slate-300 border sm:text-sm"
                  >

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


                  <fieldset className="flex justify-around">

                    <div>
                      <input
                        type="radio"
                        name="ColorOption"
                        value="ColorRed"
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
                        value="ColorBlue"
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
          <section className="bg-white text-white rounded-lg border-gray-900 border">
            <div
              className="mx-auto max-w-screen-xl px-4 py-4 sm:py-12 sm:px-6 lg:py-5 lg:px-8"
            >

              <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                {
                  allBioData.map(all => <div key={all._id}
                    className="block rounded-xl border border-teal-950 p-2 shadow-2xl shadow-orange-700 transition bg-emerald-900 hover:border-pink-500/10 hover:shadow-pink-500/10"
                  >
                    <img src={all.image} alt="" className="h-[250px] w-96 rounded-lg " />




                    <h4 className="mb-1 text-lg font-semibold text-center mt-2">BiodataId: {all.biodataId} </h4>
                    <p className="text-sm dark:text-gray-400 text-center">BiodataType: {all.biodataType}</p>
                    <p className="text-sm dark:text-gray-400 text-center">Age: {all.age}</p>
                    <p className="text-sm dark:text-gray-400 text-center">Permanent Division: {all.permanentDivision}</p>
                    <p className="text-sm dark:text-gray-400 text-center">Occupation: {all.occupation}</p>
                    <div className="flex w-full justify-center mt-3">
                      <Link to={`/detailsPage/${all._id}`}>  <button className="text-white font-bold py-2 px-3 rounded-md w-full bg bg-lime-700">View Profile</button></Link>
                    </div>
                  </div>)
                }

              </div>
            </div>
          </section>
        </div>
      </div>


    </div>
  );
};

export default BioDatas;