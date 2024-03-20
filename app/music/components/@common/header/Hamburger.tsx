import { usePathname, useRouter } from "next/navigation";
import styles from "./Hamburger.module.css";
import React, { useState } from "react";
import Link from "next/link";
import { useAtom } from "jotai";
import { CurrentTagKeyAtom } from "../../../modules/atoms";
import { toGenrePage } from "../../../modules/paths";
import { isAdminPage } from "../../../modules/utils";
import { CONTENTS } from "../../../modules/constants";

export const Hamburger = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [currentTagKey, setCurrentTagKey] = useAtom(CurrentTagKeyAtom);

  return (
    <nav
      className={styles["desktop-hamburger-container"]}
      onClick={() => {
        setShowCategory(!showCategory);
      }}
    >
      <button
        className={styles["hamburger-icon"]}
        style={{ display: showCategory ? "none" : "flex" }}
      ></button>
      <button className={styles["close-icon"]} style={{ display: showCategory ? "flex" : "none" }}>
        <div style={{ fontWeight: 100, marginTop: "1px" }}>×</div>
      </button>
      {showCategory ? (
        <ul className={styles["desktop-genre-category"]}>
          {Object.keys(CONTENTS).map(category => {
            return (
              <React.Fragment key={category}>
                <Link
                  href={toGenrePage(pathName, category)}
                  onClick={() => {
                    setCurrentTagKey("");
                  }}
                >
                  <li className={styles["hamburger-item"]}>{CONTENTS[category]}</li>
                </Link>
              </React.Fragment>
            );
          })}
        </ul>
      ) : null}
      {showCategory && isAdminPage(pathName) && (
        <div className={styles["desktop-introduction-category"]}>
          <div className={styles["hamburger-item-title"]}>관리자 메뉴</div>
          <div
            className={styles["hamburger-item"]}
            onClick={() => {
              router.push("/music/admin/upload");
            }}
          >
            글쓰기
          </div>
        </div>
      )}
    </nav>
  );
};
