import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Diary</h1>
      <div>{`이곳은 ${id}번 일기 상세 페이지 입니다.`}</div>
    </div>
  );
};

export default Diary;
