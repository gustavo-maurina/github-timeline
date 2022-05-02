import { ProjectFetch } from "../models/ProjectFetch";

export async function fetchProjects(username: string): Promise<ProjectFetch> {
  let result = {
    isError: false,
    data: [],
  };
  try {
    const req = await fetch(`https://api.github.com/users/${username}/repos`);
    if (req.status === 404) return { isError: true, data: [] };
    result.data = await req.json();
  } catch (err) {
    result.isError = true;
  }
  return result;
}
