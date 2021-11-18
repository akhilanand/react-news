const News = ({news}) => {
    return (
        <>
            <article className="news-section">
                <a href={news.url}><img className='news-image' src={news.image} alt=""/></a>
                <br/>
                <img src="images/featured.png" alt="" id="featuredico"/>
                <h1>{news.title}</h1><br/>
                <p>{news.description}</p><br/>
                <p>{news.content}</p>
                <a href={news.url} className="readmore">Read more</a>
            </article>
        
        </>
    )
}

export default News
