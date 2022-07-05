import Card from "./Card";
import FeaturedTripsContent from "./FeaturedTripsContent";

const FeaturedTrips = () => {
  const packingList = [
    {
      title: "Peak Climbing",
      subtitle: "Himalaya five peaks technical climbing course",
      imgUrl:
        "https://www.himalayaguides.com/wp-content/uploads/ama-dablam-trailer.jpg",
    },
    {
      title: "Expedition",
      subtitle: "Sagarmatha - MT.Everest expedition",
      imgUrl:
        "https://www.himalayaguides.com/wp-content/uploads/mount-everest-trailer.jpg",
    },
    {
      title: "Ice Climbing",
      subtitle: "Ifmga exam waterfall ice climbing",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Eisklettern_kl_engstligenfall.jpg/800px-Eisklettern_kl_engstligenfall.jpg",
    },
  ];

  return (
    <div className="featuredTrips py-10">
      <FeaturedTripsContent />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {packingList.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedTrips;
