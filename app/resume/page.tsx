export default function Resume() {
  return (
    <div className="py-20 mx-12 grid grid-cols-4 grid-flow-row auto-rows-auto desktop:grid-cols-12">
      <h2 className="text-3xl mb-10 col-span-4 desktop:col-start-5 desktop:col-end-8">
        Nindya&apos;s resume
      </h2>
      <div className="mb-10 grid-cols-4 col-span-4 desktop:col-start-5 desktop:col-end-10">
        <div className="text-2xl mb-2">Summary</div>
        <p className="desktop:text-xl">
          I&apos;m a dedicated frontend developer with four years of experience
          creating responsive and user-friendly web applications. I work mostly
          with JavaScript, TypeScript, HTML, CSS, and frontend frameworks like
          React. Currently in a new adventure of learning Go.
        </p>
        <p className="desktop:text-xl">
          I originally come from the sunny tropical country called Indonesia.
          Currently, I live in Berlin and been living in Germany for the past 10
          years.
        </p>
      </div>
      <div className="mb-10 grid-cols-4 col-span-4 desktop:col-start-5 desktop:col-end-10">
        <div className="text-2xl mb-2">Skills</div>
        <div className="font-bold my-5">Frontend Development</div>
        <ul className="grid-cols-4">
          <li className="my-2 desktop:text-xl">
            Develop responsive and user-friendly frontend features using HTML,
            CSS, JavaScript, and React
          </li>
          <li className="desktop:text-xl">
            Ensure high performance and optimal user experience through
            meticulous coding practices
          </li>
        </ul>
        <div className="font-bold my-5">Technical leadership</div>
        <ul>
          <li className="my-2 desktop:text-xl">
            Collaborate with project managers to prioritize and plan features
            effectively
          </li>
          <li className="my-2 desktop:text-xl">
            Engage in pair programming and conduct thorough code reviews to
            maintain high-quality standards
          </li>
          <li className="desktop:text-xl">
            Communicate and document technical processes clearly, fostering
            strong relationships with team members
          </li>
        </ul>
      </div>
      <div className="mb-10 grid-cols-4 col-span-4 desktop:col-start-5 desktop:col-end-10">
        <div className="mb-10">
          <div className="text-2xl mb-8">Experience</div>
          <div className="my-3">
            <div className="font-bold">Ospin GmbH </div>
            <div className="text-sm my-2">Fullstack developer</div>
            <div className="text-sm my-2">03/2022 - 12/2023</div>
            <ul>
              <li className="mb-1 desktop:text-xl">
                Plan and build frontend features using React JS Framework and
                AWS tools
              </li>
              <li className="mb-1 desktop:text-xl">
                Ensured reliable frontend performance through testing with Jest
                and Cypress
              </li>
              <li className="mb-1 desktop:text-xl">
                Managed backend API operations, enhancing data flow efficiency
                with AWS API Gateway and Lambda
              </li>
              <li className="desktop:text-xl">
                Engaged in pair programming in the team to improve code quality
                and swiftly resolve bugs for an optimal user experience
              </li>
            </ul>
          </div>
          <div className="my-3">
            <div className="font-bold">WhereGroup GmbH </div>
            <div className="text-sm my-2">Frontend developer</div>
            <div className="text-sm my-2">08/2020 - 02/2022</div>
            <ul>
              <li className="mb-1 desktop:text-xl">
                Transformed GIS product UI, integrating map customization
                options for a better user experience
              </li>
              <li className="mb-1 desktop:text-xl">
                Plan and developed a suite of customizable map features
              </li>
              <li className="mb-1 desktop:text-xl">
                Collaborated across teams to streamline communication and
                expedite project completion
              </li>
            </ul>
          </div>
          <div className="my-3">
            <div className="font-bold">Sanofeld GmbH former UXTAG GmbH</div>
            <div className="text-sm my-2">Frontend developer</div>
            <div className="text-sm my-2">06/2019 - 07/2020</div>
            <ul>
              <li className="mb-1 desktop:text-xl">
                Boosted user engagement by developing a responsive website to
                display pharmaceutical products
              </li>
              <li className="mb-1 desktop:text-xl">
                Built static websites for pharmaceutical products using HTML,
                CSS, and JavaScript
              </li>
              <li className="mb-1 desktop:text-xl">
                Enhanced website performance through effective cross-functional
                collaboration
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
