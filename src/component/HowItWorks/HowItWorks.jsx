/* eslint-disable react/prop-types */
import { Parallax } from "react-parallax";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const HowItWorks = () => {

	return (
		<div>

			<SectionTitle subHeading="MOMENTS" heading="How it works"></SectionTitle>

			<div>
				<Parallax
					blur={{ min: -15, max: 15 }}
					bgImage="https://i.ibb.co/g6mTBwg/8369135.jpg"
					bgImageAlt="the dog"
					strength={-200}
				>
					<section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
						<div className="max-w-2xl mx-auto space-y-12">
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row divide-x-2 dark:divide-gray-950">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/rings.png" alt="" className="h-32 dark:bg-gray-500 aspect-video mr-2" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
									<h3 className="text-3xl font-bold">Register</h3>
									<span className="text-xs uppercase dark:text-gray-400">TIMING: 7:00 PM </span>

									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start">Action</button>
								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse ">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/wedding-2.png" alt="" className="h-32 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
									<h3 className="text-3xl font-bold">Find your Match</h3>
									<span className="text-xs uppercase dark:text-gray-400">TIMING: 7:00 PM </span>
									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start">Action</button>
								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row divide-x-2 dark:divide-gray-950">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/love-birds.png" alt="" className="h-32 dark:bg-gray-500 aspect-video mr-2" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
									<h3 className="text-3xl font-bold">Send Interest</h3>
									<span className="text-xs uppercase dark:text-gray-400">TIMING: 7:00 PM </span>

									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start">Action</button>
								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/network.png" alt="" className="h-32 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 ">
									<h3 className="text-3xl font-bold">Get Profile Information</h3>
									<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start">Action</button>
								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row divide-x-2 dark:divide-gray-950">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/chat.png" alt="" className="h-32 dark:bg-gray-500 aspect-video  mr-2" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

									<h3 className="text-3xl font-bold">Start Meetups</h3>
									<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start">Action</button>
								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/wedding-couple.png" alt="" className="h-32 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
									<h3 className="text-3xl font-bold">Getting Marriage</h3>
									<span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>

									<p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
									<button type="button" className="self-start">Action</button>
								</div>
							</div>
						</div>
					</section>
					</Parallax>
			</div>
	
		</div >
	);
};

export default HowItWorks;