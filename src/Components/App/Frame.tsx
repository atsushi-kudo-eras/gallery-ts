import styled from "styled-components";

const Flame = (props: any) => {
  // 型定義
  interface frameData {
    url: string;
    date: string;
    author: string;
  }
  const { enabledItems } = props;

  return enabledItems.map((frameDataOutput: frameData, i: number) => {
    return (
      <Frame key={i}>
        <img
          src={frameDataOutput.url}
          alt={frameDataOutput.author + frameDataOutput.date}
        />
        <p>{frameDataOutput.date}</p>
        <p>
          <AuthorText>{frameDataOutput.author}</AuthorText>さん
        </p>
      </Frame>
    );
  });
};

const Frame = styled.div`
  margin: 4rem 2rem;
`;

const AuthorText = styled.span`
  font-size: 2rem;
  padding-right: 0.5rem;
`;

export default Flame;
