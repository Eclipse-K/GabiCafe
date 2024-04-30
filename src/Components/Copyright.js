import styled from "styled-components";

const CopyFooter = styled.footer`
  position: relative;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 60px;
  color: white;
  margin-top: 10px;
  font-family: "Gugi", cursive;

  p {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
  }

  @media all and (max-width: 700px) {
    font-size: 10px;
  }

  @media all and (min-width: 720px) and (max-width: 1368px) {
    margin-top: 100px;
  }
`;

function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <CopyFooter>
      <p>Copyright {currentYear} &copy;My Company. All rights reserved.</p>
    </CopyFooter>
  );
}

export default Copyright;
