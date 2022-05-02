import { FormEvent, useRef } from "react";
import { ArrowRight } from "react-feather";
import { ProjectFetch } from "../models/ProjectFetch";
import { fetchProjects } from "../services/fetchProjects";

type IProps = {
  handleTimelineFetch: (fetchResult: ProjectFetch) => void;
};

export const Search = ({ handleTimelineFetch }: IProps) => {
  const userRef = useRef<HTMLInputElement>(null);

  async function fetchTimeline(e: FormEvent) {
    e.preventDefault();
    const username = userRef.current?.value as string;
    handleTimelineFetch(await fetchProjects(username));
  }

  return (
    <form className="flex mb-12 overflow-hidden" onSubmit={fetchTimeline}>
      <input
        required
        ref={userRef}
        type="text"
        placeholder="Digite o usuário ..."
        className="p-2 bg-zinc-700 text-white"
      />
      <button
        type="submit"
        className="bg-teal-600 hover:bg-teal-500 p-1 w-10 grid place-items-center"
      >
        <ArrowRight className="text-zinc-800" />
      </button>
    </form>
  );
};
