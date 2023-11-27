import useAuth from "../../../hooks/useAuth";
import { FaFemale } from "react-icons/fa";
import { FaMale } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { MdWorkspacePremium } from "react-icons/md";
import { GrDocumentPerformance } from "react-icons/gr";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';
const AdminDashboard = () => {

    const {user} =useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: statistic= [] } = useQuery({
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
	//custom pie chart 
	const RADIAN = Math.PI / 180;
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		const x = cx + radius * Math.cos(-midAngle * RADIAN);
		const y = cy + radius * Math.sin(-midAngle * RADIAN);

		return (
			<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		);
	};

	const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
	const pieChartData = result.map(data => {
		return {
			name: data.category,
			quantity: data.quantity,
			account: data.account,
			totalRevenue: data.totalRevenue,
			value: data.totalRevenue // assuming 'value' represents the dataKey for the Pie component
		};
	});
    return (
        <div>
           <div>
			<h2 className="text-3xl font-bold text-orange-600">

				<span className="text-orange-900">Hi, Welcome </span>
				{
					user?.displayName ? user.displayName : "Back"
				}
			</h2>
                 <SectionTitle subHeading={"Admin Dashboard"} heading={"All Statistics Here"}></SectionTitle>
			<section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
                
				<div className="container grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 xl:grid-cols-4">
					
					<div className="flex md:p-4 shadow-2xl shadow-amber-600  bg-teal-900 text-white rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
						<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
							<FaUsers className="md:text-3xl" />
						</div>
						<div className="flex flex-col justify-center align-middle">
							<p className="md:text-3xl font-semibold leadi">{statistic.userInfo}</p>
							<p className="capitalize text-xs md:text-lg">Total Biodata</p>
						</div>
					</div>
					<div className="flex md:p-4 shadow-2xl shadow-amber-600  bg-teal-900 text-white rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
						<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
							< FaMale className="md:text-3xl" />
						</div>
						<div className="flex flex-col justify-center align-middle">
							<p className="md:text-3xl font-semibold leadi">{statistic.userMale}</p>
							<p className="capitalize text-xs md:text-lg">Male Biodata</p>
						</div>
					</div>
					<div className="flex md:p-4 shadow-2xl shadow-amber-600 bg-teal-900 text-white rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
						<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
							<FaFemale className="md:text-3xl" />
						</div>
						<div className="flex flex-col justify-center align-middle">
							<p className="md:text-3xl font-semibold leadi">{statistic.userFemale}</p>
							<p className="capitalize text-xs md:text-lg">Female Biodata</p>
						</div>
					</div>
                    <div className="flex md:p-4 shadow-2xl shadow-amber-600 bg-teal-900 text-white  rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
						<div className="flex  justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                        <MdWorkspacePremium className="md:text-3xl"/>
						</div>
						<div className="flex flex-col justify-center align-middle">
							<p className="md:text-3xl font-semibold leadi">{statistic.premiumMember}</p>
							<p className="capitalize text-xs md:text-lg">Premium Biodata</p>
						</div>
					</div>
                    <div className="flex md:p-4 shadow-2xl shadow-amber-600  bg-teal-900 text-white  rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
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
			
		</div>
		<div className="w-1/2">
					<PieChart width={400} height={400}>
						<Pie
							data={pieChartData}
							cx="50%"
							cy="50%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={80}
							fill="#8884d8"
							dataKey="value"
						>
							{pieChartData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend></Legend>
					</PieChart>
				</div>
        </div>
    );
};

export default AdminDashboard;