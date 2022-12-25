const Flame = (props: any) => {
  // 型定義
  interface frameData {
    url: string;
    title: string;
    date: string;
    author: string;
  }
  const { enabledItems } = props;

  return enabledItems.map((output: frameData, i: number) => {
    return (
      <div className="flame" key={i}>
        <img src={output.url} className="hoge" alt={output.title} />
        <p>{output.date}</p>
        <p>
          <span className="author">{output.author}</span>さん
        </p>
      </div>
    );
  });
};

export default Flame;
