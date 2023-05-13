
export const FilterBar = ({ active }) => {
    return (
        <div className="filterBar">
            <button className="filterBar--button button--pink">ALL</button>
            <button className="filterBar--button">WEB APPS</button>
            <button className="filterBar--button">JAVA</button>
            <button className="filterBar--button">C++</button>
            <button className="filterBar--button">MOBILE APPS</button>
        </div>
    )
}
FilterBar.defaultProps = {
    active: 'all'
}

export default FilterBar