import StyleBlock from './NewsBlock.module.css'

const NewsBlock = () => {
    return (
        <div className={StyleBlock.div}>
            News 
            <span className={StyleBlock.span}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed illo totam quod quae modi
                error, minus accusamus hic beatae officiis temporibus dolore molestias qui voluptatem maiores
                ipsam dolores voluptate quia.
            </span>
        </div>
    )
}

export default NewsBlock;