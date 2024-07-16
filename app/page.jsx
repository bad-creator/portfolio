import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container m-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="mb-9">App/Web Developer</span>
            <h1 className="h1 lg:text-6xl">
              {/* Hallo, ich bin <br /> */}
              <span className="text-accent">Serghei PASCAL</span>
            </h1>
            <p className="max-w-[500px] mb-9 mt-3 text-white/80">
              Motivierter Einsteiger in die Welt der App-/Web-Entwicklung,
              bereit, durch praktische Erfahrung zu wachsen und sich
              weiterzuentwickeln.
            </p>
            {/* btn & socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/doc/BewerbungsmappePS.pdf"
                download="Pascal_Bewerbungsmappe.pdf"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>CV Herunteladen</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
