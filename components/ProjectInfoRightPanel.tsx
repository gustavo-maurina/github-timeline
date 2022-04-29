import { Check, X } from "react-feather";
import { Project } from "../models/Project";

export const ProjectInfoRightPanel = ({ project }: { project: Project }) => {
  return (
    <div>
      <p className="mt-2 flex gap-2">
        É fork?{" "}
        {project.fork ? (
          <Check className="text-green-400" />
        ) : (
          <X className="text-red-400" />
        )}
      </p>
    </div>
  );
};
