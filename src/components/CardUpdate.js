const Card = (props) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white card-size">
        <a href="/#">
          <img
            className="rounded-t-lg card-img"
            src={props.imgUrl}
            alt={props.title}
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {props.title}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
