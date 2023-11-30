import useAuth from "../../../hooks/useAuth";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

// import PiChart from "./PiChart";
// import ApexCharts from "apexcharts";
// import { Cell, PieChart, Pie, Legend } from 'recharts';
// import React from "react";
// export const data = [
// 	["Task", "Hours per Day"],
// 	["Work", 11],
// 	["Eat", 2],
// 	["Commute", 2],
// 	["Watch TV", 2],
// 	["Sleep", 7],
//   ];
//   export const options = {
// 	title: "My Daily Activities",
// //   };
// import { Chart } from "react-google-charts";
// import { useEffect, useState } from "react";
// import Loading from "../../../pages/Loading";
import { PieChart, Pie, Cell, Legend } from 'recharts';
import Loading from "../../../pages/Loading";
import { Helmet } from "react-helmet-async";

const AdminDashboard = () => {

	const { user } = useAuth()
	const axiosPublic = useAxiosPublic()

	const { data: statistic = [], isLoading } = useQuery({
		queryKey: ['statistics'],
		queryFn: async () => {
			const res = await axiosPublic.get("/statistics")
			return res.data;
		}

	})
	console.log(statistic);
	const { data: result = [] } = useQuery({
		queryKey: ['statistic-result'],
		queryFn: async () => {
			const res = await axiosPublic.get("/statistic-result")
			return res.data
		}
	})
	console.log(result);
	// const [mongoDBData, setMongoDBData] = useState(result);
	// useEffect(() => {
	//     const series = mongoDBData.map((item) => item.totalRevenue);
	//     const labels = mongoDBData.map((item) => item.category);
	//     const quantities = mongoDBData.map((item) => item.quantity);
	//     const accounts = mongoDBData.map((item) => item.account);

	//     const options = {
	//       series: series,
	//       chart: {
	//         width: 380,
	//         type: 'pie',
	//       },
	//       labels: labels,
	//       responsive: [{
	//         breakpoint: 480,
	//         options: {
	//           chart: {
	//             width: 200
	//           },
	//           legend: {
	//             position: 'bottom'
	//           }
	//         }
	//       }],
	//       tooltip: {
	//         y: {
	//           formatter: function(value, { seriesIndex, dataPointIndex, w }) {
	//             return `${w.config.labels[dataPointIndex]} - Quantity: ${quantities[dataPointIndex]}, Account: ${accounts[dataPointIndex]}`;
	//           }
	//         }
	//       }
	//     };

	//     const chart = new ApexCharts(document.querySelector("#chart"), options);
	//     chart.render();

	//     // Clean up the chart when component unmounts
	//     return () => chart.destroy();
	//   }, [mongoDBData]);
	const data = [
		{ name: 'Male', value: parseInt(statistic?.userMale) },
		{ name: 'Female', value: parseInt(statistic?.userFemale) },
		{ name: 'Quantity', value: parseInt(statistic?.userInfo) },
		{ name: 'Premium Member', value: parseInt(statistic?.userMale) },
		{ name: 'TotalRevenue', value: parseInt(statistic?.revenue / 1000) },
	];
	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, }) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	if (isLoading) {
		return <Loading></Loading>
	}
	return (
		<div>
			<Helmet>
				<title>BrideAndGrooms | Admin Dashboard</title>
			</Helmet>
			<div>
				<h2 className="text-3xl font-bold text-orange-600">

					<span className="text-orange-900">Hi, Welcome </span>
					{
						user?.displayName ? user.displayName : "Back"
					}
				</h2>
				<SectionTitle subHeading={"Admin Dashboard"} heading={"All Statistics Here"}></SectionTitle>
				<div className="flex justify-center">
				
						<section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">

							<div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-3">

								<div className="flex md:p-4 shadow-2xl shadow-amber-800 border-8 bg-red-200  text-black rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
									<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
										<FaUsers className="md:text-3xl" />
									</div>
									<div className="flex flex-col justify-center align-middle">
										<p className="md:text-3xl font-semibold leadi">{statistic.userInfo}</p>
										<p className="capitalize text-xs md:text-lg">Total Biodata</p>
									</div>
								</div>
								<div className="flex md:p-4 shadow-2xl shadow-amber-800 border-8 bg-red-200  rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
									<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
										< FaMale className="md:text-3xl" />
									</div>
									<div className="flex flex-col justify-center align-middle">
										<p className="md:text-3xl font-semibold leadi">{statistic.userMale}</p>
										<p className="capitalize text-xs md:text-lg">Male Biodata</p>
									</div>
								</div>
								<div className="flex md:p-4 shadow-2xl shadow-amber-800 border-8 bg-red-200  rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
									<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
										<FaFemale className="md:text-3xl" />
									</div>
									<div className="flex flex-col justify-center align-middle">
										<p className="md:text-3xl font-semibold leadi">{statistic.userFemale}</p>
										<p className="capitalize text-xs md:text-lg">Female Biodata</p>
									</div>
								</div>
								<div className="flex md:p-4 shadow-2xl shadow-amber-800 border-8 bg-red-200   rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
									<div className="flex  justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
										<MdWorkspacePremium className="md:text-3xl" />
									</div>
									<div className="flex flex-col justify-center align-middle">
										<p className="md:text-3xl font-semibold leadi">{statistic.premiumMember}</p>
										<p className="capitalize text-xs md:text-lg">Premium Biodata</p>
									</div>
								</div>
								<div className="flex md:p-4 shadow-2xl shadow-amber-800 border-8 bg-red-200   rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
									<div className="flex  justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
										<GrDocumentPerformance />

									</div>
									<div className="flex flex-col justify-center align-middle">
										<p className="md:text-3xl md:font-semibold leadi">{statistic.revenue}</p>
										<p className="capitalize text-xs md:text-lg">Total revenue</p>
									</div>
								</div>
							</div>
						</section>
						<div className="w-1/2">
							<PieChart width={400} height={400}>
								<Pie
									data={data}
									cx="50%"
									cy="50%"
									labelLine={false}
									label={renderCustomizedLabel}
									outerRadius={80}
									fill="#8884d8"
									dataKey="value"
								>
									{data.map((entry, index) => (
										<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
									))}
								</Pie>
								<Legend></Legend>
							</PieChart>

						</div>
					</div>
				</div>
			</div>

	);
};

export default AdminDashboard;