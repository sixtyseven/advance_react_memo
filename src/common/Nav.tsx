import { Link } from "react-router-dom";
import { routesMap } from "./routes";

const navData = {
  title: `An Advanced React Memo Tutorial`,
  blocks: [
    {
      title: "Problem",
      items: [routesMap.problem],
    },
    {
      title: "Training Agenda",
      items: [
        routesMap.definitions,
        routesMap.page1,
        routesMap.page2,
        routesMap.page3,
        routesMap.page4,
      ],
    },
    {
      title: "Fix The Problem",
      items: [
        routesMap.problemFixing,
        routesMap.problemFixed,
        routesMap.addNewFeatureDoor,
        routesMap.quiz,
      ],
    },
    {
      title: "Souce code",
      items: [routesMap.souceCode],
    },
    {
      title: "Contact me",
      items: [routesMap.contactMe],
    },
  ],
};

export default function Nav() {
  return (
    <nav className="nav">
      <h3 className="h3">{navData.title}</h3>
      {navData.blocks.map((block) => {
        return (
          <div className="nav-block" key={block.title}>
            <h4 className="h4">{block.title}</h4>
            <ul>
              {block.items.map((item) => {
                const { path, shortTitle } = item;
                let linkComponent;
                //external link
                if (path.startsWith("https://") || path.startsWith("http://")) {
                  linkComponent = (
                    <a href={path} target="_blank" rel="noopener noreferrer">
                      {shortTitle}
                    </a>
                  );
                } else {
                  linkComponent = <Link to={path}>{shortTitle}</Link>;
                }

                return <li key={path}>{linkComponent}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
