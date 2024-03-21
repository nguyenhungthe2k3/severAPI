//npm i nodemailer
const express=require('express');
const nodemailer=require('nodemailer');
//tao server
const app=express();
//cau hinh gui email
let guiEmail=nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'thenhph22409@fpt.edu.vn',
        pass: 'flsx wuos etwx hbof'
    }
});
//thiet lap noi dung gui
let noiDung={
    from: 'thenhph22409@fpt.edu.vn',
    to: 'anhddph22454@fpt.edu.vn',
    subject: 'Test API',
    text: 'tôi đang test tính năng gửi email về máy  (adroi API)'
};
//gui
guiEmail.sendMail(noiDung,(err,info)=>{
    if(err){
        console.log('Loi: '+err);
    }
    else{
        console.log('Da gui thanh cong: '+info);
    }
});
//chay server
app.listen(3005,()=>{
    console.log('server dang chay');
});