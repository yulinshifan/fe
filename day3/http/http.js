// http请求模块
var http = require('http');
// 来自于npm的第三方模块，用于帮你处理这个html解构的模块 因为来自于npm包管理中心
var cheerio = require('cheerio');
var request = require('request');
// 文件系统
var fs = require('fs');
// 如果请求成功，则在回调函数里面返回该内容
http.get('http://www.umei.cc/tags/meinvyouwu.htm', function (res) {
    // console.log(res)
    // response 响应，响应回来的数据流 二进制格式回来
    res.setEncoding('utf8');
    // 新的数据，空的容器
    var rawData = '';
    // 监听数据回来 chunk片段
    res.on('data', (chunk) => { 
        rawData = rawData + chunk; 
    });

    // 监听结束
    res.on('end', () => {
        fs.writeFile('./beauty.html',rawData, function(){});
        // 使用cheerio加载html解构，然后把它赋给$符号
        var $ = cheerio.load(rawData);
        $('img').each(function(index,ele){
            console.log($(ele).attr('src'));
            var img = $(ele).attr('src');
            request(img).pipe(fs.createWriteStream(`./img/${index}.png`))
        });
        // var reg = rawData.search(/<img src="/i);
        // var reg = /<img\s+src="[A-Za-z0-9/:.]+"\s+width="180"\s+height="270"\s+\/>/g.exec(rawData);
        
        // console.log(rawData);
    })
})