import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["arabic"] });

export default function NotFound() {

  return (
    <div className={`notFound ${rubik.className}`}>
      URL مورد نظر یافت نشد ):
      <p>Error 404 (Not Found)</p>
    </div>
  )
}