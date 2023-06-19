"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface TestProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export default function Test4({ score, setScore }: TestProps) {
  const [copiedScore, setCopiedScore] = useState<number>(0);
  const [mark, setMark] = useState<string>("");

  useEffect(() => {
    setCopiedScore(score);
  }, []);

  useEffect(() => {
    setScore(copiedScore);
  }, [copiedScore]);

  useEffect(() => {
    if (mark === "여성") {
      setScore((score: number) => copiedScore + 4);
    }
  }, [mark]);

  return (
    <>
      <div className="cine-test-format">
        <div className="cine-quiz">
          4. 배우 양자경은 제95회 아카데미 시상식에서 ｢에브리씽 에브리웨어 올 앳
          원스｣(2022, 댄 콴)로 여우주연상을 수상했다. 다음 빈칸을 채워 해당 수상
          소감을 완성하시오.
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Image
            src="/cine-img-5.jpg"
            alt="cine-img-5"
            width={window.innerWidth > 450 ? "350" : "210"}
            height={window.innerWidth > 450 ? "200" : "120"}
            style={{
              marginTop: "10px",
              border: "1.5px solid black",
            }}
          />
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: window.innerWidth > 450 ? "20px" : "0",
            border: "1.5px solid #0e1111",
            padding: "15px",
          }}
        >
          {`"`}
          {/* <div style={mark1} onClick={clickAnswer1}></div> */}
          <input
            className="cine-test-input"
            onChange={e => setMark(e.target.value)}
          />
          {` 여러분, 그 누구도 여러분께 전성기가 지났다는 말을 하지 못하게 하세요."`}
        </div>
      </div>
    </>
  );
}
