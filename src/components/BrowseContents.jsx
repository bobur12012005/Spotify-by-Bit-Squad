function BrowseContents({ item }) {
    return (
        <div className="content">
            <span>{item.topic}</span>
            <img src={item.image} />
        </div>
    )
}

export default BrowseContents