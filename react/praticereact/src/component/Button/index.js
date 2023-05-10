import "./Button.css";
const Button = (props) => {
  const { btnName } = props;
  return (
    <>
      {/* <div className="btn"> */}
      <input type="button" value={btnName} className="btn1" />
      {/* </div> */}
    </>
  );
};

export default Button;
