
const BioDatas = () => {
    return (
        <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
                <div className="flex space-x-3 items-center">
                    <img alt="" src="https://source.unsplash.com/100x100/?portrait" className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
                    <div className="flex flex-col space-y-1">
                        <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">Leroy Jenkins</a>
                    </div>
                </div>
                <div>
                    <img src="https://i.ibb.co/kJHCVgV/banner5.jpg " alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
                    <h2 className="mb-1 text-xl font-semibold">BiodataId: </h2>
                    <p className="text-sm dark:text-gray-400">BiodataType: </p>
                    <p className="text-sm dark:text-gray-400">Age :</p>
                    <p className="text-sm dark:text-gray-400">PermanentDivision: </p>
                    <p className="text-sm dark:text-gray-400">Occupation :</p>
                </div>
                <div className="flex w-full justify-center">
                    <button className="text-white font-bold py-2 rounded-md w-full bg bg-lime-700">View Profile</button>
                </div>
            </div>
        </div>

    );
};

export default BioDatas;