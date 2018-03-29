var config = require('../config/config');

exports.httpRequest = function (action, data) {
  var url = 'http://'+config.host + ':' + config.port + action;
  const init = {
    method: data.method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': '需要认证',
    },
    body: JSON.stringify(data.body)
  }
  console.log(url);
  fetch(url, init)
    .then((response) => {
      response.json();
      console.log(response);
    })
    .then((responseJson) => {
      this.setState({message: `${responseJson[0].id} - ${responseJson[0].title}`});
    }).catch(e => {console.log(`error ${e}`,'test---')});
}