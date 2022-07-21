package routes

import (
	"github.com/gin-gonic/gin"
	controller "lcs_backend/controller"
	"github.com/gin-contrib/timeout"
	"time"
	"net/http"
)
func ResponseTimeOut(c *gin.Context) {
	c.JSON(http.StatusRequestTimeout,gin.H{
		"message":"request timeout",
	})
  }

func User(router *gin.Engine){
	router.POST("/login",timeout.New(
		timeout.WithTimeout(5*time.Second),
		timeout.WithHandler(controller.CheckPassword),
		timeout.WithResponse(ResponseTimeOut),
	))
	router.GET("/user/:email",controller.ReadUser)
	router.DELETE("/user/:email",controller.DeleteUser)
	router.PUT("/user/:email",controller.UpdateUserName)
	router.PUT("/user/update/:email",controller.UpdateUserPassword)
	router.POST("/user",controller.CreateUser)
	router.POST("/location",controller.CreateLocation)
	router.GET("location",controller.ReadAllLocation)
	router.PUT("/location/edit/:locationid",controller.UpdateLocation)
	router.DELETE("delete/:locationid",controller.DeleteLocation)
}