const CardUpdate = (props) => {
  return (
    <div className="flex justify-center">
      <div className="w-full rounded-lg shadow-lg bg-white card-size mx-5 md:mx-0">
        <a href="/#">
          <img
            className="rounded-t-lg card-img"
            src={props.imgUrl}
            alt={props.title}
          />
        </a>
        <div className="p-4">
          <h5 className="text-gray-900 text-sm xl:text-xl font-medium">
            {props.title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CardUpdate;
