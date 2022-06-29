package routes

import (
	"github.com/gin-gonic/gin"
	controller "lcs_backend/controller" )


func User(router *gin.Engine){
	router.POST("/login",controller.CheckPassword)
}