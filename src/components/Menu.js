import Banner from "./banner";
import MenuPic from "../images/pho_menu.jpg";
import "../styles/menu.css";
function Menu() {
    return (
        <div>
            <Banner text="Menu" image={MenuPic} />
            <div className="menu-content">
                <div className="pho-menu">
                    <h1>Pho</h1>
                    <div className="menu-item">
                        <div className="item">
                            <p>Pho Dac Biet</p>
                            <p>$10.00</p>
                        </div>
                        <p className="item-desc">In house special beef noodle soup</p>
                    </div>
                    <div className="menu-item">
                        <div className="item">
                            <p>Pho Bo Tai</p>
                            <p>$10.00</p>
                        </div>
                        <p className="item-desc">Rare beef noodle soup</p>
                    </div>
                    <div className="menu-item">
                        <div className="item">
                            <p>Pho Bo Nam</p>
                            <p>$10.00</p>
                        </div>
                        <p className="item-desc">Well done beef noodle soup</p>
                    </div>
                    <div className="menu-item">
                        <div className="item">
                            <p>Pho Ga</p>
                            <p>$10.00</p>
                        </div>
                        <p className="item-desc">Chicken noodle soup</p>
                    </div>
                    <div className="menu-item">
                        <div className="item">
                            <p>Pho Bo Vien</p>
                            <p>$10.00</p>
                        </div>
                        <p className="item-desc">Beef ball noodle soup</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;