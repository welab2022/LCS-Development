package main

import (
	"os"

	routes "lcs_backend/route"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-contrib/sessions"
	
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}
	store := cookie.NewStore([]byte("secret"))
	r := gin.Default()
	r.Use(cors.Default())
	r.Use(sessions.Sessions("mysession", store))

	routes.User(r)
	r.Run(":" + port)

}