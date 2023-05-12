import { ReactComponent as PlaceHolder} from '../../icons/code.svg'
export const TechnologyTile = ({icon, name}) => {
    return (
        <div className="techTile">
            <div className='techTile--icon'>{icon}</div>
            <p>{name}</p>
        </div>
    )
}

TechnologyTile.defaultProps = {
    icon: <PlaceHolder /> ,
    name: "Empty",
}
export default TechnologyTile