package main

import (
	// "database/sql"
	// "encoding/json"
	// "fmt"
	// "io/ioutil"
	// "net/http"
	//  controller "example.com/LCS/src/controllers"
	"os"

	routes "lcs_backend/route"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	//select__, err := db.Query("select password from login where username = 'thanh'")
	// insert, err := db.Query("INSERT INTO login VALUES('2','Hoang','123')")
	// if err !=nil {
	//     panic(err.Error())
	// }
	// defer insert.Close()
	// fmt.Println("Yay, values added!")
	r := gin.Default()
	r.Use(cors.Default())
	routes.User(r)
	r.Run(":" + port)

}

// func checkPassWord(context *gin.Context) {
// 	var passwordUser string
// 	body := context.Request.Body
// 	value, err := ioutil.ReadAll(body)
// 	if err != nil {
// 		panic(err.Error())
// 	}
// 	var users = map[string]interface{}{}
// 	json.Unmarshal(value, &users)
// 	// if (err__ != nil) {
// 	//     panic(err.Error())
// 	// }
// 	usernameLogin := users["username"]
// 	passwordLogin := users["password"]
// 	db, err := sql.Open("mysql", "root:130601@tcp(127.0.0.1:3306)/login_golang")
// 	if err != nil {
// 		panic(err.Error())
// 	}
// 	defer db.Close()

// 	err = db.Ping()
// 	if err != nil {
// 		fmt.Println("Ping Failed!!")
// 	} else {
// 		fmt.Println("Successful database connection")
// 	}
// 	results, err := db.Query("SELECT  password FROM login where username=? LIMIT 1 ", usernameLogin)
// 	if err != nil {
// 		fmt.Println("false")
// 		panic(err.Error())
// 	}
// 	for results.Next() {
// 		var testtable2 Testtable2
// 		err = results.Scan(&testtable2.password)
// 		if err != nil {
// 			panic(err.Error())
// 		}
// 		passwordUser = testtable2.password
// 	}

// 	if passwordUser == passwordLogin {
// 		context.JSON(http.StatusOK, gin.H{
// 			"message": "Success"})
// 	} else {
// 		context.JSON(http.StatusOK, gin.H{
// 			"message": "Failed"})

// 	}

// }