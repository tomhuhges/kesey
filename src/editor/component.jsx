import React from 'react'

class Editor extends React.Component {
  render() {
    return (
      <div>
        <div
          className="mw9 pv6 center w-60 f3 lh-copy"
          contentEditable
        >Start typing something...</div>
      </div>
    )
  }
}

export default Editor
