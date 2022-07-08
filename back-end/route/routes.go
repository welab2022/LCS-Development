package routes

import (
	"github.com/gin-gonic/gin"
	controller "lcs_backend/controller"
)


func User(router *gin.Engine){
	router.POST("/login",controller.CheckPassword)
	router.GET("/user/:email",controller.ReadUser)
	router.DELETE("/user/:email",controller.DeleteUser)
	router.PUT("/user/:email",controller.UpdateUserName)
	router.PUT("/user/update/:email",controller.UpdateUserPassword)
	router.POST("/user",controller.CreateUser)
}