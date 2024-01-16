import {Component} from 'react'
import BrowserElement from '../BrowserElements'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class BrowserContainer extends Component {
  state = {value: '', HistoryList: initialHistoryList, altMsg: ''}

  searchHistory = event => {
    const value1 = event.target.value
    this.setState({value: value1})
  }

  delteItemFromList = uniqueValue => {
    const {HistoryList} = this.state
    const updatedList = HistoryList.filter(each => each.id !== uniqueValue)
    let updateAltMsg = ''
    if (updatedList.length === 0) {
      updateAltMsg = 'There is no history to show'
    }
    this.setState({HistoryList: updatedList, altMsg: updateAltMsg})
  }

  render() {
    const {value, HistoryList} = this.state
    let {altMsg} = this.state
    const updateHistoryList = HistoryList.filter(each =>
      each.title.toLowerCase().includes(value.toLowerCase()),
    )
    if (updateHistoryList.length === 0) {
      altMsg = 'There is no history to show'
    }

    return (
      <div className="mainContainer">
        <div className="navBarSection">
          <div className="">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="appLogo"
            />
          </div>
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="searchBoxLogo"
            />
            <input
              type="search"
              placeholder="Search history"
              className="searchBox"
              onChange={this.searchHistory}
            />
          </div>
        </div>
        <ul className="subContainer">
          {updateHistoryList.map(each => (
            <BrowserElement
              uniqueValue={each.id}
              key={each.id}
              HistoryListItem={each}
              deletedItem={this.delteItemFromList}
            />
          ))}
        </ul>
        <p className="altMsg">{altMsg}</p>
      </div>
    )
  }
}

export default BrowserContainer
