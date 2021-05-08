interface IProps {
  name: string;
}

function NormalComponent(props: IProps) {
  const { name } = props;
  console.log("[render] render Component ", name);
  return (
    <>
      <h4> Component</h4>
      <div>Name: {name} </div>
    </>
  );
}

export default NormalComponent;
