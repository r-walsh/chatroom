var app = angular.module('chatroom');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'MnYEAOKs1uh7eaZNP2zeF7pUi0OSOdM4pRe2Hs2H', 'X-Parse-REST-API-Key': 'xZ5trTWS5XjXJXep56uqwEJYnOVETI5jr0oksWKJ'}
      return config;
    }
  };
});
