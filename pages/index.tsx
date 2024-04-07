import Head from "next/head";
import { Rubik } from "next/font/google";
import PostsCarousel from "@/components/PostsCarousel";
import AuthorCarousel from "@/components/AuthorCarousel";

const rubik = Rubik({ subsets: ["arabic"] });

export default function Home() {

  return (
    <>
      <Head>
        <title>Timiu</title>
        <meta name="description" content="timiu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${rubik.className}`}>
        <PostsCarousel />
        <AuthorCarousel />
      </main>
    </>
  );
}

