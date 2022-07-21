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
	LocationModel "lcs_backend/model"
)

func DBconnect()(db *sql.DB){
	db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb")
	//db, err := sql.Open("mysql", "root123:root123@tcp(127.0.0.1:3306)/lcsdb")

	if err != nil {
		panic(err.Error())
	}

	err = db.Ping()
	if err != nil {
		fmt.Println("Ping Failed!!")
	} else {
		fmt.Println("Successful database connection")
	}
	return db
}
func CreateLocation (context *gin.Context)  {
	var dataLocation LocationModel.Location
	err := context.BindJSON(&dataLocation); if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			"message":"create failed",
		})
	panic(err.Error())
	}
	// db, err := sql.Open("mysql", "lcsdbuser:password123@tcp(localhost:3306)/lcsdb?timeout=3s")
	// if err != nil {
	// 	context.JSON(http.StatusBadRequest,gin.H{
	// 		// CONNECT DATABASE FAILED
	// 		"message":"DATA BASE CONNECT FAILED",
	// 	})
	// 	panic(err.Error())
	// }
	// fmt.Println(db)
	db := DBconnect()
	fmt.Println(dataLocation.LocationID)
	checkLocation,err := db.Query("SELECT *  FROM location WHERE LocationID = ?",dataLocation.LocationID)
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database 1 Failed",
		})
		panic(err.Error())
	}
	if checkLocation.Next(){
			context.JSON(http.StatusBadRequest,gin.H{
				"message":"Location exist",
			})
		}else{
		results,err := db.Prepare("INSERT INTO location (LocationID,address,status) Value(?,?,?);")
		results.Exec(dataLocation.LocationID,dataLocation.Address,dataLocation.Status)
		context.JSON(http.StatusOK,gin.H{
			"message":"create successfully",
		})
		fmt.Println(err)
		
	}

	
	defer db.Close()
}
func ReadAllLocation(context *gin.Context)  {
	var dataLocations []LocationModel.Location
	db := DBconnect()
	readLocation,err := db.Query("SELECT *  FROM location")
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database 1 Failed",
		})
		panic(err.Error())
	}

	for readLocation.Next() {
		var dataLocation LocationModel.Location
		err = readLocation.Scan(&dataLocation.LocationID,&dataLocation.Address,&dataLocation.Status,&dataLocation.CreatedAt,&dataLocation.UpdatedAt,&dataLocation.Enabled)
		dataLocations = append(dataLocations, dataLocation)
	}
	context.JSON(http.StatusOK,dataLocations)
}
func UpdateLocation(context *gin.Context)  {
	var dataUpdateLocation LocationModel.Location
	err := context.BindJSON(&dataUpdateLocation); if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			"message":"create failed",
		})
	panic(err.Error())
	}
	db := DBconnect()
	checkLocation,err := db.Query("SELECT * FROM location WHERE LocationID = ?",context.Param("locationid"))

	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database Failed",
		})
		panic(err.Error())
	}
	if checkLocation.Next(){
		updateLocation,err := db.Prepare("UPDATE location SET  Address = ?, Status = ?,Enabled = ?,updatedAt = NOW() WHERE LocationID = ?")
		updateLocation.Exec(dataUpdateLocation.Address,dataUpdateLocation.Status,dataUpdateLocation.Enabled,context.Param("locationid"))
		if err != nil {
			context.JSON(http.StatusBadRequest,gin.H{
				//QUERY FAILED
				"message":"Database Failed",
			})
			panic(err.Error())
		}else{
			context.JSON(http.StatusOK, gin.H{
				"messages": "edited",
			})
		}
	}else{
		context.JSON(http.StatusBadRequest,gin.H{
			"message":"Edit failed",
		})
	panic(err.Error())
	}
}
func DeleteLocation(context *gin.Context) {
	db := DBconnect()
	checkLocation,err := db.Query("SELECT * FROM location WHERE LocationID = ?",context.Param("locationid"))

	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database Failed",
		})
		panic(err.Error())
	}
	if checkLocation.Next(){
		deleteLocation,err := db.Prepare("DELETE FROM location WHERE LocationID = ?")
		deleteLocation.Exec(context.Param("locationid"))
		if err != nil {
			context.JSON(http.StatusBadRequest,gin.H{
				//QUERY FAILED
				"message":"Database Failed",
			})
			panic(err.Error())
		}else{
			context.JSON(http.StatusOK, gin.H{
				"messages": "Deleted",
			})
		}
	}else{
		context.JSON(http.StatusNotFound,gin.H{
			"message":"Delete failed",
		})
	panic(err.Error())
	}

}
