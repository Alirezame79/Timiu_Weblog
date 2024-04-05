import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["arabic"] });

export default function Footer() {

  return (
    <div className={`footer text-body-secondary ${rubik.className}`}>
      تمام حقوق اثر متعلق به گروه تام می باشد
    </div>
  )
}