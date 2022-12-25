const Authors = (props: any) => {
  const { revAuthState, authState, enableAllAuth, disableAllAuth, Data } =
    props;

  return (
    <div className="button-wrap">
      <div>
        {Data.authors.map((author: string, i: number) => {
          return (
            <button
              className={authState[i] ? "button-active" : "button-nonactive"}
              onClick={() => revAuthState(i)}
              key={i}
            >
              {author}
            </button>
          );
        })}
        <button className="button-active" onClick={() => enableAllAuth()}>
          全表示
        </button>
        <button className="button-active" onClick={() => disableAllAuth()}>
          全非表示
        </button>
      </div>
    </div>
  );
};

export default Authors;
