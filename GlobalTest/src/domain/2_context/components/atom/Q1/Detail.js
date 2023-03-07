import { useContext, useEffect, useState } from "react";
import { IsModalContext } from "../../../../../store/2_context";
import ContextQ1Detail2 from "./Detail2";

const ContextQ1Detail = () => {
  const { setIsModalOpen } = useContext(IsModalContext); // useContext를 통해 IsModalContext(Context명)라는 저장소에 있는 value를 가져와서 사용하자

  const [detail, setDetail] = useState(false);    // 첫번째 컴포넌트의 버튼 state
  const [detail2, setDetail2] = useState(false);  // 두번째 컴포넌트의 버튼 state

  // useEffect를 이용해 의존성 배열에 있는 값이 변경될때마다 실행
  useEffect(() => {
    if (detail && detail2) return setIsModalOpen(true);
    if (!detail || !detail2) return setIsModalOpen(false);
  }, [detail, detail2]);

  return (
    <>
      <h2>ContextQ1Detail</h2>
      <button onClick={() => setDetail((prev) => !prev)}>
        {detail ? "숨기기" : "보이기"}
      </button>
      <ContextQ1Detail2 detail2={detail2} setDetail2={setDetail2} />
    </>
  );
};
export default ContextQ1Detail;
