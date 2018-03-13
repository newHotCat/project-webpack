import _ from 'lodash'
import printMe from './print'
function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());
  if (module.hot) {
    module.hot.accept('./print.js', function () {
      console.log('accepting the updated printme module!');
      printMe()
    })
  }