import React from 'react'
import ReactCodeMirror from 'react-codemirror'
import { browserHistory } from 'react-router'
import Dropbox from 'dropbox'
import dropbox from '../tools/dropbox'
import CodeMirror from '../../node_modules/codemirror/'
import Header from './header/component'

require('../../node_modules/codemirror/mode/jsx/jsx')
require('../../node_modules/codemirror/mode/javascript/javascript')
require('../../node_modules/codemirror/mode/gfm/gfm')

class Editor extends React.Component {
  constructor(props) {
    super(props)
    this.updateFile = this.updateFile.bind(this)
    this.state = {
      value: '',
      isLoading: true,
      options: {
        mode: 'gfm',
        indentWithTabs: true,
        lineWrapping: true,
        autofocus: true,
      },
    }
  }
  componentDidMount() {
    browserHistory.push('/edit')
    if (this.props.accessToken) {
      dropbox.getFileContent('/Welcome.md', this.props.accessToken)
        .then(response => this.setState({ value: response, isLoading: false }))
        .catch(err => console.error(err.error))
    }
  }
  updateFile(value) {
    this.setState({ value })
  }
  render() {
    const editor = 'editor'
    return (
      <div className="code mid-gray mh3">
        <Header />
        <div className="mw9 pv6 center w-50 f4 lh-copy">
          {this.state.isLoading ? (
            <div className="w-100 h-100 flex justify-center items-center">
              <img src="http://25.media.tumblr.com/4abad145cfeca409f3f76cac7e9393de/tumblr_mq50y4zfz71szhoyto1_400.gif" alt="" />
            </div>
          ) : (
            <ReactCodeMirror
              {...this.state}
              onChange={this.updateFile}
              ref={editor}
            />
          )}
        </div>
      </div>
    )
  }
}

Editor.propTypes = {
  accessToken: React.PropTypes.string.isRequired,
}

export default Editor
