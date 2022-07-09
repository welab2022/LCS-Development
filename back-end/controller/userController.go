package controllers

import (
	"database/sql"
	// "encoding/json"
	// "io/ioutil"
	// "context"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	UserModel "lcs_backend/model"
)
// type Password struct {
// 	Password string 
// }
// type UserUpdatePassword struct {
// 	CurrentPassword string
// 	NewPassword string
// }
// type Number struct {
// 	Number int
// }
// type UserRead struct {
// 	name string `json:"name"`
// 	email	 string  `json:"email"`
// }
// type UserCreate struct {
// 	Email	 string  
// 	Name 	 string  
// 	Password string  
// }
// type UserUpdate struct {
// 	Name string

// }
func ReadUser(context *gin.Context){
	var userName string
	var userEmail string
	db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb?timeout=3s")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
	fmt.Println(context.Param("email"))
	checkEmail,err := db.Query("SELECT count(name)  FROM user WHERE email = ?", context.Param("email"))
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database Failed",
		})
		panic(err.Error())
	}
	fmt.Println(checkEmail)
	for checkEmail.Next() {
		var number UserModel.Number
		err := checkEmail.Scan(&number.Number)
		if err != nil {
			context.JSON(http.StatusNotFound,gin.H{
				// EMAIL URL NOT EXIST
				"message":"Email not exist",
			})
		}
		amount := number.Number
		fmt.Println(amount)
		if amount == 0 {
			context.JSON(http.StatusNotFound,gin.H{
				// EMAIL URL NOT EXIST
				"message":"Email not exist",
			})
		}else{
		
	dataUser,err := db.Query("SELECT email,name FROM User where email = ? ", context.Param("email"))
	// + context.Param("email")
	if err != nil {
		fmt.Println("false")
		context.JSON(http.StatusOK,gin.H{
			"message":"don't exist" + context.Param("email"),
		})
		panic(err.Error())
	}
	for dataUser.Next() {
		var infoUser UserModel.UserRead
		err = dataUser.Scan(&infoUser.Email, &infoUser.Name)
		userName = infoUser.Name
		userEmail = infoUser.Email
	}
	
	context.JSON(http.StatusOK, gin.H{
		"name": userName,
		"email": userEmail,
	
	})}
}
}
func DeleteUser(context *gin.Context){
	
	db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb?timeout=3s")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
	checkEmail,err := db.Query("SELECT count(name)  FROM user WHERE email = ?", context.Param("email"))
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database Failed",
		})
		panic(err.Error())
	}
	fmt.Println(checkEmail)
	for checkEmail.Next() {
		var number UserModel.Number
		err := checkEmail.Scan(&number.Number)
		if err != nil {
			context.JSON(http.StatusNotFound,gin.H{
				// EMAIL URL NOT EXIST
				"message":"Email not exist",
			})
		}
		amount := number.Number
		fmt.Println(amount)
		if amount == 0 {
			context.JSON(http.StatusNotFound,gin.H{
				// EMAIL URL NOT EXIST
				"message":"Email not exist",
			})
		}else{
		fmt.Println(context.Param("email"))
		dataUser,err := db.Prepare("DELETE FROM user WHERE email=? ")
		if err != nil {
			fmt.Println("false")
			context.JSON(http.StatusOK,gin.H{
				"message":"don't exist" + context.Param("email"),
			})
			panic(err.Error())
		} 
		dataUser.Exec(context.Param("email"))
		context.JSON(http.StatusOK,gin.H{
			"message":"DELETE SUCCESS",
		})}}

}
func CreateUser(context *gin.Context){
	var dataJson UserModel.UserCreate
	err := context.BindJSON(&dataJson);if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			"message":"create Failed",
		})
		panic(err.Error())
	}
	db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb?timeout=3s")
	if err != nil {
		panic(err.Error())
	}
	defer db.Close()
	fmt.Println(dataJson.Email)
	results,err := db.Prepare("INSERT INTO user (Email,Name,Password) VALUES (?, ?, ?);")
	results.Exec(dataJson.Email,dataJson.Name,dataJson.Password)
	context.JSON(http.StatusOK,gin.H{
		"message":"create successfully",
	})
	// body := context.Request.Body
	// fmt.Println(body)
	// value, err := ioutil.ReadAll(body)
	// var dataUser UserCreate

	// fmt.Println(value)
	// json.Unmarshal(value, &dataUser)
	// if err != nil {
	// 	panic(err.Error())
	// }
	// db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb")
	// if err != nil {
	// 	panic(err.Error())
	// }
	// fmt.Println(dataUser)
	// defer db.Close()
	// emailUser := dataUser["email"]
	// results,err := db.Prepare("INSERT INTO user (email,name,password,createAt,updateAt,enabled) VALUES (?, ?, ?,TIME (NOW()),TIME (NOW()),1);")
	// results.Exec(dataUser["email"],dataUser["name"],dataUser["password"])
	// context.JSON(http.StatusOK,gin.H{
	// 	"message":"create successfully",
	// })
}
func UpdateUserName(context *gin.Context){
	var dataUpdate UserModel.UserUpdate
	err := context.BindJSON(&dataUpdate);if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//jSON RETURN NOT TRUE FORMAT
			"message":"data Failed",
		})
		panic(err.Error())
	}
	db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb?timeout=3s")
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			// CONNECT DATABASE FAILED
			"message":"DATA BASE CONNECT FAILED",
		})
		panic(err.Error())
	}
	defer db.Close()
	checkEmail,err := db.Query("SELECT count(name)  FROM user WHERE email = ?", context.Param("email"))
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database Failed",
		})
		panic(err.Error())
	}
	fmt.Println(checkEmail)
	for checkEmail.Next() {
		var number UserModel.Number
		err := checkEmail.Scan(&number.Number)
		if err != nil {
			context.JSON(http.StatusBadRequest,gin.H{
				// EMAIL URL NOT EXIST
				"message":"Email not exist",
			})
		}
		amount := number.Number
		fmt.Println(amount)
		if amount == 0 {
			context.JSON(http.StatusBadRequest,gin.H{
				// EMAIL URL NOT EXIST
				"message":"Email not exist",
			})
		}else{
			edit,err := db.Prepare("UPDATE user SET name = ?,updatedAt = NOW() WHERE email = ?")
	// edit,err := db.Prepare("UPDATE user Set name= ?,password=?,updatedAt = NOW() WHERE email = ?")
			edit.Exec(dataUpdate.Name,context.Param("email"))
			if err != nil {
				context.JSON(http.StatusBadRequest,gin.H{
					"message":"Failed",
				})
			}else{
			context.JSON(http.StatusOK, gin.H{
				"messages": "edited",
			})}
			}
	}
	// for checkEmail.Next() {
	// 	var emailUpdate UserRead
	// 	err := checkEmail.Scan(&emailUpdate.email)
	// 	if err != nil {
	// 		context.JSON(http.StatusBadRequest,gin.H{
	// 			"message":"Email not exist",
	// 		})
	// 		panic(err.Error())
	// 	}
	// 	fmt.Println(emailUpdate.email)
	// }
	
}

