export default function NavBar({ cart, emptyCartIMG, fullCartIMG }) {
  return (
    <div className="NavBar">
      <div className="NavUser">Hello, Username!</div>
      <div className="NavTitle">
        <h1>Grocery APP</h1>
      </div>
      <div className="NavCart">
        <img
          src={cart.length === 0 ? emptyCartIMG : fullCartIMG}
          alt=""
          height="50px"
        />
      </div>
    </div>
  );
}
