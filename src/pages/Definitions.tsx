/*
 Definitions: mainly from https://reactjs.org/docs/react-api.html
*/

interface IItem {
  label: string
  link: string
}

const definitionList: IItem[] = [
  {
    label: 'React.Component',
    link: 'https://reactjs.org/docs/react-api.html#reactComponent',
  },
  {
    label: 'React.PureComponent',
    link: 'https://reactjs.org/docs/react-api.html#reactpureComponent',
  },
  {
    label: 'React.memo',
    link: 'https://reactjs.org/docs/react-api.html#reactmemo',
  },
  {
    label: 'useCallback',
    link: 'https://reactjs.org/docs/hooks-reference.html#usecallback',
  },
  {
    label: 'Immutable Data',
    link: 'https://redux.js.org/faq/immutable-data',
  },
]

function Definitions() {
  console.log('[render] Definitions page')
  return (
    <div className="page">
      <h3>Definitons</h3>
      <ul>
        {definitionList.map((item) => {
          return (
            <li key={item.label}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
      <p>Definitions are mainly from https://reactjs.org/docs/react-api.html</p>
    </div>
  )
}

export default Definitions
