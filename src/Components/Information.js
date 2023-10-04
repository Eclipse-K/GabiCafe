import React, { useState, useEffect } from "react";
import axios from "axios";
import { marked } from "marked";
import Navbar from "../Navbar";
import styled from "styled-components";

const InfoStyledContent = styled.div`
  border: 1px solid #ccc;
  margin: 20px 0;
  padding: 20px 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 80%;
  transform: translate(10%, 0);
  text-align: left;
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
    <div>
      <Navbar />
      <InfoStyledContent dangerouslySetInnerHTML={{ __html: readmeContent }} />
    </div>
  );
}

export default Information;
