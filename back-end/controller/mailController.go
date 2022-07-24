package controllers

import (
    "fmt"
    "log"
    "net/smtp"
    "strings"
    MailModel "lcs_backend/model"
    "github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
    "github.com/gin-contrib/sessions"
    // "github.com/gin-contrib/sessions/cookie"
    "math/rand"
    "net/http"
    "strconv"

)

func SendMail(email string,strtoken string) {

    //sender := "john.doe@example.com"
    sender := "john.doe@example.com"
    
    // to := []string{
    //     "roger.roe@example.com",
    // }
    to := []string{
        email,
    }

    user := "e1f9364ebe0921"
    password := "b3dd0f9516307d"

    subject := "Simple HTML mail"
    body := "Click in <a href = \"http://localhost:3000/resetpassword/"+strtoken+"\"> this</a>"

    request := MailModel.Mail{
        Sender:  sender,
        To:      to,
        Subject: subject,
        Body:    body,
    }

    addr := "smtp.mailtrap.io:2525"
    host := "smtp.mailtrap.io"

    msg := BuildMessage(request)
    auth := smtp.PlainAuth("", user, password, host)
    err := smtp.SendMail(addr, auth, sender, to, []byte(msg))

    if err != nil {
        log.Fatal(err)
    }

    fmt.Println("Email sent successfully")
}

func BuildMessage(mail MailModel.Mail) string {
    msg := "MIME-version: 1.0;\nContent-Type: text/html; charset=\"UTF-8\";\r\n"
    msg += fmt.Sprintf("From: %s\r\n", mail.Sender)
    msg += fmt.Sprintf("To: %s\r\n", strings.Join(mail.To, ";"))
    msg += fmt.Sprintf("Subject: %s\r\n", mail.Subject)
    msg += fmt.Sprintf("\r\n%s\r\n", mail.Body)

    return msg
}

func GetEmailForgotPassword(context *gin.Context){
    var email MailModel.Email
    db := DBconnect()

    err := context.BindJSON(&email)
    if err != nil {
        context.JSON(http.StatusBadRequest,gin.H{
            "message":"Create failed",
        })
        panic(err.Error())
    }

    rand.Seed(20)
    token_number := rand.Intn(89999999) + 10000000
    strtoken := strconv.Itoa(token_number)
    checkEmail,err := db.Query("SELECT * FROM user WHERE email = ?",email.Email)
    if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database Failed",
		})
		panic(err.Error())
	}
    if checkEmail.Next() {
        session := sessions.Default(context)
        if session.Get(email.Email) == nil {
            session.Set(email.Email,strtoken)
            session.Options(sessions.Options{
                MaxAge: 600*5,
            })
        }
        fmt.Println(session.Get(email.Email))
        session.Set(email.Email+"_backup",strtoken)
        session.Save()
        SendMail(email.Email,strtoken)
        

    }else{
        context.JSON(http.StatusOK, gin.H{
            "messages": "Wrong Email",
        })
    }
    


}

func CheckEmailForgot(context *gin.Context){
    session := sessions.Default(context)
    var dataForgotPassword MailModel.CheckForgotPassword
    db := DBconnect()
    err := context.BindJSON(&dataForgotPassword)
    if err != nil {
        context.JSON(http.StatusBadRequest,gin.H{
            "message":"Create failed",
        })
        panic(err.Error())
    }
    checkEmail,err := db.Query("SELECT * FROM user WHERE email = ?",dataForgotPassword.Email)
    if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database Failed",
		})
		panic(err.Error())
	}
    if checkEmail.Next() {
        if session.Get(dataForgotPassword.Email) == dataForgotPassword.Token {
            context.JSON(http.StatusOK,gin.H{
                "message":"verify account successfully ",
            })
            updatePassword,err := db.Prepare("Update user SET password = ? where email = ?")
            updatePassword.Exec(dataForgotPassword.Password,dataForgotPassword.Email)
            if err != nil {
                context.JSON(http.StatusOK,gin.H{
                    "message":"verify account successfully ",
                })
            }
        } else if(session.Get(dataForgotPassword.Email+"_backup") == dataForgotPassword.Token){
            context.JSON(http.StatusOK,gin.H{
                "message":"Token Expired ",
            })
        } else{
            context.JSON(http.StatusOK,gin.H{
                "message":"Token Failed ",
            })
        }
        

    }else{
        context.JSON(http.StatusOK, gin.H{
            "messages": "Wrong Email",
        })
    }
}