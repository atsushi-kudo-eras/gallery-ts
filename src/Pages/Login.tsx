import styled from "styled-components";

function Login() {
  const Headline = styled.h1`
    margin: 0;
    padding-top: 9.5rem;
    padding-bottom: 4rem;
  `;
  const Container = styled.div`
    margin: 0 auto;
    border: 3px solid #acacac;
    border-radius: 1.5rem;
    height: 12rem;
    width: 20rem;
    padding: 2rem;
    background-color: #fff;
  `;
  const Form = styled.form`
    display: flex;
    align-items: start;
    flex-direction: column;
    color: #000;
    > label,
    input {
      margin-bottom: 0.5rem;
    }
    > input {
      width: 80%;
      line-height: 1.5rem;
      font-size: 18px;
    }
    > :last-child {
      margin: 0 auto;
      margin-top: 1.5rem;
      width: 3rem;
      font-size: 1rem;
    }
  `;

  return (
    <>
      <Headline>Login</Headline>
      <Container>
        <Form>
          <label>User Name</label>
          <input id="name" type="text" />
          <label>Password</label>
          <input id="password" type="password" />
          <input type="submit" />
        </Form>
      </Container>
    </>
  );
}

export default Login;
