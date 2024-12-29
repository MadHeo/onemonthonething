import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>디테일 페이지 {id}</h1>
    </div>
  );
}
