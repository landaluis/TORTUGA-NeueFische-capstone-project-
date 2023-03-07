import Navigation from "../Navigation/index";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Navigation />
    </>
  );
}
