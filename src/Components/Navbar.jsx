function Navbar({ setPage }) {
  return (
    <div className="navbar">
      <button onClick={() => setPage("home")}>Home</button>{" "}
      <button onClick={() => setPage("about")}>About</button>{" "}
      <button onClick={() => setPage("contact")}>Contact</button>
    </div>
  );
}

export default Navbar;
