import Card from "./Card";
import img1 from "../assets/projects/userlist.png";
import img2 from "../assets/projects/reactusestatehook.png";
import img3 from "../assets/projects/reactrouterdom.png";
import img4 from "../assets/projects/react-product-store.png";
import img5 from "../assets/projects/react-forms.png";
import img6 from "../assets/projects/react-context-api.png";

let projects = [
  {
    title: "User List - [using Props & Conditional Rendering]",
    img: img1,
    link: "https://react-user-list-mu.vercel.app/",
    desc: "This project is implemented to demonstrate the use of React props and the concept of Conditional Rendering",
  },
  {
    title: "Simple React Apps - [using useState hook]",
    img: img2,
    link: "https://react-usestate-hook.vercel.app/",
    desc: "This project is implemented to demonstrate the use of React useState hook",
  },
  {
    title: "Instagram User Profile - [using react-router-dom]",
    img: img3,
    link: "https://react-router-dom-tawny.vercel.app/",
    desc: "react-router-dom | Routes | Route | BrowserRouter | Link | useParams",
  },
  {
    title: "Product Store - [using useEffect hook]",
    img: img4,
    link: "https://react-product-store-two.vercel.app/",
    desc: "useEffect hook | axios | APIs | Product Store",
  },
  {
    title: "Create User List - [using React Forms]",
    img: img5,
    link: "https://react-forms-woad-nine.vercel.app/",
    desc: "React Forms | useRef | useState | react hook form | useForm | register | handleSubmit | reset",
  },
  {
    title: "React Context API - [using useContext hook]",
    img: img6,
    link: "https://react-context-api-vert.vercel.app/",
    desc: "Demonstrate the use of React Context API | Display user profile onclick of Login button",
  },
  //   {
  //     title: "Food Ordering App",
  //     img: img7,
  //     link: "https://react-context-api-vert.vercel.app/",
  //     desc: "",
  //   },
];

const Reactjs = () => {
  return (
    <div className="my-5">
      <section>
        <h4 className="text-lg font-semibold">ReactJS Projects</h4>
        <div className="flex flex-wrap mt-3 justify-cente">
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

export default Reactjs;
