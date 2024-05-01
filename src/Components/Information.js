import React, { useState, useEffect } from "react";
import axios from "axios";
import { marked } from "marked";
import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoStyledContent = styled.div`
  border: 1px solid #ccc;
  margin: 20px 0;
  padding: 20px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 950px;
  width: 64%;
  text-align: left;
  overflow: scroll;

  @media all and (min-width: 281px) and (max-width: 432px) {
    width: 72%;
    height: 700px;
  }
`;

function Information() {
  const [readmeContent, setReadmeContent] = useState("");

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/Eclipse-K/GabiCafe/readme",
          {
            headers: {
              Accept: "application/vnd.github.v3.raw",
            },
          }
        );

        const markdownContent = response.data;
        const htmlContent = marked(markdownContent);

        setReadmeContent(htmlContent);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();
  }, []);

  return (
    <InfoContainer>
      <InfoStyledContent dangerouslySetInnerHTML={{ __html: readmeContent }} />
    </InfoContainer>
  );
}

export default Information;
