import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ReferCont from "../includes/ReferCont";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import axios from "axios";

// function Refer() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <ReferCont />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

// 클래스형
//변수는 :데이터 저장하는것 (숫자, 문자, booleaan, 객체, 배열, 함수, null, undefinded 저장 - 데이터타입: 자료형)
//변수: 지역변수 + 전역변수 + 매개변수 -- > 내부함수 --> 클로저(지역함수+전역함수)
class Refer extends React.Component {
  state = {
    refers: [],
  };

  getRefers = async () => {
    const {
      data: {
        data: { htmlRefer },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/react2022/src/assets/json/refer.json"
    );
    // console.log(html);
    //로딩소스를 가져와서 완료되면 끝나야되기 때문에 isLoading: false를 써야함
    this.setState({ refers: htmlRefer });
  };

  // 클래스일때는 componentDidMount가 있어야함!!
  componentDidMount() {
    this.getRefers();
  }

  render() {
    const { refers } = this.state;

    return (
      <>
        <Header />
        <Contents>
          <Title title={["Reference", "book"]} />
          <section className="refer__cont">
            <div className="container">
              <div className="refer__inner">
                <h2>html</h2>
                <div className="refer__list">
                  {refers.map((refer) => (
                    <ReferCont
                      key={refer.id}
                      id={refer.id}
                      title={refer.title}
                      desc={refer.desc}
                      use={refer.use}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
          <Contact />
        </Contents>
        <Footer />
      </>
    );
  }
}

export default Refer;
