import './index.css'

const Thumbnail = props => {
  const {item, functionToAdd, idToMatch} = props
  const clickedFunction = () => {
    functionToAdd(item.id)
  }
  const classNameToAdd = idToMatch === item.id ? 'selecte-img' : ''
  return (
    <li key={item.id}>
      <button
        type="button"
        className={`btn ${classNameToAdd}`}
        onClick={clickedFunction}
      >
        <img
          className="thumbnail"
          src={item.thumbnailUrl}
          alt={item.thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default Thumbnail
