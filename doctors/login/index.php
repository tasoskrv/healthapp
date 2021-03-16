<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Doctors - CloudOcean - Login</title>
        <script src="jquery-1.11.1.min.js"></script>
        <script src="md5.js"></script>
        <script>            
            $(document).ready(function() {
                Initialize.start();
            });
            
            var Initialize = {
                start: function() {
                    $(document).on("click", ".cls_login_btn", Initialize.submit)
                               .on("keyup", ".cls_doctor_pass", function(event) {
                                    if (event.keyCode === 13) {
                                        Initialize.submit();
                                    }
                                })
                },
                submit: function() {                    
                    var email = $(".cls_doctor_email").val(),
                        password = CryptoJS.MD5($(".cls_doctor_pass").val()),
                        idapp = $(".cls_idapp").val(),
                        credentials = JSON.stringify({
                            email : email,
                            password : password.toString(CryptoJS.enc.Base64),
                            idapp : idapp
                        });                    
                    $.ajax({
                       url : "../../mainlogin/login.php",
                       type : "POST",
                       data : {data : credentials},
                       success: function (data, textStatus, jqXHR) {                           
                           var response = JSON.parse(data);
                           if(response.success === true){
                               window.location = response.sessionManager;
                           }else{
                               switch(response.requestCode){
                                   case 100 : 
                                       alert(response.message);
                                       break;
                                   case 300 :
                                       alert(response.message);
                                       break;
                                   case 400 : 
                                       alert(response.message);
                                       break;
                               }
                           }
                       }                        
                    });                    
                }
            };
        </script>
        <style>
            body{
                padding: 0;
                margin: 0;
                background-color: #fff;
            }
            #main{
                background-color: #E8E8E8;
                border-radius: 55px; 
                width : 420px;
                height: 340px;
                margin: auto;
                margin-top: 40px;
                overflow: hidden;
            }
            #login_area{
                width: 270px;
                display: block;
                margin: auto;
                margin-top: 50px;
            }
            
            p{
                margin-top: 150px;
                text-align: center;
                font-size: 18pt;   
            }
            
            table .td_input input{
                height: 20px;
                width: 271px;
                border: 1px solid blue;
                font-size: 15pt;
                padding: 5px;                
            }
            
            .cls_login_btn{
                width: 100%;
                padding: 5px 10px 5px 10px;
                cursor: pointer;
            }
            
            
        </style> 
    </head>
    <body>
        <p>Doctors - CloudOcean</p>
        <div id="main">                     
            <div id="login_area">                
                <table>
                    <tr>
                        <td class="td_input"><input type="text" placeholder="Email" name="doctor_email" class="cls_doctor_email"></td>
                    </tr>
                    <tr>
                        <td class="td_input"><input type="password" placeholder="Password" name="doctor_pass" class="cls_doctor_pass"></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="Log In" class="cls_login_btn"></td>
                    </tr>
                </table>
                <input type="hidden" value="1" class="cls_idapp">
            </div>
        </div>
    </body>
</html>



















