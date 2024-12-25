import Card from "./Card";
import img1 from "../assets/projects/netflix-css.png";

let projects = [
  {
    title: "Netflix Clone - [using CSS]",
    img: img1,
    link: "https://netflix-clone-css-tan.vercel.app/",
    desc: "This project is implemented to demonstrate the use of CSS properties",
  },
];

const Css = () => {
  return (
    <div className="my-5">
      <section>
        <h4 className="text-lg font-semibold">CSS Projects</h4>
        <div className="flex gap-10 mt-3 justify-betwee">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              img={project.img}
              link={project.link}
              desc={project.desc}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Css;
