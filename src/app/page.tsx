import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="order-2 text-center xl:text-left xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1">
              Hi, I&apos;m <br />
              <span className="text-accent">Long Nguyen</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              a Software Engineer creating seamless digital experiences.
              Proficient in programming languages and modern technologies, I
              deliver innovative software solutions.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 mb-8 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
