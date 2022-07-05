import CardUpdate from "./CardUpdate";

const Updates = () => {
  const packingUpdatesList = [
    {
      title: "Everest Base Camp Trek, Lobuche Peak and Island Peak Climb 2021",
      imgUrl:
        "https://www.himalayaguides.com/wp-content/uploads/everest-lobuche-island-peak-climb-2021-d-1024x1020.jpg?v=1618120019",
    },
    {
      title:
        "Himalaya five peaks Technical Climbing with Ama Dablam climbing expedition",
      imgUrl:
        "https://www.himalayaguides.com/wp-content/uploads/ama-dablam-expedition-2020-ac-960x750.jpg?v=1605182475",
    },
    {
      title: "THG Langtang Valley Trekking with Yala Peak Climb",
      imgUrl:
        "https://www.himalayaguides.com/wp-content/uploads/thg-langtang-trek-yala-climb-2019-2-1200x480.jpg?v=1573175123",
    },
    {
      title: "THG Langtang Valley Trekking with Yala Peak Climb",
      imgUrl:
        "https://www.himalayaguides.com/wp-content/uploads/thg-langtang-trek-yala-climb-2019-2-1200x480.jpg?v=1573175123",
    },
    {
      title: "THG Langtang Valley Trekking with Yala Peak Climb",
      imgUrl:
        "https://www.himalayaguides.com/wp-content/uploads/thg-langtang-trek-yala-climb-2019-2-1200x480.jpg?v=1573175123",
    },
    {
      title: "THG Langtang Valley Trekking with Yala Peak Climb",
      imgUrl:
        "https://www.himalayaguides.com/wp-content/uploads/thg-langtang-trek-yala-climb-2019-2-1200x480.jpg?v=1573175123",
    },
  ];

  return (
    <div className="updates py-10">
      <div className="mb-10 ml-20">
        <h2 className="text-current text-4xl font-bold">Updates</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 md:mx-20">
        {packingUpdatesList.map((item, index) => {
          return (
            <CardUpdate key={index} title={item.title} imgUrl={item.imgUrl} />
          );
        })}
      </div>
    </div>
  );
};

export default Updates;
