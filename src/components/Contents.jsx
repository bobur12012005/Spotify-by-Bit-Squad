function Contents({ item }) {
    return (
        <a href='#'>
            <div className="content">
                <div className="content-img">
                    <img src={item.image} />
                </div>
                <div className="content-data">
                    <span className="title">{item.title || item.name}</span>
                    <span className="name">{item.type || item.name}</span>
                </div>
            </div>
        </a>
    )
}

export default Contents