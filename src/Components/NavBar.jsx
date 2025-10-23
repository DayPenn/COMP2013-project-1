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


CART images in assets 
=> use turnary::(cart > 0)?redDot : emptyCart
*/

export default function NavBar() {
    return (
        <div className="NavBar">
            <div className="NavDiv">
                <div className="NavUser">Hello, Username!</div>
                <div className="NavTitle"><h1>Grocery APP</h1>
                <div className="NavCart">
                    {/* put cart image options from assets empty/full */}
                </div>
                </div>
            </div>            
        </div>
    );
}