import { useSelector } from "react-redux";

function HomePage() {
  const { content } = useSelector((state) => state.mylang);

  return (
    <div>
      <h1>{content.welcome_message}</h1>
    </div>
  );
}
export default HomePage;
