import RootLayoutProps from "./props.ts"

const RootLayout = (
  {
    children
  }: RootLayoutProps
) => {
  return <div style={{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem"
  }}>
    {children}
  </div>
}

export default RootLayout