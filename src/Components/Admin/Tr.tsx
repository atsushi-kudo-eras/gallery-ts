import styled from "styled-components";

const Tr = (props: any) => {
  interface imgData {
    ID: number;
    url: string;
    author: string;
    date: string;
    delflg: boolean;
  }
  const Data = props.Data.res;
  const Img = styled.img`
    width: 300px;
  `;
  return Data.map((imgData: imgData, i: number) => {
    return (
      <tr key={i}>
        <td>{imgData.ID}</td>
        <td>
          <Img src={imgData.url} />
        </td>
        <td>
          <input id={`${i}_author`} type="text" defaultValue={imgData.author} />
        </td>
        <td>
          <input id={`${i}_date`} type="text" defaultValue={imgData.date} />
        </td>
        <td>
          <input
            id={`${i}_delflg`}
            type="checkbox"
            defaultChecked={!imgData.delflg}
          />
        </td>
      </tr>
    );
  });
};

export default Tr;
