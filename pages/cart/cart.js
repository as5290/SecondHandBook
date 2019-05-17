// pages/cart/cart.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topImg:{
      mode:'scaleToFill',
      src:'../../image/6.jpg'
    },
    cartInfoList:[{
        picSrc: "../../image/book1.png",
        bookName: "图书1",
        author:"cuteBug",
        press:"BIT",
        price:15.50
      },{
        picSrc: "../../image/book11.png",
        bookName: "图书2",
        author: "cuteBug",
        press: "BIT",
        price: 16.00
      },{
        picSrc: "../../image/book18.png",
        bookName: "图书3",
        author: "cuteBug",
        press: "BIT",
        price: 17.00
      },{
        picSrc: "../../image/book4.png",
        bookName: "图书4",
        author: "cuteBug",
        press: "BIT",
        price: 18.70
      }, {
        picSrc: "../../image/book4.png",
        bookName: "图书4",
        author: "cuteBug",
        press: "BIT",
        price: 18.70
      }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  
  onLoad: function (options) {
      
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})