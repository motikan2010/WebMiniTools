import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      resultHtmlLineArray: [],
      colorMap: {}
    };

    this.onExec = this.onExec.bind(this);
  }

  onExec() {
    let targetTextArray = document.getElementById('target-text').value.split(/\r\n|\r|\n/);
    let colorMap = {};
    let htmlLineArray = [];

    targetTextArray.forEach(function(line) {
      htmlLineArray.push(line);

      let textColorCode = colorMap[line];
      if (textColorCode === undefined) {
        colorMap[line] = '#000000';
      } else {
        // 文字色生成
        colorMap[line] = '#' + ("000000" + (Math.random() * 0xFFFFFF | 0).toString(16)).slice(-6);
      }
    });

    this.setState({
      resultHtmlLineArray: htmlLineArray,
      colorMap: colorMap,
    });
  }

  render () {
    let resultHtml = this.state.resultHtmlLineArray.map((line, i) => {
      let colorCode = this.state.colorMap[line];
      if (colorCode === undefined) {
        return <div key={i}><span>{line}</span><br/></div>
      } else {
        return <div key={i}><span style={{color: colorCode}}>{line}</span><br/></div>
      }
    });

    return (
        <div>
          <textarea id="target-text"/>
          <button onClick={this.onExec}>実行</button>
          <div>{resultHtml}</div>
        </div>
    );
  }
}

ReactDom.render(<App/>, document.getElementById('main'));
