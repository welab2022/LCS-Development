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
	// User router
	router.GET("/user/:email",controller.ReadUser)
	router.DELETE("/user/:email",controller.DeleteUser)
	router.PUT("/user/:email",controller.UpdateUserName)
	router.PUT("/user/update/:email",controller.UpdateUserPassword)
	router.POST("/user",controller.CreateUser)
	//Location router
	router.POST("/location",controller.CreateLocation)
	router.GET("locations",controller.ReadAllLocation)
	router.PUT("/location/edit/:locationid",controller.UpdateLocation)
	router.DELETE("delete/:locationid",controller.DeleteLocation)
	//Forgot password router
	router.POST("/user/forgot-password",controller.GetEmailForgotPassword)
	router.POST("resetpassword",controller.CheckEmailForgot)
	//Students router
	router.POST("/student",controller.CreateStudent)
	router.GET("/students",controller.RealAllStudent)
	router.GET("/student/:studentid",controller.GetStudent)
	router.PUT("/student/:studentid",controller.UpdateStudent)
}