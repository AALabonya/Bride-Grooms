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
									<p className="my-6 dark:text-gray-400">To register, visit the platform&apos;s website or app, fill in required fields such as email, username, and password, then follow the verification process, enabling access to the platform&apos;s features and services.</p>
								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse ">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/wedding-2.png" alt="" className="h-32 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
									<h3 className="text-3xl font-bold">Find your Match</h3>

									<p className="my-6 dark:text-gray-400">
										To find your match, utilize search filters or algorithms on dating platforms, specifying preferences like age, location, interests, and values to narrow down compatible profiles. Review suggested matches based on these criteria, increasing the likelihood of finding someone who aligns with your preferences</p>

								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row divide-x-2 dark:divide-gray-950">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/love-birds.png" alt="" className="h-32 dark:bg-gray-500 aspect-video mr-2" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
									<h3 className="text-3xl font-bold">Send Interest</h3>


									<p className="my-6 dark:text-gray-400">To express interest, typically on social platforms or dating sites, click or tap on the designated button or icon associated with the user&apos;s profile. This action notifies the user of your interest in connecting or engaging further.

									</p>

								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/network.png" alt="" className="h-32 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900 ">
									<h3 className="text-3xl font-bold">Get Profile Information</h3>
									<p className="my-6 dark:text-gray-400">To gather profile information, access a user&apos;s account settings or profile page, where details like name, contact information, preferences, and additional data might be stored. Alternatively, request users to fill out forms or questionnaires to acquire their relevant profile information.</p>

								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row divide-x-2 dark:divide-gray-950">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/chat.png" alt="" className="h-32 dark:bg-gray-500 aspect-video  mr-2" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">

									<h3 className="text-3xl font-bold">Start Meetups</h3>
									<p className="my-6 dark:text-gray-400">To start meetups, define your purpose, choose a location, set a date, and invite participants with clear communication. Create engaging activities or discussions to encourage interaction and foster a welcoming environment for everyone attending.</p>

								</div>
							</div>
							<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
								<img src="https://rn53themes.net/themes/matrimo/images/icon/wedding-couple.png" alt="" className="h-32 dark:bg-gray-500 aspect-video" />
								<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
									<h3 className="text-3xl font-bold">Getting Marriage</h3>
									<p className="my-6 dark:text-gray-400">Marriage is a legal and emotional union between two individuals, symbolizing commitment, partnership, and shared life experiences. It involves legal procedures and often a ceremony to celebrate the couple&apos;s commitment before family and friends.</p>

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