import "../styles/banner.css"

function Banner(props) {
    return (
        <header className="banner-header" 
            style={{
                backgroundImage: `url(${props.image})`
            }}
        >
            <div className="banner-layer">
                {props.text}
            </div>
        </header>
    );
}

export default Banner;