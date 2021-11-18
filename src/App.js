import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import SearchBox from "./layouts/SearchBox";
import NewsList from "./layouts/NewsList";
import NoNews from "./layouts/NoNews";
import { useState, useEffect } from "react"


const App = () => {

  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    let url = 'https://gnews.io/api/v4/top-headlines?token=3b413a09fc52ddca455df7efcf30823a'
    const getNews = async () => {
      const newsFromServer = await fetchNews(url)
      newsList.length > 0 ? setNewsList(newsFromServer) : setNewsList([])
    }
    getNews()
  })

  const fetchNews = async (url) => {
    const res = await fetch(url, {method: "GET"})
    const data = await res.json()
    return data.articles
  }

  const searchTerm = (search) => { 
    var query = search.search;
    const getNews = async () => {
      var url = 'https://gnews.io/api/v4/search?q='+query+'&token=3b413a09fc52ddca455df7efcf30823a'
      const newsFromServer = await fetchNews(url)
      newsList.length > 0 ? setNewsList(newsFromServer) : setNewsList([])
    }
    getNews()
  }


  return (
    <>
    <Header />
    <SearchBox onFilter={searchTerm} />
    { newsList.length > 0 ? <NewsList newsList={newsList} /> : <NoNews /> }
    <Footer />
    </>
  );
}

export default App;
