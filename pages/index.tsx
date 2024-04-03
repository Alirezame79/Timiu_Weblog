import Head from "next/head";
import { Inter, Baloo_Bhaijaan_2 } from "next/font/google";
import PostsCarousel from "@/cpmponents/PostsCarousel";
import { useEffect } from "react";
import axios from "axios";

const balooBhaijaan2 = Baloo_Bhaijaan_2({ subsets: ["arabic"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Timiu</title>
        <meta name="description" content="timiu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${balooBhaijaan2.className}`}>
        <PostsCarousel />
      </main>
    </>
  );
}

