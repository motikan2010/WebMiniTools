import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
  }

  componentWillMount() {

  }

  onExec() {
    let targetText = document.getElementById('target-text').value;
    let targetTextArray = targetText.split(/\r\n|\r|\n/);
    let resultHtml = '';
    let discoverMap = {};
    targetTextArray.forEach(function(line) {
      let textColorCode = discoverMap[line];
      console.log(textColorCode);
      if (textColorCode !== undefined) {
        resultHtml += '<span style="color:' + textColorCode + '">' + line + '</span>\n';
      } else {
        resultHtml += line + '\n';
        // 文字色生成
        let color = (Math.random() * 0xFFFFFF | 0).toString(16);
        discoverMap[line] = '#' + ("000000" + color).slice(-6);
      }
    });
    document.getElementById('output-area').innerHTML = resultHtml;
  }
  render () {
    return (
        <div>
          <textarea id="target-text"/>
          <button onClick={this.onExec}>実行</button>
          <pre id="output-area"/>
        </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('main'));