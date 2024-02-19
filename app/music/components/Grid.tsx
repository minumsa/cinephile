import { useEffect, useState } from "react";
import styles from "../music.module.css";
import { fetchData } from "../modules/api";
import { usePathname, useRouter } from "next/navigation";
import { useAtom } from "jotai";
import React from "react";
import {
  AlbumInfo,
  CriteriaType,
  MethodType,
  initialCriteria,
  initialMethod,
} from "../modules/data";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
import Aos from "aos";
import { ContentLayout } from "./ContentLayout";
import { Loading } from "./Loading";
import Link from "next/link";

export const Grid = () => {
  const router = useRouter();
  const fullPathName = usePathname();
  const isAdminPage = fullPathName.includes("admin");
  const [data, setData] = useState<AlbumInfo[]>([]);
  const [totalPage, setTotalPage] = useState(1);
  const [perPageCount, setPerPageCount] = useState(isMobile ? 20 : 50);
  const [currentPage, setCurrentPage] = useState(1);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  const [dataLength, setDataLength] = useState(undefined);
  const [currentMethod, setCurrentMethod] = useAtom<MethodType>(initialMethod);
  const [currentCriteria, setCurrentCriteria] = useAtom<CriteriaType>(initialCriteria);
  const [isLoading, setIsLoading] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    if (inView) setCurrentPage(prevPage => prevPage + 1);
  }, [inView]);

  useEffect(() => {
    async function loadData() {
      const result = await fetchData({
        pathName: "",
        perPageCount,
        currentPage,
        currentMethod,
        currentCriteria,
      });

      if (currentPage === 1) {
        setData(result?.slicedData);
        setIsLoading(false);
      } else {
        // 페이지가 2 이상일 때부터만 기존 데이터 배열에 새로운 데이터 추가
        setData(prevData => [...prevData, ...result?.slicedData]);
        setIsLoading(false);
        setIsScrolling(false);
      }

      const dataLength = result?.genreDataLength;
      setDataLength(result?.genreDataLength);
      setTotalPage(Math.max(1, Math.ceil(dataLength / 5)));
    }
    setIsLoading(true);
    setIsScrolling(true);
    loadData();
  }, [currentMethod, currentCriteria, currentPage, perPageCount]);

  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      {isLoading && <Loading isScrolling={isScrolling} />}
      <ContentLayout
        data={data}
        currentPage={currentPage}
        perPageCount={perPageCount}
        totalDataLength={undefined}
      >
        <div className={styles["grid-div"]}>
          {data.map((item, index) => {
            const firstLineMobile = isMobile && index < 2;
            const evenIndexMobile = isMobile && (index + 1) % 2 == 0;
            const isLastItem = index + 1 === data.length;

            const mobileStyle = {
              borderTop: firstLineMobile ? "none" : undefined,
              borderRight: evenIndexMobile ? "none" : undefined,
            };
            return (
              <div
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-offset={isMobile ? "50" : "100"}
                data-aos-once="false"
                key={index}
                className={`${styles["grid-item-container"]}`}
                style={mobileStyle}
                ref={isLastItem ? ref : undefined}
              >
                <Link
                  className={styles["grid-album-container"]}
                  style={{ position: "relative", width: "100%" }}
                  href={isAdminPage ? `/music/admin/post/${item.id}` : `/music/post/${item.id}`}
                  onClick={() => {
                    setIsLoading(true);
                  }}
                  // onClick={() => {
                  //   setIsLoading(true);
                  //   isAdminPage
                  //     ? router.push(`/music/admin/post/${item.id}`)
                  //     : router.push(`/music/post/${item.id}`);
                  // }}
                >
                  <div
                    className={styles["grid-album-image"]}
                    style={
                      imageLoaded
                        ? { backgroundImage: `url(${item.imgUrl})`, backgroundSize: "cover" }
                        : undefined
                    }
                  />
                  <img
                    src={item.imgUrl}
                    alt={item.album}
                    style={{ display: "none" }}
                    onLoad={handleImageLoad}
                  />
                </Link>
                <Link
                  className={styles["grid-album-title"]}
                  href={isAdminPage ? `/music/admin/post/${item.id}` : `/music/post/${item.id}`}
                  onClick={() => {
                    setIsLoading(true);
                  }}
                  // onClick={() => {
                  //   setIsLoading(true);
                  //   isAdminPage
                  //     ? router.push(`/music/admin/post/${item.id}`)
                  //     : router.push(`/music/post/${item.id}`);
                  // }}
                >
                  <span className={styles["black-masking"]}>
                    {`${item.artist} [${item.album}]`}
                    {/* 관리자 페이지일 때만 표시할 부분 */}
                    {isAdminPage &&
                      ` - ${item.releaseDate.substring(0, 4)} ${
                        item.score ? "… " + item.score : ""
                      }`}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </ContentLayout>
    </>
  );
};
