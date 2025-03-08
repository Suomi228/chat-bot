import "./index.css";
import Input from "../../shared/ui/input/Input";
import Button from "../../shared/ui/button/Button";
export default function AuthForm() {
  return (
    <div className="auth-form">
      <div className="auth-form__inner">
        <div className="auth-form__text-cross">
          <span className="auth-form__text">Авторизация</span>{" "}
          <div className="cross"></div>
        </div>
        <div className="auth-form__bottom">
          <div className="auth-form__text-input">
            <span className="auth-form__text--small">E-Mail</span>
            <Input type="email" placeholder="Ваш E-Mail"></Input>
          </div>
          <div className="auth-form__text-input">
            <span className="auth-form__text--small">Пароль</span>
            <Input type="password" placeholder="Ваш пароль"></Input>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
