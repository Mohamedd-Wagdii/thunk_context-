import { useSelector } from "react-redux";

function AboutPage() {
  const { content } = useSelector((state) => state.mylang);

  return (
    <div>
      <h1>{content.about}</h1>
    </div>
  );
}
export default AboutPage;
