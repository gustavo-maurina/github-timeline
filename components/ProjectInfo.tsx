import { ArrowDown } from "react-feather";
import { Project } from "../models/Project";
import { ProjectInfoLeftPanel } from "./ProjectInfoLeftPanel";
import { ProjectInfoRightPanel } from "./ProjectInfoRightPanel";

type ProjectInfoProps = { project: Project; lastProject: boolean };

export const ProjectInfo = ({ project, lastProject }: ProjectInfoProps) => {
  console.log(project);

  return (
    <>
      <div className="text-slate-300 outline p-4 outline-1 outline-zinc-600 bg-zinc-900 rounded sm:w-[600px] flex justify-between">
        <ProjectInfoLeftPanel project={project} />
        <ProjectInfoRightPanel project={project} />
      </div>
      {!lastProject && <ArrowDown size={72} className="m-auto text-teal-500" />}
    </>
  );
};
