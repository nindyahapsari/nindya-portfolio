import Image from "next/image";

type ProjectCardProps = {
  srcImg: string;
  altImg: string;
  title: string;
  demoLink: string;
};

export default function ProjectCard({
  srcImg,
  altImg,
  title,
  demoLink,
}: ProjectCardProps) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
      <figure className="max-w-md border h-72">
        <Image
          src={srcImg}
          alt={altImg}
          className="object-contain scale-110 m-8"
          width={300}
          height={300}
        />
      </figure>

      <div className="card-body flex-row justify-between items-center">
        <h2 className="text-lg">{title}</h2>
        <a href={demoLink} className="btn btn-outline">
          Demo
        </a>
      </div>
    </div>
  );
}
