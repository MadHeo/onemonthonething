"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX } from "react";

export default function HomePage(): JSX.Element {
  const router = useRouter();

  const moveToDetail = (id: string): void => router.push(`/detail/${id}`);

  return (
    <div>
      <h1>홈</h1>
      <div>
        <Link href="/about">소개 페이지</Link>
      </div>
      <div>
        <button onClick={() => moveToDetail("1")}>디테일 1</button>
        <button onClick={() => moveToDetail("2")}>디테일 2</button>
      </div>
    </div>
  );
}
