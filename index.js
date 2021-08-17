function Box(props) {
  const { paraText, className, paraClassName } = props;
  return (
    <div className={className}>
      <p className={paraClassName}>{paraText}</p>
    </div>
  );
}

const element = (
  <div className="bg-container">
    <h1 className="boxes">Boxes</h1>
    <div className="box-container">
      <Box className="box-1" paraText="Small" paraClassName="paraClassName" />
      <Box className="box-2" paraText="Medium" paraClassName="paraClassName" />
      <Box className="box-3" paraText="Large" paraClassName="paraClassName" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
