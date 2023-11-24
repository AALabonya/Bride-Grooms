import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
    return (
        <div className="">
        <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-8xl mx-auto overflow-hidden rounded">
                <div className="w-full">
                    <img src="https://i.ibb.co/2Sr7Xt0/digital-technology-polygon-connection-background-1035-17976.webp" alt="" className="relative w-full h-72 sm:h-96 dark:bg-gray-500" />
                    <h1 className="absolute font-bold text-9xl top-64 text-center flex justify-center ml-[500px]">Contact Us</h1>
                </div>
                <div className="top-[55%] absolute">
                    <div className="flex mx-auto justify-center ml-60">
                        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-5 ">
                            <div className="w-72 h-52 border bg-white  animate-pulse ">

                                <h1 className="text-center mt-3">OUR OFFICE</h1>
                                <h1 className="text-center">Most Trusted and premium Matrimony Service in the World.</h1>
                                <div className="flex justify-center items-center">
                                   <MdOutlineEmail />
                                   <h1 className="ml-2">brideandgroom@gmail.com</h1>
                                </div>
                                <div className="flex justify-center items-center">
                                <CiLocationOn className="w-16"/>
                                <h1 className="">Dhaka,Gulshan, Bangladesh.</h1>
                                </div>

                            </div>
                            <div className="w-72 h-52 border bg-white  animate-pulse">

                                <div className="flex justify-center"> <img src="https://rn53themes.net/themes/matrimo/images/icon/trust.png" alt="" className="w-20 h-20 mt-5" /></div>

                                <h1 className="text-center">Most trusted</h1>
                                <h1 className="text-center">Most Trusted and premium Matrimony Service in the World.</h1>

                            </div>
                            <div className="w-72 h-52 border bg-white animate-pulse">

                                <div className="flex justify-center"> <img src="https://rn53themes.net/themes/matrimo/images/icon/telephone.png" alt="" className="w-[80px] h-20 mt-5" /></div>

                                <h1 className="text-center">WHATSAPP SUPPORT</h1>
                                <h1 className="text-center">Most Trusted and premium Matrimony Service in the World.</h1>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="grid mt-10 max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
	<div className="flex flex-col justify-between">
		<div className="space-y-2 ml-8">
			<h2 className="text-4xl font-bold leadi lg:text-5xl">Now! <br/>
            <b>Contact to us <br/></b>
            `Easy and fast`</h2>
			
		</div>
		<img src="https://rn53themes.net/themes/matrimo/images/login-couple.png" alt="" className="p-6 h-52 md:h-96" />
	</div>
	<form  className="space-y-6">
         <div className="mb-2">
         <h5 className="text-center text-lg font-bold">Lets Talk</h5>
         <h1 className="text-center text-xl font-bold">Send your enquiry now</h1>
         </div>

		<div>
			<label className="text-sm">Full name</label>
			<input id="name" type="text" placeholder="" className="w-full bg-slate-100 border p-3 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label className="text-sm">Email</label>
			<input id="email" type="email" className="w-full p-3 border bg-slate-100 rounded dark:bg-gray-800" />
		</div>
		<div>
			<label className="text-sm">Message</label>
			<textarea id="message" rows="3" className="w-full border p-3 bg-slate-100 rounded dark:bg-gray-800"></textarea>
		</div>
		<button type="submit" className="w-full bg-slate-700 text-white p-3 text-sm font-bold tracki uppercase rounded dark:bg-violet-400 dark:text-gray-900">Send Message</button>
	</form>
</div>
    </div>
    );
};

export default Contact;