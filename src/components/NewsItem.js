import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                    {source}
                </span>
                <img src={imageUrl ? imageUrl : "https://fifpro.org/media/fhmfhvkx/messi-world-cup.jpg?center=0.31512414378031967,0.48356841796117644&mode=crop&heightratio=0.64&width=1600&rnd=133210253587130000"} className="card-img-top" alt="couldn't load" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className='text-muted'>By {author ? author : "Unknown"} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
