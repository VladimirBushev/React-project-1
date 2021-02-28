import StyleNews from './News.module.css'
import NewsBlock from './NewsBlock.jsx'

const News = () => {
    return (
        <div className={StyleNews.form}>
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
        </div>
    )
}

export default News;