import { Link } from 'react-router-dom';

const CategoryItem = ({ data }) => {
  const { _id, image, subcategory } = data;
  return (
    <div>
      <Link
        to={`/data/${_id}`}
        className=" pic w-100% relative content-center "
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="relative">
          <img
            className="w-[200px] h-[200px] rounded-2xl overflow-clip content-center"
            src={image}
            alt=""
          />
          <h3 className="font-bold">{subcategory}</h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
