import { NavLink } from "react-router-dom";
export const Navbar = () => {
  /**
   * M-2 - Using Javascript.
   * Navlink component will set a property called isActive which can be destructured from
   * the function parameter.
   *
   * isActive will be set to true if the link is indeed the current route.
   * Thus, we can use this to conditionally apply styles.
   *
   * Thus, to set a different style on the active link make use of the Navlink
   * component. we can wither make use of the active class that is applied or
   * isActive boolean flag injected into the style function.
   */
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav>
      <NavLink style={navLinkStyles} to="/">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="/about">
        About
      </NavLink>
    </nav>
  );
};
