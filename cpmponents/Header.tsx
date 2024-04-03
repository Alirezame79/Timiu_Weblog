import { Baloo_Bhaijaan_2 } from "next/font/google";

const balooBhaijaan2 = Baloo_Bhaijaan_2({ subsets: ["arabic"] });

export default function Header() {

  return (
    <nav className={`navbar navbar-expand-lg headerNavbar ${balooBhaijaan2.className}`}>
      <div className="container-fluid">
        <a className="navbar-brand headerNavbarTitle" href="/">تیمیو</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse headerNavbarAssistant" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/sign-up/SignUp">ثبت نام</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">لیست پست ها</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">درباره ما</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">ارتباط با ما</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}