import { useEffect, useState } from "react";
import { questions, negativeWord } from "../modules/questions";
import React from "react";
import styles from "./cinephile.module.css";

interface QuestionProps {
  page: number;
  answer: number;
  setAnswer: React.Dispatch<React.SetStateAction<string | number | null>>;
}

export function Question({ page, answer, setAnswer }: QuestionProps) {
  const [hasNegativeWord, setHasNegativeWord] = useState<boolean>(false);

  useEffect(() => {
    questions[page - 1].question.split(" ").some(element => negativeWord.includes(element))
      ? setHasNegativeWord(true)
      : setHasNegativeWord(false);
  }, [page]);

  const Options = () => {
    return questions[page - 1].options?.map((option, index) => {
      return (
        <React.Fragment key={index}>
          <div
            className={styles["options"]}
            style={{
              backgroundColor: index === answer ? "#000000" : undefined,
              color: index === answer ? "#ffffff" : undefined,
            }}
            onClick={() => {
              setAnswer(index);
            }}
          >
            {`${index + 1}) ${option}`}
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <div className={styles["question-container"]}>
      <div className={styles["question"]}>
        {`${[page]}. `}
        {hasNegativeWord
          ? negativeWord.map((word, index) => {
              if (questions[page - 1].question.includes(word)) {
                const text = questions[page - 1].question.split(word);
                return (
                  <React.Fragment key={index}>
                    <span>{text[0]}</span>
                    <span style={{ textDecoration: "underline" }}>{word}</span>
                    <span>{text[1]}</span>
                  </React.Fragment>
                );
              } else {
                return null;
              }
            })
          : questions[page - 1].question}
      </div>
      {questions[page - 1].type === "multiple-choice" ? (
        questions[page - 1].type2 === "image" ? (
          <>
            <div className={styles["image-container"]}>
              <img
                className={styles["image"]}
                src={`/cinephile/${questions[page - 1].title}.webp`}
                alt={`${questions[page - 1].title}`}
                loading="lazy"
              />
            </div>
            <Options />
          </>
        ) : questions[page - 1].title === "chungking-express" ? (
          <>
            <div className={styles["chungking-express"]}>📞 🍍 🕒 😎</div>
            <div className={styles["chungking-express"]}>👮‍♂️ 💌 🔑 🛫</div>
            <Options />
          </>
        ) : (
          <Options />
        )
      ) : questions[page - 1].type === "short-answer" ? (
        <div className={styles["short-answer-container"]}>
          {questions[page - 1].paragraph
            ?.split(String(questions[page - 1].answer))
            .map((text, index) => {
              return index === 0 ? (
                <React.Fragment key={index}>
                  {text}
                  <input
                    className={styles["short-answer-input"]}
                    onChange={e => {
                      setAnswer(e.target.value);
                    }}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment key={index}>{text}</React.Fragment>
              );
            })}
        </div>
      ) : null}
    </div>
  );
}
