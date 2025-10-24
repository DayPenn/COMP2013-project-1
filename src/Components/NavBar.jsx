/* 2. NavBar is the top presentation container 
    that displays the app’s title, a username greeter, 
    and a cart icon that indicates whether the cart is full, 
    shown by the red dot over the cart icon or empty. 
Z's CSS Class Names:
.NavBar
.NavDiv
.NavTitle
.NavCart
.NavUser

*/

export default function NavBar({cart, emptyCartIMG, fullCartIMG}) {
    return (
        <div className="NavBar">
            <div className="NavDiv">
                <div className="NavUser">Hello, Username!</div>
                <div className="NavTitle"><h1>Grocery APP</h1>
                <div className="NavCart">
                    <img
                        src={cart.length === 0 
                            ? emptyCartIMG 
                            : fullCartIMG}
                        alt=""
                        height="50px"
                    />
                </div>
                </div>
            </div>            
        </div>
    );
}