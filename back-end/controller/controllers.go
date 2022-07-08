package controllers

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

type Testtable2 struct {
	password string `json:"password"`
	name string `json:"name"`
}
type loginUser struct {
	username string `json:"username"`
	password string `json:"password"`
}

func CheckPassword(context *gin.Context) {
	var passwordUser string
	var usernameLogin string


	body := context.Request.Body
	value, err := ioutil.ReadAll(body)
	if err != nil {
		panic(err.Error())
	}
	var users = map[string]interface{}{}
	json.Unmarshal(value, &users)
	// if (err__ != nil) {
	//     panic(err.Error())
	// }
	emailLogin := users["email"]
	passwordLogin := users["password"]
	db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb")
	//db, err := sql.Open("mysql", "root123:root123@tcp(127.0.0.1:3306)/lcsdb")

	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		fmt.Println("Ping Failed!!")
	} else {
		fmt.Println("Successful database connection")
	}
	results, err := db.Query("SELECT  password,name FROM User where email=? LIMIT 1 ", emailLogin)
	if err != nil {
		fmt.Println("false")
		panic(err.Error())
	}
	for results.Next() {
		var testtable2 Testtable2
		err = results.Scan(&testtable2.password,&testtable2.name)
		if err != nil {
			panic(err.Error())
		}
		passwordUser = testtable2.password
		usernameLogin = testtable2.name
		fmt.Println(passwordUser)
		fmt.Println(usernameLogin)

	}

	if passwordUser == passwordLogin {
		context.JSON(http.StatusOK, gin.H{
			"name": usernameLogin,
			"email": emailLogin,
		
		})
	} else {
		context.JSON(http.StatusUnauthorized, gin.H{
			"message":  "Failed",
			"username": usernameLogin})

	}

}
