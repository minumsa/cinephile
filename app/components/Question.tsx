import { useEffect, useState } from "react";
import { questions, negativeWord } from "../modules/questions";
import React from "react";
import styles from "./cinephile.module.css";
import { BlurImg } from "./BlurImage";

interface QuestionProps {
  page: number;
  answer: number;
  setAnswer: React.Dispatch<React.SetStateAction<string | number | null>>;
}

export function Question({ page, answer, setAnswer }: QuestionProps) {
  const [hasNegativeWord, setHasNegativeWord] = useState<boolean>(false);
  const { question, firstType, secondType, title, paragraph } = questions[page - 1];
  const blurHash = questions[page - 1].blurHash ?? "";

  useEffect(() => {
    question.split(" ").some(element => negativeWord.includes(element))
      ? setHasNegativeWord(true)
      : setHasNegativeWord(false);
  }, [question]);

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
              if (question.includes(word)) {
                const text = question.split(word);
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
          : question}
      </div>
      {firstType === "multiple-choice" ? (
        secondType === "image" ? (
          <>
            <div className={styles["image-container"]}>
              <BlurImg src={`/cinephile/${title}.webp`} blurHash={blurHash} punch={1} />
            </div>
            <Options />
          </>
        ) : title === "chungking-express" ? (
          <>
            <div className={styles["chungking-express"]}>📞 🍍 🕒 😎</div>
            <div className={styles["chungking-express"]}>👮‍♂️ 💌 🔑 🛫</div>
            <Options />
          </>
        ) : (
          <Options />
        )
      ) : firstType === "short-answer" ? (
        <div className={styles["short-answer-container"]}>
          {paragraph?.split(String(questions[page - 1].answer)).map((text, index) => {
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
