import { Calendar, RefreshCw } from "react-feather";
import { formatDate } from "../helpers/formatDate";
import { Project } from "../models/Project";

export const ProjectInfoLeftPanel = ({ project }: { project: Project }) => {
  return (
    <div>
      <p className="text-2xl mb-3 font-semibold text-teal-300">
        {project.name}
      </p>
      <p className="flex items-center">
        <Calendar size={16} />
        <span className=" ml-1 font-semibold">Criado em</span>:{" "}
        {formatDate(project.created_at)}
      </p>
      <p className="flex items-center">
        <RefreshCw size={16} />
        <span className="ml-1 font-semibold">Atualizado em:</span>{" "}
        {formatDate(project.updated_at)}
      </p>
      <div className="mt-5 w-full">
        <a
          className="outline outline-1 p-1 px-2 outline-teal-500 text-teal-500 rounded-sm"
          href={`https://github.com/${project.full_name}`}
          target={"_blank"}
          rel={"noreferrer"}
        >
          Acessar projeto
        </a>
      </div>
    </div>
  );
};
