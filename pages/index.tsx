import type { NextPage } from "next";
import { useState } from "react";

import { AppHeader } from "../components/AppHeader";
import { Search } from "../components/Search";
import { SearchResult } from "../components/SearchResult";
import { Project } from "../models/Project";

const Home: NextPage = () => {
  const [timeline, setTimeline] = useState<Project[]>();

  return (
    <section className="bg-zinc-800 min-h-screen h-full flex flex-col items-center gap-8">
      <div className="pt-5">
        <AppHeader />
      </div>
      <div>
        <Search setTimeline={setTimeline} />
      </div>
      <div>
        <SearchResult timeline={timeline} />
      </div>
    </section>
  );
};

export default Home;
