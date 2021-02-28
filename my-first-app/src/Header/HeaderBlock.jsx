import HeaderStyle from './HeaderBlock.module.css';

const HeaderBlock = (props) => {
    return (
        <div className={HeaderStyle.block}><span>{props.value}</span></div>
    )
}

export default HeaderBlock;

