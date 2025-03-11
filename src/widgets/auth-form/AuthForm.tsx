import "./index.css";
import Input from "../../shared/ui/input/Input";
import Button from "../../shared/ui/button/Button";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../shared/api/hooks.ts";
import { signIn, selectIsAuth } from "../../shared/api/slices/auth.ts";
import { Navigate } from "react-router-dom";
import { API_TOKEN } from "../../shared/consts/consts.ts";
import { useState } from "react";
import spin from "../../assets/loader.svg";
import { User } from "../../shared/types/type.ts";

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, submitCount },
  } = useForm<User>({
    mode: "onSubmit",
    defaultValues: {
      email: "suomi55@test.com",
      password: "1002103129",
    },
  });
  const dispatch = useAppDispatch();
  const isAuth = useSelector(selectIsAuth);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: User) => {
    setIsLoading(true);
    try {
      const response = await dispatch(signIn(data));
      localStorage.setItem("token", API_TOKEN);
      console.log(response);
    } catch (error) {
      window.alert("Произошла ошибка при авторизации");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(isAuth + " is authenticated");
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div className="auth-form">
      <div className="auth-form__inner">
        <div className="auth-form__text-cross">
          <span className="auth-form__text">Авторизация</span>{" "}
          <div className="cross"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              <span className="auth-form__error">{errors.email?.message}</span>
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
            <Button type="submit">
              {isLoading && (
                <img
                  src={spin}
                  alt="Loading"
                  width={24}
                  height={24}
                  className="animate-spin"
                />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
