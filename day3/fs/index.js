// console.log(1);
// require引入fs(file system)模块，文件系统 constant
var fs = require('fs');

// console.log(fs);
// fs.readFile('./abc.txt',function(err,data){
//     console.log(data.toString());
// })
// 第一个参数路径，第二个参数是需要写入的文本，第三个是写入成功后返回的回调函数
// fs.writeFile('./abc.txt','hello wolrdasdsadad',function(err,data){
//     console.log(data);
// })
// 删除空文件夹
// fs.rmdir('./test', function (data) {
//     console.log(data)
// })
// 删除文件
fs.unlink('./test/1.js', function (err) {
    if (err) throw err;
    console.log('文件已删除');
});