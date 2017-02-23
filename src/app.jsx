import React from 'react'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCtd6CkhMpN6ZKm7V5KCrCCFf3GympJriI',
  authDomain: 'kesey-e1f4d.firebaseapp.com',
  databaseURL: 'https://kesey-e1f4d.firebaseio.com/',
  storageBucket: 'kesey-e1f4d.appspot.com',
}
firebase.initializeApp(config)

const App = (props) => {
  const page = props.children
  let pageName = props.route.path
  pageName = pageName
    ? `${pageName}page`
    : 'homepage'
  return (
    <div>
      <div id="main" className={`page ${pageName}`}>
        <div className="container">
          {page}
        </div>
      </div>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element.isRequired,
  route: React.PropTypes.shape({
    path: React.PropTypes.string.isRequired,
  }).isRequired,
}

export default App
