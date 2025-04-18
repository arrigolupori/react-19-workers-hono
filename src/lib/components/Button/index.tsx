import ButtonProps from "./props.ts"

const Button = (
  {
    onClick,
    children
  }: ButtonProps
) => {
  return <button
    onClick={onClick}
    style={{
      display: "block",
      width: "fit-content"
    }}
  >
    {children}
  </button>
}

export default Button