function Followings({ item }) {
    return (
        <a href="#" className="link">
            <div className="following-singer">
                <div className="img-side">
                    <img src={item.image} />
                </div>
                <div className="name-side">
                    <span>{item.name}</span>
                    <button>
                        <img src="/icons/play.svg" alt="Play" />
                    </button>
                </div>
            </div>
        </a>
    )
}

export default Followings