func UpdateUserPassword(context *gin.Context){
	var dataUpdate UserModel.UserUpdatePassword
	err := context.BindJSON(&dataUpdate);if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//jSON RETURN NOT TRUE FORMAT
			"message":"data Failed",
		})
		panic(err.Error())
	}
	db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb?timeout=3s")
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			// CONNECT DATABASE FAILED
			"message":"DATA BASE CONNECT FAILED",
		})
		panic(err.Error())
	}
	defer db.Close()
	checkEmail,err := db.Query("SELECT count(name)  FROM user WHERE email = ?", context.Param("email"))
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database Failed",
		})
		panic(err.Error())
	}
	fmt.Println(checkEmail)
	for checkEmail.Next() {
		var number UserModel.Number
		err := checkEmail.Scan(&number.Number)
		if err != nil {
			context.JSON(http.StatusBadRequest,gin.H{
				// EMAIL URL NOT EXIST
				"message":"Email not exist",
			})
		}
		amount := number.Number
		fmt.Println(amount)
		if amount == 0 {
			context.JSON(http.StatusBadRequest,gin.H{
				// EMAIL URL NOT EXIST
				"message":"Email not exist",
			})
		}else{
			results, err := db.Query("SELECT  password FROM User where email=? LIMIT 1 ", context.Param("email"))
			if err != nil {
				fmt.Println("false")
				panic(err.Error())
			}
			var password UserModel.Password
			for results.Next() {
				err = results.Scan(&password.Password)
				if err != nil {
					panic(err.Error())
				}
			}
			if(password.Password != dataUpdate.CurrentPassword){
				context.JSON(http.StatusBadRequest,gin.H{
					"message":"Failed Password",
				})
				return
			}
			edit,err := db.Prepare("UPDATE user SET password = ?,updatedAt = NOW() WHERE email = ?")
	// edit,err := db.Prepare("UPDATE user Set name= ?,password=?,updatedAt = NOW() WHERE email = ?")
			edit.Exec(dataUpdate.NewPassword,context.Param("email"))
			if err != nil {
				context.JSON(http.StatusBadRequest,gin.H{
					"message":"Failed edit",
				})
			}else{
			context.JSON(http.StatusOK, gin.H{
				"messages": "edited",
			})}
			}
	}
	// for checkEmail.Next() {
	// 	var emailUpdate UserRead
	// 	err := checkEmail.Scan(&emailUpdate.email)
	// 	if err != nil {
	// 		context.JSON(http.StatusBadRequest,gin.H{
	// 			"message":"Email not exist",
	// 		})
	// 		panic(err.Error())
	// 	}
	// 	fmt.Println(emailUpdate.email)
	// }
	
}
