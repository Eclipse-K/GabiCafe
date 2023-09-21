import styled from "styled-components";

const CopyFooter = styled.footer`
  display: flex;
  width: 100%;
  height: 50px;
  left: 0;
  bottom: 0;
  color: white;
  margin-top: 10px;
  position: fixed;
  z-index: 3;

  p {
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
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
