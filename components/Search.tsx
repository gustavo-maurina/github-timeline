import { FormEvent, useRef } from "react";
import { ArrowRight } from "react-feather";
import { ProjectFetch } from "../models/ProjectFetch";
import { fetchProjects } from "../services/fetchProjects";

type SearchProps = {
  handleTimelineFetch: (fetchResult: ProjectFetch) => void;
};

export const Search = ({ handleTimelineFetch }: SearchProps) => {
  const userRef = useRef<HTMLInputElement>(null);

  async function fetchTimeline(e: FormEvent) {
    e.preventDefault();
    const username = userRef.current?.value;
    await fetchProjects(username as string);
    handleTimelineFetch(await fetchProjects(username as string));
  }

  return (
    <form className="flex items-center gap-6 mb-12" onSubmit={fetchTimeline}>
      <input
        required
        ref={userRef}
        type="text"
        placeholder="Digite o usuário ..."
        className="p-2 bg-zinc-700 rounded shadow-zinc-400 text-white"
      />
      <button type="submit" className="bg-teal-600 p-1 rounded">
        <ArrowRight color="white" />
      </button>
    </form>
  );
};
