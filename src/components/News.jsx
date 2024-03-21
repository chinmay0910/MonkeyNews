import { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner"
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=> {
    
    const [articles, setArticles] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);

    }


    useEffect(() => {
        // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])

    const handleNext = async () => {
        // this.setState((prevState )=>({page: this.state.page+1}),
        setPage(page+1)
        props.setProgress(30);
        setLoading(true);
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`)
        const data = await res.json()
        props.setProgress(70);
        setArticles(articles.concat(data.articles));
        setTotalResults(data.totalResults)
        setLoading(false)
        props.setProgress(100);
    }
    // handlePrev = async () => {
    //     this.setState((prevState )=>({page: this.state.page-1}),
    //     ()=>{
    //         this.changeNews();
    //     }
    // )
        
    // }

    // const changeNews = async () => {
    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
    //         setLoading(true)
    //         let data = await fetch(url);
    //         const res = data.json();
    //         setArticles(res.articles)
    //         setTotalResults(res.totalResults);
    //         setLoading(false);
    //     // this.setState({ articles: data.articles,totalArticle: data.totalResults, loading: false})
    // }
    

        return(
            <div className="m-1">
                <h2 className="text-center m-2">MonkeyNews - Top Headlines - {props.category.charAt(0).toUpperCase()+props.category.slice(1,props.category.length)}</h2>

                
                <InfiniteScroll
                    dataLength={articles.length}
                    next={handleNext}
                    hasMore={articles.length !== totalResults}
                    loader={loading && <Spinner/>}
                >
                <div className="row my-5 mx-auto">
                {articles.map((ele) => (
                    <div className="col-md-auto mb-4">
                            <NewsItem 
                            key={ele.url?ele.url:"id"}
                            title={ele.title ? ele.title : ""} 
                            url={ele.url}
                            urlToImage = {ele.urlToImage}
                            description={ele.description==null? "ReadMore on folowing link..." : ele.description }
                            />
                    </div>
                            )
                            )}
                </div>
                </InfiniteScroll>

                {/* <div className="buttons d-flex">
                    <button className="btn btn-dark me-auto" onClick={this.handlePrev} disabled={this.state.page === 1}>prev</button>
                    <button className="btn btn-dark" onClick={this.handleNext} disabled={this.state.page>=(Math.ceil(totalArticle/props.pageSize))}>next</button>
                </div> */}
            </div>
        )
    }


export default News;