import { Fragment, useMemo } from "react";
import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <Fragment>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </Fragment>
  );
};

// Here are some relevant code fragments from other files of the repo:
