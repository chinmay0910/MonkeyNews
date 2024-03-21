import React from "react";
const NewsItem =(props)=> {
        const {title ,description, author, publishedAt, url, urlToImage} = props;
        return(
            <div className="card p-3 mx-auto " style={{width: "18rem", height: "33rem"}}>
                    <img src={urlToImage==null? "https://imgs.search.brave.com/q_LZTFgErrKcszZTB4ZoSPgh2nr5L2GDdOfrTr6QEXc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZWZhdWx0XzEw/NDg5NDQtMTU3Mzk4/OS5qcGc":urlToImage} className="card-img-top" style={{height: "10rem"}} alt="..."/>
                    <div className="card-body">
                    <a href={url} className="card-title text-decoration-none"><h5>{title}</h5></a>
                        <p className="card-text">{description.length > 100 ? description.slice(0,100)+"...": description}</p>
                    </div>
                    <p className="card-text">{publishedAt === ""? publishedAt : new Date(publishedAt).toDateString()}</p>
                    <a href={url} className="btn btn-sm btn-info w-50">Read More</a>
                </div>

        )
}

export default NewsItem;