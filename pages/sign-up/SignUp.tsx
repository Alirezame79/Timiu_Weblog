import { useRouter } from "next/router";
import React, { useState } from "react"

export default function SignUp() {
  const [step, setStep] = useState(1);
  const router = useRouter()

  function submitClicked(e: any) {
    e.preventDefault();

    setStep(step + 1);
    console.log(step)
  }

  function finishSignUpClicked() {
    router.push('/')
  }

  switch (step) {
    case 1:
      return (
        <div className="signUpContainer">
          <div className="card signUpPathCard">
            <div className="card-body signUpPath">
              <div className="signUpPathLine goneLine"></div>
    
              <img 
                className="current"
                src={'https://cdn1.iconfinder.com/data/icons/ui-glynh-05-of-5/100/UI_Glyph_09_-08-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine"></div>
    
              <img 
                className=""
                src={'https://cdn3.iconfinder.com/data/icons/information-notification-black/3/17-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine"></div>
    
              <img 
                className=""
                src={'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/finish_flag-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine"></div>
            </div>
          </div>
          <div className="card signUpBody">
            <form className="signUpFormContainer">
              <h2>گام اول</h2>
              <div className="row mb-3">
                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">ایمیل</label>
                <div className="col-sm-10">
                  <input type="email" className="form-control" id="inputEmail3" />
                </div>
              </div>
              <fieldset className="row mb-3">
                <legend className="col-form-label col-sm-2 pt-0">نقش</legend>
                <div className="col-sm-10">
                  <div className="form-check radioChoice">
                    <input className="form-check-input" type="radio" name="gridRadios" id="viewerRadio" value="viewer" defaultChecked />
                    <label className="form-check-label" htmlFor="viewerRadio">
                      بیننده
                    </label>
                  </div>
                  <div className="form-check radioChoice">
                    <input className="form-check-input" type="radio" name="gridRadios" id="writerRadio" value="writer" />
                    <label className="form-check-label" htmlFor="writerRadio">
                      نویسنده
                    </label>
                  </div>
                </div>
              </fieldset>
              <button type="submit" className="btn btn-primary SignUpSubmitBtn" onClick={submitClicked}>مرحله بعد</button>
            </form>
          </div>
        </div>
      )
    case 2:
      return (
        <div className="signUpContainer">
          <div className="card signUpPathCard">
            <div className="card-body signUpPath">
              <div className="signUpPathLine goneLine"></div>
    
              <img 
                className="goneImg"
                src={'https://cdn1.iconfinder.com/data/icons/ui-glynh-05-of-5/100/UI_Glyph_09_-08-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine goneLine"></div>
    
              <img 
                className="current"
                src={'https://cdn3.iconfinder.com/data/icons/information-notification-black/3/17-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine"></div>
    
              <img 
                className=""
                src={'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/finish_flag-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine"></div>
            </div>
          </div>
          <div className="card signUpBody">
            <form className="row g-3">
              <h2>گام دوم</h2>
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">نام</label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">نام خانوادگی</label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">کوچه و پلاک</label>
                <input type="text" className="form-control" id="inputAddress" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">میدان و خیابان</label>
                <input type="text" className="form-control" id="inputAddress2" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">شهر</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">استان</label>
                <select id="inputState" className="form-select">
                  <option selected>انتخاب ...</option>
                  <option>گیلان</option>
                  <option>تهران</option>
                  <option>شیراز</option>
                  <option>اصفهان</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">کدپستی</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
              <div className="col-12 btnContainer">
                <button type="submit" className="btn btn-primary SignUpSubmitBtn" onClick={submitClicked}>مرحله بعد</button>
              </div>
            </form>
          </div>
        </div>
      ) 
    case 3:
      return (
        <div className="signUpContainer">
          <div className="card signUpPathCard">
            <div className="card-body signUpPath">
              <div className="signUpPathLine goneLine"></div>
    
              <img 
                className="goneImg"
                src={'https://cdn1.iconfinder.com/data/icons/ui-glynh-05-of-5/100/UI_Glyph_09_-08-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine goneLine"></div>
    
              <img 
                className="goneImg"
                src={'https://cdn3.iconfinder.com/data/icons/information-notification-black/3/17-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine goneLine"></div>
    
              <img 
                className="current"
                src={'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/finish_flag-512.png'} 
                width={100} height={100} 
                alt="verification" />
    
              <div className="signUpPathLine"></div>
            </div>
          </div>
          <div className="card signUpBody">
            <p>مراحل ثبت نام با موفقیت به اتمام رسید.</p>
            <div className="col-12 btnContainer">
              <button type="submit" className="btn btn-primary SignUpSubmitBtn" onClick={finishSignUpClicked}>تایید</button>
            </div>
          </div>
        </div>
      ) 
  }
  
}