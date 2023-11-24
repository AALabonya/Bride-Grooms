

const Premium = ({premium}) => {
    const{biodataId,biodataType,profileImage,permanentDivision,age,occupation} = premium ||{}
    return (
        <div className="flex mx-auto">
            <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">
	<img src={profileImage} alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square" />
	<div>
        <h2 className="text-xl font-semibold">BiodataId: {biodataId}</h2>
		<h2 className="text-xl font-semibold">BiodataType: {biodataType}</h2>
        <h3 className="text-xl font-semibold">Age :{age}</h3>
		<h4 className="block pb-2 text-xl dark:text-gray-400  font-semibold">PermanentDivision: {permanentDivision}</h4>
		<p className="text-xl font-semibold">Occupation :{occupation}</p>
	</div>
    <button className="bg-orange-600 text-white font-bold py-2 rounded-md">View Profile</button>
</div>
        </div>
    );
};

export default Premium;