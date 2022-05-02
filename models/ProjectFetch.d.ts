import { Project } from "./Project";

export interface ProjectFetch {
  isError: boolean;
  data: Project[];
}
