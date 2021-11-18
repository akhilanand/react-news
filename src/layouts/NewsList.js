import News from "./News"

const NewsList = ({newsList}) => {
    return (
        <div className="secwrapper">
			<section>
			{
                newsList.map((news)=>(
                    <News key={news.publishedAt} news={news} />
                ))
            }
			</section>
		</div>
    )
}

export default NewsList
