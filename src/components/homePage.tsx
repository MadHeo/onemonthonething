"use client";

// import styled from "@emotion/styled/macro";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX } from "react";

// const Button = styled.button`
//   padding: 32px;
//   background-color: hotpink;
//   font-size: 24px;
//   border-radius: 4px;
//   color: black;
//   font-weight: bold;
//   &:hover {
//     color: white;
//   }
// `;

export default function HomePage(): JSX.Element {
  const router = useRouter();

  const moveToDetail = (id: string): void => router.push(`/detail/${id}`);

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>홈</h1>
      <div>
        <Link href="/about">소개 페이지</Link>
      </div>
      <div>
        <img src="https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791160360370.jpg" />
      </div>
      <div>
        <button onClick={() => moveToDetail("1")}>디테일 1</button>
        <button onClick={() => moveToDetail("2")}>디테일 2</button>
      </div>
    </div>
  );
}
