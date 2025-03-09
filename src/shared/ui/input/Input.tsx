import "./index.css";

type InputProps = {
  type: "email" | "password" | "text";
  placeholder: string;
  hasError?: boolean;
  triggerKey?: number;
  fontSize?: number;
  fontWeight?: number;
  height?: number;
  children?: React.ReactNode;
};
export default function Input({
  type,
  placeholder,
  hasError = false,
  fontSize = 16,
  fontWeight = 400,
  height = 54,
  triggerKey,
  children,
  ...rest
}: InputProps) {
  const inputStyle: React.CSSProperties = {
    fontSize: `${fontSize}px`,
    fontWeight: fontWeight,
    height: `${height}px`,
    padding: children ? "24px 20px" : "16px",
  };
  return (
    <div className="input-container" style={{ height: `${height}px` }}>
      <input
        type={type}
        placeholder={placeholder}
        {...rest}
        className={`input ${hasError ? "input--error" : ""}`}
        style={inputStyle}
        key={triggerKey}
      />

      {children && <div className="input-children-wrapper">{children}</div>}
    </div>
  );
}
