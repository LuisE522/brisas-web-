import Page2 from "@/components/Home/Page2";
import { API_URL } from "@/const";

export default async function Infopage() {
  const response = await fetch(`${API_URL}/fundadores/listfundadores`, {
    method: "GET",
    cache: "no-cache",
  });
  const res = await response.json();

  return (
    <>
      <Page2 fundadores={res} />
    </>
  );
}
