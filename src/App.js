import "./App.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import profile from "./assets/wanofi-profile.png";
import Html from "./assets/Htmllogo.png";
import Css from "./assets/Csslogo.png";
import Js from "./assets/jslogo.png";
import ReactLogo from "./assets/Reactlogo.png";
import NodeLogo from "./assets/Nodelogo.png";
import MongoLogo from "./assets/MongoLogo.png";
import Xd from "./assets/Xd.png";
import Indesign from "./assets/Indesign.png";
import Figma from "./assets/Figma.png";
import insta from "./assets/instagram.png";
import lin from "./assets/linkedin.png";
import gh from "./assets/github.png";
import projects from "./projects";
import { NavHashLink } from "react-router-hash-link";
import { Workcard } from "./Components/styles/Workcard.styled";
import emailjs from "@emailjs/browser";
import Success from "./Components/Success";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./Components/sections/About";
import Skills from "./Components/sections/Skills";
import Work from "./Components/sections/Work";
 import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";
import wanofiLogo from "./assets/wanofiLogoWhite.svg"
function App() {
  const navigate = useNavigate();
  const [contactForm,setContactForm]=useState({
    name:"",
    email:"",
    message:""
  })
  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    let Greeting =
      document.getElementById("greeting") &&
      document.getElementById("greeting");
    let profession =
      document.getElementById("profession") &&
      document.getElementById("profession");

    // getting W bricks
    let wlt = document.getElementById("wlt");
    let wlm = document.getElementById("wlm");
    let wlb = document.getElementById("wlb");
    let wmlt = document.getElementById("wmlt");
    let wmlm = document.getElementById("wmlm");
    let wmlb = document.getElementById("wmlb");
    let wmrt = document.getElementById("wmrt");
    let wmrm = document.getElementById("wmrm");
    let wmrb = document.getElementById("wmrb");
    let wrt = document.getElementById("wrt");
    let wrm = document.getElementById("wrm");
    let wrb = document.getElementById("wrb");

    // getting a bricks
    let alt = document.getElementById("alt");
    let alm = document.getElementById("alm");
    let alb = document.getElementById("alb");
    let art = document.getElementById("art");
    let arm = document.getElementById("arm");
    let arb = document.getElementById("arb");

    //geting n bricks
    let nlt = document.getElementById("nlt");
    let nlm = document.getElementById("nlm");
    let nlb = document.getElementById("nlb");
    let nrt = document.getElementById("nrt");
    let nrm = document.getElementById("nrm");
    let nrb = document.getElementById("nrb");
    let nmt = document.getElementById("nmt");
    let nmm = document.getElementById("nmm");
    let nmb = document.getElementById("nmb");

    //getting o
    let o = document.getElementById("o");

    //gettoing f bricks
    let flt = document.getElementById("flt");
    let flm = document.getElementById("flm");
    let flb = document.getElementById("flb");
    let ft = document.getElementById("ft");
    let fb = document.getElementById("fb");

    //geting i bricks
    let it = document.getElementById("it");
    let im = document.getElementById("im");
    let ib = document.getElementById("ib");

    console.log(value);
    if (Greeting) {
      Greeting.style.marginLeft = 105 + value * -2 + "px";
    }
    if (profession) {
      profession.style.marginLeft = 105 + value * -2 + "px";
    }

    //W animation
    if (wlt) {
      wlt.style.transform =
        "translatey(" + -value * 0.3 + "px) rotate(" + value * 0.4 + "deg)";
      wlm.style.transform =
        "translatex(" + -value * 0.3 + "px) rotate(" + value + "deg)";
      wlb.style.transform =
        "translatey(" + -value * 0.3 + "px) rotate(" + value * 2 + "deg)";
      wmlt.style.transform =
        "translatey(" + -value * 0.3 + "px) rotate(" + value * 1.3 + "deg)";
      wmlm.style.transform =
        "translatex(" + -value + "px) rotate(" + value + "deg)";
      wmlb.style.transform =
        "translatey(" +
        value +
        "px) translatex(" +
        -value +
        "px) rotate(" +
        value +
        "deg)";
      wmrt.style.transform =
        "translatey(" + -value + "px) rotate(" + value + "deg)";
      wmrm.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg)";
      wmrb.style.transform =
        "translatey(" +
        value +
        "px) translatex(" +
        value +
        "px) rotate(" +
        value +
        "deg)";
      wrt.style.transform =
        "translatey(" +
        -value +
        "px) translatex(" +
        value +
        "px) rotate(" +
        value +
        "deg)";
      wrm.style.transform =
        "translatex(" +
        value +
        "px) translatey(" +
        value +
        "px) rotate(" +
        value +
        "deg)";
      wrb.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg)";

      //a animation
      alt.style.transform =
        "translatey(" +
        -value * 0.3 +
        "px) translatex(" +
        -value +
        "px) rotate(" +
        value +
        "deg)";
      alm.style.transform =
        "translatex(" + -value + "px) rotate(" + value + "deg)";
      alb.style.transform =
        "translatey(" +
        value +
        "px) translatex(" +
        -value +
        "px) rotate(" +
        value +
        "deg)";

      art.style.transform =
        "translatey(" +
        -value +
        "px) translatex(" +
        value +
        "px) rotate(" +
        value +
        "deg)";
      arm.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg)";
      arb.style.transform =
        "translatey(" +
        value +
        "px) translatex(" +
        value +
        "px) rotate(" +
        value +
        "deg)";

      //n animation
      nlt.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg)";
      nlm.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg)";
      nlb.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg)";
      nrt.style.transform =
        "translatex(" +
        value +
        "px) translatey(" +
        -value +
        "px) rotate(" +
        value +
        "deg)";
      nrm.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg)";
      nrb.style.transform =
        "translatex(" +
        value +
        "px) translatey(" +
        value +
        "px) rotate(" +
        value +
        "deg)";
      nmt.style.transform =
        "translatex(" +
        -value +
        "px) translatey(" +
        -value +
        "px) rotate(" +
        value +
        "deg)";
      nmm.style.transform =
        "translatex(" + -value + "px) rotate(" + value + "deg)";
      nmb.style.transform =
        "translatex(" +
        -value +
        "px) translatey(" +
        value +
        "px) rotate(" +
        value +
        "deg)";

      //o animation
      o.style.transform =
        "translatey(" + -value + "px) rotatex(" + value + "deg) ";

      //f animation
      flt.style.transform =
        "translatey(" + -value + "px) rotate(" + value + "deg) ";
      flm.style.transform =
        "translatey(" + value + "px) rotatex(" + value + "deg) ";
      flb.style.transform =
        "translatex(" + -value + "px) rotatex(" + value + "deg) ";
      ft.style.transform =
        "translatey(" + value + "px) rotate(" + value + "deg) ";
      fb.style.transform =
        "translatey(" + -value + "px) rotate(" + -value + "deg) ";
      //i animation
      it.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg) ";
      im.style.transform =
        "translatex(" + -value + "px) rotate(" + value + "deg) ";
      ib.style.transform =
        "translatex(" + value + "px) rotate(" + value + "deg) ";
    }
  });

  // mapping skill cards
  const card = projects.map((el) => {
    return (
      <Workcard
      href={el.active?el.link:null}
      target="_blank"
        className="work-card"
        style={{
          background: `url(${el.Image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="back">
          <h2 className="project-title">{el.title}</h2>
          <p>{el.Description}</p>
        </div>
      </Workcard>
    );
  });

  //Handleing Skills
  let init = 0;
  const handelSkills = () => {
    const frontEnd = document.querySelector(".front-end");
    const backEnd = document.querySelector(".back-end");
    const uiUx = document.querySelector(".UI-UX");
    const frontList = document.querySelector(".frontend-list");
    const backList = document.querySelector(".backend-list");
    const uiuxList = document.querySelector(".uiux-list");
    init += 1;
    if (init > 2) {
      init = 0;
    }
    if (init === 0) {
      uiUx.style.display = "none";
      uiuxList.style.display = "none";
      frontList.style.display = "grid";
      frontEnd.style.display = "block";
    }
    if (init === 1) {
      frontEnd.style.display = "none";
      frontList.style.display = "none";
      backList.style.display = "grid";
      backEnd.style.display = "block";
    }
    if (init === 2) {
      backEnd.style.display = "none";
      backList.style.display = "none";
      uiUx.style.display = "block";
      uiuxList.style.display = "grid";
    }
  };

  //handling the email

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      emailjs.sendForm(
        "service_p9b7o4f",
        "template_tsh9r3r",
        e.target,
        "iVV3BBRo7KB-8jY06",
      );
      setContactForm({
      name:"",
      email:"",
      message:""
    })
      toast.success("Email sent")
    } catch (error) {
      toast.error("Something went wrong, Please Try again later")
    }
  };

  return (
    <div className="app">
      <ToastContainer/>
      <nav>
        <Link to="/"><img src={wanofiLogo} alt="Wanofi Israel" width={70}/></Link>
        <ul>
          <NavHashLink className="unlink" to="#home">
            Home
          </NavHashLink>
          <NavHashLink className="unlink" to="#about">
            About
          </NavHashLink>
          <NavHashLink className="unlink" to="#skills">
            Skills
          </NavHashLink>
          <NavHashLink className="unlink" to="#work">
            Work
          </NavHashLink>
          <NavHashLink className="unlink" to="#contact">
            Contact
          </NavHashLink>
        </ul>
      </nav>
      <header className="header" id="home">
        <div className="greeting" id="greeting">
          <p>Hi I'm</p>
        </div>
        <div className="name-container">
          <div className="name w">
            <div className="name-left-W">
              <div className="top brick" id="wlt"></div>
              <div className="middle brick" id="wlm"></div>
              <div className="bottom brick" id="wlb"></div>
            </div>
            <div className="name-middle-left">
              <div className="top brick" id="wmlt"></div>
              <div className="middle brick" id="wmlm"></div>
              <div className="bottom brick" id="wmlb"></div>
            </div>
            <div className="name-middle-right">
              <div className="top brick" id="wmrt"></div>
              <div className="middle brick" id="wmrm"></div>
              <div className="bottom brick" id="wmrb"></div>
            </div>
            <div className="name-right-W">
              <div className="top brick" id="wrt"></div>
              <div className="middle brick" id="wrm"></div>
              <div className="bottom brick" id="wrb"></div>
            </div>
          </div>
          <div className="name a">
            <div className="name-middle-left">
              <div className="top brick" id="alt"></div>
              <div className="middle brick" id="alm"></div>
              <div className="bottom brick" id="alb"></div>
            </div>
            <div className="name-middle-right">
              <div className="top brick" id="art"></div>
              <div className="middle brick" id="arm"></div>
              <div className="bottom brick" id="arb"></div>
            </div>
          </div>
          <div className="name n">
            <div className="name-left-W">
              <div className="top brick" id="nlt"></div>
              <div className="middle brick" id="nlm"></div>
              <div className="bottom brick" id="nlb"></div>
            </div>
            <div className="name-middle-right">
              <div className="top brick" id="nmt"></div>
              <div className="middle brick" id="nmm"></div>
              <div className="bottom bn brick" id="nmb"></div>
            </div>
            <div className="name-right-W">
              <div className="top brick" id="nrt"></div>
              <div className="middle brick" id="nrm"></div>
              <div className="bottom brick" id="nrb"></div>
            </div>
          </div>
          <div className="name o">
            <div className="brick oo" id="o"></div>
          </div>
          <div className="name f">
            <div className="name-right-W">
              <div className="top brick" id="flt"></div>
              <div className="middle brick" id="flm"></div>
              <div className="bottom brick" id="flb"></div>
            </div>
            <div className="f-parallel">
              <div className="f-top" id="ft"></div>
              <div className="f-bottom" id="fb"></div>
            </div>
          </div>
          <div className="name i">
            <div className="name-right-W">
              <div className="top brick" id="it"></div>
              <div className="middle brick" id="im"></div>
              <div className="bottom brick" id="ib"></div>
            </div>
          </div>
        </div>
        <div className="profession" id="profession">
          <h1>Full Stack Developer</h1>
        </div>
        <div className="social-media">
          <Link to="https://linkedin.com/in/wanofi-israel-3312b9285">
            <img src={lin} alt="insta" class="icon" />
          </Link>
          <Link to="https://github.com/wanofi-israel/">
            {" "}
            <img src={gh} alt="github" class="icon" />
          </Link>
        </div>
      </header>
      <About />
      <Skills
        handelSkills={handelSkills}
        Html={Html}
        Css={Css}
        Js={Js}
        ReactLogo={ReactLogo}
        NodeLogo={NodeLogo}
        MongoLogo={MongoLogo}
        Xd={Xd}
        Indesign={Indesign}
        Figma={Figma}
      />

      <Work card={card}/>
      <section className="section-contact " id="contact">
        <h1 className="section-title contact">Contact</h1>
        <div className="contact-form">
          <div className="contact-list">
            <div className="contact-item">
              <div className="call">
                <LocalPhoneIcon
                  sx={{
                    color: "rgb(76,252,109)",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                />
                <h2>Call</h2>
              </div>
              <div className="phone-num">
                <p>+251924355889</p>
                <p>+251994070613</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="call">
                <LocalPostOfficeIcon
                  sx={{
                    color: "rgb(76,252,109)",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                />
                <h2>Mail</h2>
              </div>
              <div className="phone-num">
                <p>Wanofiisrael17@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="call">
                <FmdGoodIcon
                  sx={{
                    color: "rgb(76,252,109)",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                />
                <h2>Address</h2>
              </div>
              <div className="phone-num">
                <p>Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>

          {/* This is contact form  */}

          <form onSubmit={sendEmail}>
            <div className="personal-detail">
              <div className="inputs">
                <label className="label" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  name="sender_name"
                  id="name"
                  placeholder="Name"
                  value={contactForm.name}
                  onChange={(e)=>{
                    setContactForm(prev=>{
                      return{
                        ...prev,
                        [e.target.name]:e.target.value
                      }
                    })
                  }}
                />
              </div>
              <div className="inputs">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email_from"
                  id="email"
                  placeholder="Email"
                  value={contactForm.email}
                  onChange={(e)=>{
                    setContactForm(prev=>{
                      return{
                        ...prev,
                        [e.target.name]:e.target.value
                      }
                    })
                  }}
                />
              </div>
            </div>
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
              value={contactForm.message}
              onChange={(e)=>{
                setContactForm(prev=>{
                  return{
                    ...prev,
                    [e.target.name]:e.target.value
                  }
                })
              }}
            ></textarea>
            <button className="send-btn">Send</button>
          </form>
        </div>
      </section>
      <footer>
        <h3>Wanofi Israel</h3>
        <div className="social-medias">
          <Link to="https://linkedin.com/in/wanofi-israel-3312b9285">
            <img src={lin} alt="insta" class="icon" />
          </Link>
          <Link to="https://github.com/wanofi-israel/">
            {" "}
            <img src={gh} alt="github" class="icon" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
