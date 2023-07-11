// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <li className="img-card-container">
      <img className="img" src={imgUrl} alt={name} />
      <p className="img-name">{name}</p>
    </li>
  )
}
export default DestinationItem
