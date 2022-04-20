import React from "react";
import "./Definitions.css";

const Definitions = ({ word, meanings, lightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && (
        <audio
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            backgroundColor: "fff",
            borderRadius: "10px",
            width: "50%",
            alignSelf: "center",
          }}
          controls
        ></audio>
      )}
      {word === "" ? (
        <span className="subTitle">Start by typing in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => {
              return (
                <div
                  className="singleMean"
                  style={{
                    backgroundColor: lightMode ? "#3b5360" : "white",
                    color: lightMode ? "white" : "black",
                    padding: "10px 10px 0 10px",
                  }}
                >
                  <span className="definition">
                    <b>Definition: </b>
                    {def.definition}
                  </span>

                  {(def.example || def.synonyms.length > 0) && (
                    <hr style={{ backgroundColor: "black", width: "100%" }} />
                  )}
                  {def.example && (
                    <span className="example">
                      <b>Example: </b>
                      {def.example}
                    </span>
                  )}
                  {def.synonyms.length > 0 && (
                    <span className="synonyms">
                      <b>Synonyms: </b>
                      {def.synonyms.map((synonym) => `${synonym},`)}
                    </span>
                  )}
                </div>
              );
            })
          )
        )
      )}
    </div>
  );
};

export default Definitions;
