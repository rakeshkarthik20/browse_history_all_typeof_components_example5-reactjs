import './index.css'

const BrowserElement = props => {
  const {HistoryListItem, deletedItem, uniqueValue} = props
  const {timeAccessed, logoUrl, title, domainUrl} = HistoryListItem

  const deleteItem = () => {
    deletedItem(uniqueValue)
  }
  return (
    <li className="historyItem">
      <p className="time">{timeAccessed}</p>
      <div className="itemContainer">
        <img src={logoUrl} alt="domain logo" className="domainLogo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <button
        onClick={deleteItem}
        type="button"
        data-testid="delete"
        className="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteLogo"
        />
      </button>
    </li>
  )
}

export default BrowserElement
