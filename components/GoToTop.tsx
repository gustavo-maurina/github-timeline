import { useEffect, useState } from "react";
import { ChevronsUp } from "react-feather";

export const GoToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) return setIsVisible(true);
      else setIsVisible(false);
    }

    document.addEventListener("scroll", handleScroll);
  }, []);

  function goToTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className={`transition`}>
        {isVisible && (
          <div
            onClick={goToTop}
            className="bg-teal-500 hover:bg-teal-400 w-[50px] h-[50px] fixed right-5 bottom-5 rounded-full grid place-items-center cursor-pointer"
          >
            <ChevronsUp />
          </div>
        )}
      </div>
    </>
  );
};
