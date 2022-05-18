
import { useEffect } from "react";
import { onMounted } from "../../helpers/frontend";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  MapPin,
  PhoneCall,
  Briefcase,
  Mail,
  Clock,

} from "react-feather";
import { connect } from "react-redux";
import { setTopnavActiveIndex } from "../../actions/general.actions";



function CompanyContact(props) {
  /* eslint-disable */
  useEffect(() => {
    onMounted(true);
    props.setTopnavActiveIndex(52);
  }, []);
  /* eslint-enable */

  const [userName,setUserName] = useState('') 
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')

  const [errorUserName,setErrorUsername] = useState('')
  const [errorlastName,setErrorLastname] = useState('')
  const [errorEmail,setErrorEmail] = useState('')
  
  const [userNameColor,setUserNameColor] = useState('')
  
  const [emailColor,setEmailColor] = useState('')


  const validateform = (e) => {
      e.preventDefault()              

      if(userName.length > 3) {       //  ถ้าชื่อผู้ใช้มากกว่า 3 ตัวอักษร สามารถกรอกข้อมูลได้ตามปกติ ไม่มี error message
          setErrorUsername('')        //  ถ้าไม่ใช่ให้ทำการแจ้งข้อความ 'กรุณาป้อนชื่อผู้ใช้จำนวน 3 ตัวอักษร' แจ้ง error message
          setUserNameColor('green')   
      } else {
          setErrorUsername('กรุณาป้อนชื่อผู้ใช้มากกว่าจำนวน 3 ตัวอักษร')
          setUserNameColor('red')
      }

      if(lastName.length > 3) {       //  ถ้าชื่อผู้ใช้มากกว่า 3 ตัวอักษร สามารถกรอกข้อมูลได้ตามปกติ ไม่มี error message, 
        setErrorLastname('')        //  ถ้าไม่ใช่ให้ทำการแจ้งข้อความ 'กรุณาป้อนชื่อผู้ใช้จำนวน 3 ตัวอักษร' แจ้ง error message
         
    } else {
        setErrorLastname('กรุณาป้อนชื่อผู้ใช้มากกว่าจำนวน 3 ตัวอักษร')
        setUserNameColor('red')
    }

      if(email.includes("@")) {       // ถ้าชื่ออีเมลมีเครื่องหมาย '@' จะสามารถลงทะเบียนได้ตามปกติ
          setErrorEmail('')           // ถ้าไม่มีเครื่องหมาย '@' จะไม่สามารถลงทะเบียนได้ และมีข้อความแจ้ง error message
          setEmailColor('green')
      } else {
          setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')  
          setEmailColor('red')
      }

    
  }

  return (
    <>
      <section className="section-company-02-01 bg-p d-flex ai-center">
        <div className="container">
          <p className="d-flex ai-center text-small color-white">
            Home <ChevronRight size="15" className="ml-2 mr-2" /> Contact
          </p>
          <h3 className="fw-800 mt-2 color-white">Contact</h3>
          <div className="ss-sep-01 bg-white mt-4"></div>
        </div>
      </section>

      <section className="section-company-02-02 section-padding">
        <div className="container">
          <div className="grids">
            <div className="grid md-50">
              <div className="text-wrapper">
                <h3>Contact</h3>
                <div className="ss-sep-01 bg-p mt-3"></div>
                <p className="mt-6">
                  Please let us know if you have a question or would like
                  further information about products and services.
                </p>
                <hr className="mt-3" />
              </div>
              <h6 className="mt-6">Headquarters Office</h6>
              <h3 className="mt-3">TECH ORIGIN CO., LTD.</h3>
              <div className="grids">
                <div className="grid md-50">
                  <ul>
                    <li className="d-flex">
                      <div className="grid md-20">
                        <MapPin />
                      </div>
                      <div className="grid md-80">
                        <div className="pl-3">
                          <p>
                            1 Soi Ramkhamhaeng 166 Yaek 2 Ramkhamhaeng Rd.
                            Minburi , Bangkok 10510 Thailand
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mt-5">
                      <div className="grid md-20">
                        <PhoneCall />
                      </div>
                      <div className="grid md-80">
                        <div className="pl-3">
                          <p>097 305 2239</p>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex mt-5">
                      <div className="grid md-20">
                        <Briefcase />
                      </div>
                      <div className="grid md-80">
                        <div className="pl-3">
                          <p>097 305 2239</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="grid md-50">
                  <ul>
                    <p className="text-small">INQUIRIES</p>
                    <li className="d-flex">
                      <div className="grid md-20">
                        <Mail />
                      </div>
                      <div className="grid md-80">
                        <div className="pl-3">
                          <p>sarun.seepun@gmail.com</p>
                        </div>
                      </div>
                    </li>
                    <p className="text-small mt-3">SUPPORT</p>
                    <li className="d-flex">
                      <div className="grid md-20">
                        <Mail />
                      </div>
                      <div className="grid md-80">
                        <div className="pl-3">
                          <p>sarun.seepun@gmail.com</p>
                        </div>
                      </div>
                    </li>
                    <p className="text-small mt-3">SALES</p>
                    <li className="d-flex">
                      <div className="grid md-20">
                        <Mail />
                      </div>
                      <div className="grid md-80">
                        <div className="pl-3">
                          <p>sarun.seepun@gmail.com</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex ai-center">
                <Clock />
                <p className="ml-2">Monday - Friday:from 9:30 - 18:30 hrs.</p>
              </div>
              <hr className="mt-5" />
            </div>
            <div className="grid md-50">
              <div className="pt-3 pl-6 pr-6 bx-shadow h-full">
                <h3>Contact Form</h3>
                <div className="ss-sep-01 bg-p mt-3"></div>
                <form className="form mt-4" onSubmit={validateform}>
                  <div className="form-control">
                    <label>First Name *</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} ></input>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                  </div>
                  <div className="form-control mt-3">
                    <label>Last Name *</label>
                    <input type="text" value={lastName} onChange={(e)=>lastName(e.target.value)} />
                    <small >{errorlastName}</small>
                  </div>
                  <div className="form-control mt-3">
                    <label>Email *</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <small style={{color:emailColor}}>{errorEmail}</small>
                  </div>
                  <div className="form-control mt-3">
                    <label>Message *</label>
                    <textarea rows="4" col="50"></textarea>
                  </div>
                  <div className="btn-wrapper mt-3 mb-5">
                    <button type="submit"className="btn btn-action btn-p">
                      SUBMIT
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

     
     
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  setTopnavActiveIndex: setTopnavActiveIndex,
})(CompanyContact);
