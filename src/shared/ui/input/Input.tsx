import './index.css'

type InputProps = {
  type: 'email' | 'password' | 'text';
  placeholder: string;
  hasError?: boolean;
  triggerKey?: number;
}
export default function Input({type, placeholder, hasError, triggerKey, ...rest}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      {...rest}
      className={`input ${hasError ? 'input--error' : ''}`}
      height={54}
      key={triggerKey} 
    />
  )
}

