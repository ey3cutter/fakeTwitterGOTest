package api_gateway

import (
	"github.com/gin-gonic/gin"
	"log"
)

func main() {
	r := gin.Default()

	r.Use(AuthMiddleware())

	r.POST("/register", RegisterHandler)
	r.POST("/tweet", CreateTweetHandler)
	r.GET("/feed", GetFeedHandler)
	r.GET("/stream", StreamHandler)

	log.Fatal(r.Run(":8080"))
}

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// JWT validation logic
		c.Next()
	}
}
