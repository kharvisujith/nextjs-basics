import Dummy from "../components/Dummy/Dummy";
import styes from "./demoscreen.module.css";
const demo = () => {
  return (
    <>
      <p className={styes.text}>demo page</p>
      <p style={{ color: "blue" }}>para 2</p>
      <Dummy />
    </>
  );
};
export default demo;
