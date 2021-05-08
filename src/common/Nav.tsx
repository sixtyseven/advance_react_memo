import { Link } from "react-router-dom";

const navData = {
  title: `An Advanced React Memo Tutorial`,
  blocks: [
    {
      title: "Problem",
      items: [{ link: "/problem", label: "Promblem" }],
    },
    {
      title: "Training Agenda",
      items: [
        { link: "/definitions", label: "Definitions" },
        { link: "/page1", label: "Page1: React without memo" },
        { link: "/page2", label: "Page2: React memo / PureComponent" },
        { link: "/page3", label: "Page3: React memo with callback function" },
      ],
    },
    {
      title: "Fix The Problem",
      items: [
        { link: "/problem-fixing", label: "Address Promblems" },
        { link: "/problem-fixed", label: "Promblem Fixed" },
        { link: "/add-new-feature-door", label: "Add a new feature" },
        { link: "/quiz", label: "Quiz" },
      ],
    },
    {
      title: "Souce code",
      items: [
        {
          link: "https://github.com/sixtyseven/advance_react_memo",
          label: "GitHub",
        },
      ],
    },
    {
      title: "Contact me",
      items: [{ link: "/contact-me", label: "Contact me" }],
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
                let linkComponent;
                //external link
                if (
                  item.link.startsWith("https://") ||
                  item.link.startsWith("http://")
                ) {
                  linkComponent = (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.label}
                    </a>
                  );
                } else {
                  linkComponent = <Link to={item.link}>{item.label}</Link>;
                }

                return <li key={item.link}>{linkComponent}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
