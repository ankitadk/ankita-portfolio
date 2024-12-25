function Card({ title, img, desc, link }) {
  return (
    <div className="border w-[240px] rounded-lg p-2 mb-4 mx-2 hover:bg-neutral-100">
      <a href={link} target="_blank">
        <img
          src={img}
          className="border rounded-lg h-[160px] w-[100%] object-contain w-full mb-2 "
          alt=""
        />
        <p className="font-semibold">{title}</p>
        <p className="text-sm text-neutral-600">{desc}</p>
      </a>
    </div>
  );
}

export default Card;
