import "./index.css";

type ButtonProps = {
  type: "submit";
  children?: React.ReactNode;
};
export default function Button({ type, children }: ButtonProps) {
  return (
    <button type={type} className="button--blue">
      <div className="button-content">
        <span>Войти</span>
        {children}
      </div>
    </button>
  );
}
