import User from "../assets/Photo.jpg";
// import User from "./assets/Photo2.png";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import Exp1 from "../assets/anantlogo.jpg";
import Exp2 from "../assets/infiprelogo.png";
import Exp3 from "../assets/sapnalogo.png";
import Exp4 from "../assets/grassdoorlogo.jpg";
import Exp5 from "../assets/coglogo.png";
// import { ConfettiButton } from "@/components/magicui/confetti";
import { ConfettiButton } from "@/components/ui/confetti";
import BlurFade from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import Projects from "./Projects";

function App() {
  return (
    <>
      <div>
        {/* AnimatedGradientText */}
        {/* <div className="z-10 flex items-m-0">
        <AnimatedGradientText>
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Introducing Magic UI
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </div> */}
        {/* AnimatedGradientText */}

        <BlurFade delay={0.25} inView>
          <section className="mt-12 max-w-3xl mx-auto">
            <div className="flex gap-14 items-center">
              <div className="">
                <h1 className="text-3xl font-bold">Hey, I am Ankita 👋</h1>
                <p className="text-lg mt-2">
                  Software Engineer. I love building web apps.
                </p>
                {/* <div className="flex mt-3 gap-3">
              <a className="text-xl" href="">
                <FaTwitter />
              </a>
              <a className="text-xl" href="">
                <FaLinkedin />
              </a>
            </div> */}
              </div>
              <img
                className="w-40 h-40 rounded-full border border-slate-400"
                src={User}
                alt=""
              />
            </div>
          </section>

          <section className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">About Me</h1>
            <p className=" text-neutral-900">
              Experienced Web Developer with over 7 years of expertise in
              building dynamic web applications using PHP, React and Laravel.
              Skilled in &nbsp;
              <span className="underline text-black">
                full-stack development, REST APIs, Microservices, MySQL, and
                integrating third-party services
              </span>
              . Successful at maintaining customer satisfaction through
              effective customer support.
            </p>
          </section>

          <section className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">Work Experience</h1>
            <p className=" text-neutral-900">
              Hands-on experience in full-stack development, REST API design,
              and building scalable software solutions across diverse domains,
              including pharma, e-learning, e-commerce, and retail.
            </p>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={Exp5}
                    className="h-12 w-12 rounded-full object-contain"
                    alt=""
                  />
                  <div className="">
                    <h2 className="text-sm">
                      Cogncise Business Services Pvt. Ltd., Margao-Goa
                    </h2>
                    <p className="text-xs">Web Developer</p>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm font-light">
                  Jan 2024 - Apr 2024
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={Exp4}
                    className="h-12 w-12 rounded-full object-contain"
                    alt=""
                  />
                  <div className="">
                    <h2 className="text-sm">
                      Grassdoor Logistics Pvt. Ltd., Verna-Goa
                    </h2>
                    <p className="text-xs">Senior Software Engineer</p>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm font-light">
                  Jan 2022 - Oct 2023
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={Exp3}
                    className="h-12 w-12 rounded-full object-contain"
                    alt=""
                  />
                  <div className="">
                    <h2 className="text-sm">sapnagroup, Panaji-Goa</h2>
                    <p className="text-xs">Web Programmer</p>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm font-light">
                  June 2021 - Dec 2022
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={Exp2}
                    className="h-12 w-12 rounded-full object-contain"
                    alt=""
                  />
                  <div className="">
                    <h2 className="text-sm">
                      Infipre IT Services(OPC) Pvt. Ltd., Sanquelim-Goa
                    </h2>
                    <p className="text-xs">Senior Software Developer</p>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm font-light">
                  Sept 2019 - May 2021
                </p>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <img
                    src={Exp1}
                    className="h-12 w-12 rounded-full object-contain"
                    alt=""
                  />
                  <div className="">
                    <h2 className="text-sm">
                      Anant Infomedia Pvt. Ltd., Panaji-Goa
                    </h2>
                    <p className="text-xs">Software Developer</p>
                  </div>
                </div>
                <p className="text-neutral-500 text-sm font-light">
                  Feb 2016 - Jan 2019
                </p>
              </div>
            </div>
          </section>

          <section className="mt-12 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">My Projects</h1>
            <Projects />
          </section>

          <section className="mt-12 mb-36 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold">Get in Touch</h1>
            <p className=" text-neutral-900">
              I'm always excited to connect! Whether you have a project in mind,
              a question, or just want to say hello, feel free to reach out.
              Let’s create something great together!
            </p>
            <div className="relative">
              <a
                href="https://www.linkedin.com/in/ankita-kalangutkar-675a22184/"
                target="_blank"
              >
                <ConfettiButton className="mt-3 rounded-full px-5 font-light">
                  Text me on Linkedin
                </ConfettiButton>
              </a>
            </div>
          </section>
        </BlurFade>
      </div>
    </>
  );
}

export default App;
