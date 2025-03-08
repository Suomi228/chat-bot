import "./index.css";
import Input from "../../shared/ui/input/Input";
import Button from "../../shared/ui/button/Button";
import { useForm } from "react-hook-form";
type User = {
  email: string;
  password: string;
};

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, submitCount  },
  } = useForm<User>({
    mode: "onSubmit",
  });
  return (
    <div className="auth-form">
      <div className="auth-form__inner">
        <div className="auth-form__text-cross">
          <span className="auth-form__text">Авторизация</span>{" "}
          <div className="cross"></div>
        </div>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className="auth-form__bottom">
            <div className="auth-form__text-input">
              <label className="auth-form__text--small">E-Mail</label>
              <Input
                type="email"
                placeholder="Ваш E-Mail"
                hasError={isSubmitted && !!errors.password}
                triggerKey={submitCount} 
                {...register("email", {
                  required: {
                    value: true,
                    message: "E-Mail не должен быть пустым",
                  },
                })}
              ></Input>
              <span className="auth-form__error">
                {errors.email?.message}
              </span>
            </div>
            <div className="auth-form__text-input">
              <label className="auth-form__text--small">Пароль</label>
              <Input
                type="password"
                placeholder="Ваш пароль"
                hasError={isSubmitted && !!errors.password}
                triggerKey={submitCount} 
                {...register("password", {
                  required: {
                    value: true,
                    message: "Пароль не должен быть пустым",
                  },
                  minLength: {
                    value: 8,
                    message: "Пароль должен иметь минимум 8 символов",
                  },
                })}
              ></Input>
              <span className="auth-form__error">
                {errors.password?.message}
              </span>
            </div>
            <Button type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
