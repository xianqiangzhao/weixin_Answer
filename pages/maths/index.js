
var postData = require('../../data/maths-data.js');
var question =[];
Page({
  data: {
    tiku: postData.postList,
    result:''
   },   
  radioChange: function (e) {
    //console.log(this.data.tiku);
    if (this.data.tiku[e.currentTarget.id].daan == e.detail.value){
      console.log('ok');
    } else {
      console.log('ng');
    }
    var obj = [{ id: '', select: '', daan: '' }];
    obj.id = e.currentTarget.id;
    obj.select = e.detail.value;
    obj.daan = this.data.tiku[e.currentTarget.id].daan;       
    var find = false;
     for (var i = 0;i <question.length; i++) {
       if (question[i].id == obj.id) {
         question[i] = obj;
         find = true;
       }
     }
     if (!find)
       question.push(obj);
     console.log(question);
   }, 
  nextPage: function () {
    if (question.length<=0) {
      wx.showToast({
        title: '没有选择哦！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
     return;
    }
    if (question.length != this.data.tiku.length ) {
      wx.showToast({
        title: '还没有做完哦！',
        icon: 'none',
        duration: 1000,
        mask: true
      })
      return;
    }

     for(let item of  question ) {
       console.log(item);
       if (item.select != item.daan) {
        console.log("答案有误！");
        wx.showToast({
          title: '要不要在想想',
          icon: 'none',
          duration: 1000,
         });
        return;
       }
    };     
     wx.showToast({
       title: '回答正确！',
       icon: 'success',
       duration: 1000,
       mask: true
     })
      
  }
}) 