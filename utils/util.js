const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function convertToStarsArray (stars) {
  var num = stars.toString().substring(0,1);
  var array = []
  for (var i = 1; i <= 5; i++) {
    if (i <= num) {
      array.push(1);
    } else {
      array.push(0)
    }
  }
  return array
}

function http (url, callBack) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      "content-Type": ""
    },
    success: function (res) {
      callBack(res.data)
    }
  })
}

  function converToCastString (casts) {
    var castsjoin = "";
    for (var idx in casts) {
      castsjoin = castsjoin + casts[idx].name + "/";
      return castsjoin.substring(0, castsjoin.length - 2);
    }
  }

  function convertToCastInfos (casts) {
    var castsArray = []
    for (var idx in casts) {
      var cast = {
        img: casts[idx].avatars ? casts[idx].avatars.large : "",
        name: casts[idx].name
      }
      castsArray.push(cast)
    }
    return castsArray;
  }

module.exports = {
  formatTime: formatTime,
  convertToStarsArray: convertToStarsArray,
  http: http,
  converToCastString: converToCastString,
  converToCastInfos: convertToCastInfos
}
