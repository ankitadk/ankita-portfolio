import User from "./assets/Photo.jpg";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import Exp1 from "./assets/splunk.jpg";
import Exp2 from "./assets/buildSpace.jpg";
import Exp3 from "./assets/m9.jpg";
// import { ConfettiButton } from "@/components/magicui/confetti";
import { ConfettiButton } from "@/components/ui/confetti";
import BlurFade from "@/components/ui/blur-fade";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";

function App() {
  return (
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
            <img className="w-40 h-40 rounded-full" src={User} alt="" />
          </div>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">About Me</h1>
          <p className=" text-neutral-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            voluptatem corporis asperiores nemo in vitae magnam eos atque nam
            doloremque,
            <span className="underline text-black">
              accusantium a fugit eaque ipsam vero, dolorem quaerat accusamus
              expedita!
            </span>
            Totam quas ad quasi eveniet ut! Nihil molestias ipsum, commodi dolor
            cum est earum repellat voluptates, obcaecati, laudantium hic.
          </p>
        </section>

        <section className="mt-12 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Work Experience</h1>
          <p className=" text-neutral-900">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            voluptatem corporis asperi
          </p>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img src={Exp1} className="h-12 rounded-full" alt="" />
                <div className="">
                  <h2 className="text-sm">Splunk Technologies</h2>
                  <p className="text-xs">Senior Software Developer</p>
                </div>
              </div>
              <p className="text-neutral-500 text-sm font-light">
                May 2021 - Dec 20201
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img src={Exp2} className="h-12 w-12 rounded-full" alt="" />
                <div className="">
                  <h2 className="text-sm">Build Space</h2>
                  <p className="text-xs">Software Developer</p>
                </div>
              </div>
              <p className="text-neutral-500 text-sm font-light">
                May 2021 - Dec 20201
              </p>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <div className="flex gap-3 items-center">
                <img src={Exp3} className="h-12 rounded-full" alt="" />
                <div className="">
                  <h2 className="text-sm">M Hacks 9</h2>
                  <p className="text-xs">Frontend Developer</p>
                </div>
              </div>
              <p className="text-neutral-500 text-sm font-light">
                May 2021 - Dec 20201
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 mb-36 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold">Get in Touch</h1>
          <p className=" text-neutral-900">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium cumque sapiente quam, laboriosam nemo necessitatibus
            dolores.
          </p>
          <div className="relative">
            <ConfettiButton className="mt-3 rounded-full px-5 font-light">
              Text me on Twitter
            </ConfettiButton>
          </div>
        </section>
      </BlurFade>
    </div>
  );
}

export default App;
