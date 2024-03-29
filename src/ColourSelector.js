function ColourSelector(props) {
  const { config, setNextBackground } = props;
  const { background } = config;
  return (
    <button
      className={config.classname}
      onClick={() => setNextBackground({ background: background })}
    >
      {config.label}
    </button>
  );
}

export default ColourSelector;
