import "../assets/styles/navbar.css";
import Dropdown from "./Dropdown";
import logo from "../images/logoSP.png";
import placeholder from "../images/placeholder.png";

export default function Navbar() {
   return (
      <div className="navbar">
         <div className="navbar--leftSide">
            <img className="navbar--image" src={placeholder} />
            <h2 className="navbar--mainText">생명샘 장로교회</h2>
         </div>

         <div className="navbar--rightSide">
            <a>홈</a>
            <Dropdown name="교회 안내" linkNames={["교회 소식", "목회 철학"]} />
            <Dropdown
               name="설교"
               linkNames={["주일 설교", "기타 설교", "에베소서 강해"]}
            />
            <a>매일성경</a>
            <a>박화신 목사 컬럼</a>
            <Dropdown
               name="갤러리"
               linkNames={["동영상들", "최근 사진들", "보관된 오랜 사진들"]}
            />
         </div>
      </div>
   );
}
