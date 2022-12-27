import styled from "styled-components";
import Tr from "../Components/Admin/Tr";

function Admin(props: any) {
  const Data = props.Data;

  const Wrapper = styled.div`
    margin: 0 auto;
    padding: 8rem 4rem;
    text-align: start;
  `;
  const Form = styled.form`
    > :last-child {
      margin-top: 1.5rem;
    }
  `;
  const Table = styled.table`
    border-collapse: collapse;
    td {
      border: 1px solid #fff;
      padding: 0.5rem 1rem;
    }
  `;
  return (
    <Wrapper>
      <h1>表示データを編集</h1>
      <Form>
        <Table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Image</td>
              <td>Author</td>
              <td>Date</td>
              <td>Display</td>
            </tr>
          </thead>
          <tbody>
            <Tr Data={Data} />
          </tbody>
        </Table>
        <input type="submit" />
      </Form>
    </Wrapper>
  );
}

export default Admin;
