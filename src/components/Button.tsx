export enum ButtonColor {
  RED = "danger",
  GREEN = "success",
}

interface IButton {
  text: string;
  onClick: () => void;
  buttonColor: ButtonColor;
}

const Button = (props: IButton) => {
  const { text, onClick, buttonColor } = props;
  return (
    <button
      onClick={onClick}
      className={`btn btn-outline-${buttonColor} float-end`}
    >
      {text}
    </button>
  );
};

export default Button;
