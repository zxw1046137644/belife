var g = require('./src/public/js/untils');
var u = require('./src/public/js/url');
var axios = require('axios');


var access_id = '123'
var access_token = '321'
var data = {
    "city": '杭州市',
    "active_type": '1',
    "product_type_id": '1',
    "page": '1',
    "lng": '120.10519047117164',
    "lat": '30.307533133810978',
    "timestamp": g.timeSamp()+500000,
    // timestamp: 1574004230,
    "location": '1',
    "need_product_type": '0',
    "business_id": '4',
    "access_id": access_id,
    "access_token": access_token
}

var sysname=['广式腊味双拼煲仔饭','【好面道】-牛肉炒拉面（仅限晚餐）','java','python','js'];
// var params = g.md(data)
var params = g.md(data)

console.log(Math.floor(1+Math.random()*(4-1+1)))




// console.log(sysname[3])
// g.createInsert(20,sysname);
// g.other(u.api.url, u.API.index, params)
// g.clearCacheKj()




