import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Title from "../layout/Title";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Contact from "../layout/Contact";
// import axios from "axios";

// // function Portfolio() {
// //   return (
// //     <>
// //       <Header />
// //       <Contents>
// //         <PortCont />
// //       </Contents>
// //       <Footer />
// //     </>
// //   );
// // }

// //클래스형컴포넌트(함수형의 집합체라고 생각하기)
// //기본문법: class Portfolio extends React.Component
// //기본적으로 변수이름을 복수로 많이씀(ports)
// //생명주기 - 사이트로딩이끝났을때, 다른사이트로 이동했을때, 사이트 데이터를 다 다운받았을 때
// //state를 변수라 생각하기
// class Portfolio extends React.Component {
//   state = {
//     ports: [],
//   };

//   //선언적 함수(화살표함수로 네개 다 바꿀 수 있게 하기)
//   //익명 함수
//   //매개변수 함수
//   //리턴값 함수

//   //배열 데이터 => for, forEach, for in, for of, find, map, filter, some, array.from
//   // 데이터가 바뀌면 setState가 감지해서  {ports}에 넣어줌
// 변수에 저장this.setState({ ports });
//   getPorts = async () => {
//     const {
//       data: {
//         data: { ports },
//       },
//     } = await axios.get(
//       "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json"
//     );
//     //console.log(data.data.data.ports);
//     this.setState({ ports });
//   };

//   componentDidMount() {
//     this.getPorts("dd");
//   }

//   render() {
//     // 객체구조분활 할당
//     const { ports } = this.state;
//     return (
//       <>
//         <Header />
//         <Contents>
//           <PortCont ports={ports} />
//         </Contents>
//         <Footer />
//       </>
//     );
//   }
// }

// 첫번째: 변수설정 const ports
// 두번째: 변수에 저장 => const [ports, setPorts] = useState([]);    ports는 변수, setPorts:메소드
// 세번째: 변수값에 넣어서 전달하기   <PortCont ports={ports} />
function Portfolio() {
  // 배열 구조 분해 할당
  const [ports, setPorts] = useState([]);

  useEffect(() => {
    const requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      "https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json",
      requestOption
    )
      .then((response) => response.json())
      // .then((result) => console.log(result))
      .then((result) => setPorts(result.data.ports))
      .then((error) => console.log("error", error));
  }, []);

  return (
    <>
      <Header />
      <Contents>
        <Title title={["portfolio", "site"]} />
        <PortCont ports={ports} />
        <Contact />
      </Contents>
      <Footer />
    </>
  );
}

export default Portfolio;
