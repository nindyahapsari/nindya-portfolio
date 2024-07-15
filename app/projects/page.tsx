import ProjectList from "../../projects.json";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="mobile:h-auto py-12 mx-12 grid grid-cols-4 col-span-4 desktop:h-screen desktop:grid-cols-12 desktop:col-start-5 desktop:col-end-8">
      <div className="my-10 col-span-4 desktop:mx-auto desktop:gap-y-8 desktop:col-span-12">
        <div className="my-8">
          <p className="desktop:text-xl">
            Below are some of small projects that I have been working on. I had
            fun working on these project and had learned new tools
          </p>
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          {ProjectList.map(({ id, srcImg, altImg, title, demoLink }) => (
            <ProjectCard
              key={id}
              srcImg={srcImg}
              altImg={altImg}
              title={title}
              demoLink={demoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
