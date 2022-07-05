const Card = (props) => {
  return (
    <div className="flex justify-center">
      <div className="rounded-lg shadow-lg bg-white card mb-4 mx-5">
        <a href="/#">
          <img
            className="rounded-t-lg card-img"
            src={props.imgUrl}
            alt={props.title}
          />
        </a>
        <div className="p-3">
          <h5 className="text-gray-900 text-xl font-medium">
            {props.title}
          </h5>
          <p className="text-gray-700 text-base">{props.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
