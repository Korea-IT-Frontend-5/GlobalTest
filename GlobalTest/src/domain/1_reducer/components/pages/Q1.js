// src/pages/contexts/ContextQ1/organism/ReducerQ1Page.js
import NavigateButton from "../../../../components/NavigateButton";
import ContextProvider from "../../../../store/1_reducer";
import Q1Form from "../atom/Form";
import ReducerQ1List from "../atom/List";

const ReducerQ1Page = () => {
  /* 
      문제 1)
      로직 분리하기
    
      재료 추가 로직 분리하기

      1) 재료 추가 로직 작성하기
      2) 재료 삭제 로직 작성하기

      3) 위 로직을 현재 컴포넌트가 아닌 비즈니스 로직을 분리하여
          src/store/1_reducer.js에 구현해보세요
    */


  return (
    <>
        <h2>문제 1</h2>
    <ContextProvider>
        <table>
          <thead>
            <tr>
              <th>재료</th>
              <th>가격</th>
            </tr>
          </thead>
          <ReducerQ1List />
        </table>
        <Q1Form />
        <NavigateButton isFistPage to={"/2_context/q1"} />
    </ContextProvider>
      </>
  );
};
export default ReducerQ1Page;
