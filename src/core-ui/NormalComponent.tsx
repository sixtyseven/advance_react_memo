interface IProps {
  name: string;
}

function NormalComponent(props: IProps) {
  const { name } = props;
  console.log("[render] render NormalComponent ", name);
  return <>
    <h3>Normal Component</h3>
    <div>Name: {name} </div>
  </>;
}

export default NormalComponent;

