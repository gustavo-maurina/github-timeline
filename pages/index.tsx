import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Frown } from "react-feather";
import { AppHeader } from "../components/AppHeader";
import { GoToTop } from "../components/GoToTop";
import { Search } from "../components/Search";
import { SearchResult } from "../components/SearchResult";
import { Project } from "../models/Project";
import { ProjectFetch } from "../models/ProjectFetch";

const Home: NextPage = () => {
  const [timeline, setTimeline] = useState<ProjectFetch>();

  function sortByDate(timeline: Project[]) {
    return timeline.sort((a, b) => {
      return (
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    });
  }

  function handleTimelineFetch(fetchResult: ProjectFetch): void {
    const { isError, data } = fetchResult;
    console.log(data);

    setTimeline({ isError, data: sortByDate(data) });
  }

  return (
    <>
      <Head>
        <title>Github timeline</title>
      </Head>
      <section className="bg-zinc-800 min-h-screen h-full flex flex-col items-center gap-8">
        <div className="pt-5">
          <AppHeader />
        </div>
        <div>
          <Search handleTimelineFetch={handleTimelineFetch} />
        </div>
        <div>
          {!timeline?.isError && <SearchResult timeline={timeline?.data} />}
          {timeline?.isError && (
            <p className="text-red-500 font-semibold text-lg flex items-center">
              <Frown className="mr-2" /> Sem resultados para este usuário
            </p>
          )}
        </div>
      </section>
      <GoToTop />
    </>
  );
};

export default Home;
