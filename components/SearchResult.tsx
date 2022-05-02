import { memo } from "react";
import { Project } from "../models/Project";
import { ProjectInfo } from "./ProjectInfo";

type Props = {
  timeline: Project[] | undefined;
};

const SearchResultComponent = ({ timeline }: Props) => {
  function createTimeline() {
    let lastYear: number;

    return timeline?.map((project, idx) => {
      const creationYear = new Date(project.created_at).getFullYear();
      const isNewYear = creationYear !== lastYear;
      lastYear = creationYear;
      return (
        <>
          {isNewYear && (
            <p className="text-4xl text-center font-thin text-slate-400 mb-4">
              {creationYear}
            </p>
          )}
          <ProjectInfo
            project={project}
            key={idx}
            lastProject={idx === timeline.length - 1}
          />
        </>
      );
    });
  }

  if (timeline !== undefined && !timeline)
    return <p>Não foi encontrado nenhum resultado</p>;

  return <div className="flex flex-col gap-2">{createTimeline()}</div>;
};

export const SearchResult = memo(SearchResultComponent);
