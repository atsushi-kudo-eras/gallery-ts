import styled from "styled-components";

const Authors = (props: any) => {
  const { revAuthState, authState, enableAllAuth, disableAllAuth, Data } =
    props;

  const ButtonWrap = styled.div`
    position: sticky;
    top: 0;
    padding: 1.5rem 0;
    margin-bottom: 1rem;
    background-color: #282c34;
  `;

  const Button = styled.button`
    background-color: #282c34;
    margin: 0 2px;
    color: #fff;
    line-height: 1.5rem;
    border: #000 1px solid;
    border-radius: 3px;
  `;

  return (
    <ButtonWrap>
      <div>
        {Data.authors.map((author: string, i: number) => {
          const state = authState[i];
          const StateButton = styled(Button)`
            background-color: ${state ? "#282c34" : "#181a1b"};
          `;
          return (
            <StateButton
              // props={state}
              onClick={() => revAuthState(i)}
              key={i}
            >
              {author}
            </StateButton>
          );
        })}
        <Button onClick={() => enableAllAuth()}>全表示</Button>
        <Button onClick={() => disableAllAuth()}>全非表示</Button>
      </div>
    </ButtonWrap>
  );
};

export default Authors;
