import React, { useState, useEffect } from "react";
import axios from "axios";
import { marked } from "marked";
import Navbar from "../Navbar";
import "./Information.css";

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

      <div
        className="Readme-content"
        dangerouslySetInnerHTML={{ __html: readmeContent }}
      />
    </div>
  );
}

export default Information;
