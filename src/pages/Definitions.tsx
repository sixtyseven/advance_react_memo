/*
Page 1 : Introdcution:
*/

interface IItem {
  label: string;
  link: string;
}

const definitionList: IItem[] = [
  {
    label: 'React.Component',
    link: 'https://reactjs.org/docs/react-api.html#reactcomponent'
  },
  {
    label: 'React.PureComponent',
    link: 'https://reactjs.org/docs/react-api.html#reactpurecomponent'
  },
  {
    label: 'React.memo',
    link: 'https://reactjs.org/docs/react-api.html#reactmemo'
  }
]

function Definitions() {
  return (
    <div className="introduction">
      <h3>
        Introduction
      </h3>
      <ul>
        {definitionList.map((item) => {
          return <li>
            <a href={item.link} target="_blank"
              rel="noopener noreferrer">{item.label}</a>
          </li>
        })}
      </ul>



    </div>
  );
}

export default Definitions;
