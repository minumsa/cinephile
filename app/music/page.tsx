import { Grid } from "./components/Grid";
import { MusicLayout } from "./components/MusicLayout";
import { PER_PAGE_COUNT } from "./modules/constants";

export default async function Page() {
  try {
    const currentPage = 1;
    const pathName = "";
    const currentMethod = "별점";
    const currentCriteria = "내림차순";
    const currentTagKey = "";

    // queryString 상수로 정의
    const queryString = new URLSearchParams({
      pathName,
      perPageCount: String(PER_PAGE_COUNT),
      currentPage: String(currentPage),
      currentMethod,
      currentCriteria,
      currentTagKey,
    }).toString();

    const url = `https://divdivdiv.com/music/api?${queryString}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch music data");
    }

    const { slicedData, genreDataLength } = await response.json();
    const totalScrollCount = Math.max(1, Math.ceil(genreDataLength / PER_PAGE_COUNT));

    return (
      <MusicLayout>
        <Grid initialData={slicedData} totalScrollCount={totalScrollCount} />
      </MusicLayout>
    );
  } catch (error) {
    console.error(error);
  }
}
