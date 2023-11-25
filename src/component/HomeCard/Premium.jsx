/* eslint-disable react/prop-types */


const Premium = ({premium}) => {
    const{biodataId,biodataType,profileImage,permanentDivision,age,occupation} = premium ||{}
    return (
        <div className="flex flex-col max-w-lg p-4 space-y-4 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100 bg-white">
        <div className="flex space-x-4">
            <img alt="" src={profileImage} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
            <div className="flex flex-col space-y-1">
                <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                <span className="text-xs dark:text-gray-400">4 hours ago</span>
            </div>
        </div>
        <div>
            <img src={profileImage} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
            <h2 className="mb-1 text-xl font-semibold">BiodataId: {biodataId}</h2>
            <p className="text-sm dark:text-gray-400">BiodataType: {biodataType}</p>
            <p className="text-sm dark:text-gray-400">Age :{age}</p>
            <p className="text-sm dark:text-gray-400">PermanentDivision: {permanentDivision}</p>
            <p className="text-sm dark:text-gray-400">Occupation :{occupation}</p>
        </div>
        <div className="flex w-full justify-center">
        <button className="text-white font-bold py-2 rounded-md w-full bg bg-lime-700">View Profile</button>
            </div>
        </div>
    );
};

export default Premium;


