const ContextQ1Detail2 = ({ detail2, setDetail2 }) => {

  return (
    <>
      <h2>ContextQ1Detail2</h2>
      <button onClick={() => setDetail2((prev) => !prev)}>{detail2 ? "숨기기" : "보이기"}</button>
    </>
  );
};
export default ContextQ1Detail2;
