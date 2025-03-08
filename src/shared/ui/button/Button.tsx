import "./index.css";

type ButtonProps = {
  type: 'submit';
};
export default function Button({ type }: ButtonProps) {
  return <button type={type} className="button--blue">Войти</button>;
}
