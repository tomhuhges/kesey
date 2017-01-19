import React from 'react'
// import DocumentHead from 'react-helmet'

const App = (props) => {
  const page = props.children
  let pageName = props.route.path
  pageName = pageName
    ? `${pageName}page`
    : 'homepage'
  return (
    <div>
      {/* <DocumentHead link={[{
          'rel': 'stylesheet',
          'href': 'https://fonts.googleapis.com/css?family=Source+Code+Pro:200,400|Astloch'
        }
      ]}/> */}
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
