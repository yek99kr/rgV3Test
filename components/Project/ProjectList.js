import ProjectThumbnail from "./ProjectThumbnail";

// const classes = ["col-start-1", "col-start-3", "col-start-2"];

// const projects = [
//     {data: {title: 'Title 1'}},
//     {data: {title: 'Title 2'}},
//     {data: {title: 'Title 3'}},
//     {data: {title: 'Title 4'}},
//     {data: {title: 'Title 5'}},
//     {data: {title: 'Title 6'}},
//     {data: {title: 'Title 7'}}
// ];

// function ProjectThumbnail({project}) {

//     return <span>[{project.data.title}]</span>
// }

// function Grid({projects}) {

//     return (
//         <div className="relative grid grid-cols-3">
//             {projects.map((project, idx) => (
//                 <div
//                     className={classes[idx % classes.length]}
//                     key={project.data.title}
//                 >
//                     <ProjectThumbnail project={project}/>
//                 </div>
//             ))}
//         </div>
//     );
// }

// function App() {

//     return <Grid projects={projects}/>
// }

const ProjectList = ({ projects }) => {
  const classes = [
    "col-start-1",
    "col-start-5",
    "col-start-3",
    "col-start-2",
    "col-start-5",
    "col-start-1",
    "col-start-4",
    "col-start-3",
  ];

  // const classes = ["col-start-1", "col-start-3", "col-start-2"];

  // const y = ["top-[3vh]", "bottom-[3vh]", "bottom-[2vh]", "top-[3vh]"];

  return (
    <div className="relative grid place-items-center w-[100vw]  grid-cols-5 pt-[15vh] pb-[15vh] pl-[26vw] pr-[26vw] pointer-events-none">
      {projects.map((project, i) => (
        // <div
        //   className={`col-start-${
        //     i % 3 === 0 ? 1 : i % 3 === 1 ? 3 : 2
        //   } pointer-events-auto w-[24.5vw]`}
        //   key={project.data.title}
        // >
        <div
          className={`${
            classes[i % classes.length]
          } relative pointer-events-auto w-[24vw] `}
          key={project.data.title}
        >
          <ProjectThumbnail project={project} />
        </div>
      ))}

      {/* <h1 className="col-start-2 p-0 ">Our Works</h1> */}

      {/* <div className="col-start-1 p-0 pointer-events-auto w-[28vw] h-[28vw]">
        <ProjectThumbnail
          key="BMW"
          image="BMW"
          height="32vw"
          width="32vw"
          link="bmw1"
        />
      </div>
      <div className="col-start-3 p-0 pointer-events-auto w-[23vw] h-[23vw] ">
        <div className="relative  noselect">
          <ProjectThumbnail
            key="Scream"
            image="scream"
            width="21vw"
            height="21vw"
            link="bmw2"
          />
        </div>
      </div>
      <div className="col-start-2 p-0  pointer-events-auto ">
        <div className="relative  w-[33vw] h-[30vw] noselect top-[-80px]">
          <Image
            src={`/projectThumb/MHL.webp`}
            priority={true}
            loading="eager"
            layout="fill"
            objectFit="cover"
          ></Image>
        </div> */}
    </div>
  );
};

export default ProjectList;
