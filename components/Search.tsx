import { Dispatch, FormEvent, SetStateAction, useRef } from "react";
import { ArrowRight } from "react-feather";
import { Project } from "../models/Project";

type SearchProps = {
  setTimeline: Dispatch<SetStateAction<Project[] | undefined>>;
};

export const Search = ({ setTimeline }: SearchProps) => {
  const userRef = useRef<HTMLInputElement>(null);

  function sortByDate(timeline: Project[]) {
    return timeline.sort((a, b) => {
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    });
  }

  async function fetchTimeline(e: FormEvent) {
    e.preventDefault();
    const userName = userRef.current?.value;
    const req = await fetch(`https://api.github.com/users/${userName}/repos`);
    const timeline: Project[] = await req.json();
    setTimeline(sortByDate(timeline));
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
