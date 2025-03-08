import './index.css'

type InputProps = {
  type: 'email' | 'password';
  placeholder: string;
}
export default function Input({type, placeholder}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input"
    />
  )
}

