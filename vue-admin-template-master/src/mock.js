import Mock from 'mockjs'
const Random = Mock.Random

function getData() {
  let datalist = []
  for (let i = 0; i < 10; i++) {
    let newData = {
      order: Random.natural(16),
      account: Random.name(),
      time: Random.now(),
      title: Random.csentence(4), //  Random.csentence( min, max )
      baoxiu: Random.csentence(2),
      product: Random.csentence(4, 10),
      number: Random.natural(1, 100),
      price: Random.float(20, 500, 2, 2),
      addrss: Random.csentence(15, 30),
      name: Random.cname(),
      tel: Random.natural(11),
      state: Random.csentence(5),
      id: Random.natural(1, 5),
      thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    }
    datalist.push(newData)
  }
  return {
    data: datalist
  }
}

const data = Mock.mock('/getDataList', getData)

export default data
