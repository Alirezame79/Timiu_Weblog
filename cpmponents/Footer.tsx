import { Baloo_Bhaijaan_2 } from "next/font/google";

const balooBhaijaan2 = Baloo_Bhaijaan_2({ subsets: ["arabic"] });

export default function Footer() {

  return (
    <div className={`footer text-body-secondary ${balooBhaijaan2.className}`}>
      تمام حقوق اثر متعلق به گروه تام می باشد
    </div>
  )
}