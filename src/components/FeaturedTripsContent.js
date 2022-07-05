import { Fragment } from "react";

const featuredTripsContent = () => {
  return (
    <Fragment>
      <div className="featuredTrips-content mt-5 mr-6">
        <h2 className="text-current text-4xl font-bold">Featured Trips</h2>
        <ul className="w-48 text-sm font-medium text-gray-900 dark:bg-gray-700 dark:text-white my-4">
          <li className="w-full text-lg py-2 rounded-t-lg">
            Expeditons in Nepal
          </li>
          <li className="w-full text-lg py-2">Peak Climbing</li>
          <li className="w-full text-lg py-2">Ice Climbing</li>
          <li className="w-full text-lg py-2">Trekking in Nepal</li>
          <li className="w-full text-lg py-2">Rock Climbing</li>
        </ul>
        <button className="inline-flex items-center py-2 px-3 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Explore All
        </button>
      </div>
    </Fragment>
  );
};

export default featuredTripsContent;
