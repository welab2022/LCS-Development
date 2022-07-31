package controllers
import (
	"net/http"
	"fmt"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	StudentModel "lcs_backend/model"
)

func CreateStudent(context *gin.Context){
	var primaryKeyStudent int64
	var dataStudent StudentModel.Student
	err := context.BindJSON(&dataStudent)
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			"message":"create failed",
		})
	panic(err.Error())
	}
	fmt.Println(dataStudent.First_name)

	db := DBconnect()
	checkStudent,err := db.Query("Select * from Student where First_name = ? and Last_name = ? and DoB = ? and PhoneNo = ?",dataStudent.First_name,dataStudent.Last_name,dataStudent.DoB,dataStudent.PhoneNo)
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			//QUERY FAILED
			"message":"Database 0 Failed",
		})
		panic(err.Error())
	} 
	fmt.Println(dataStudent.First_name)

	if checkStudent.Next() {
		fmt.Println("....")
		context.JSON(http.StatusOK,gin.H{
			//QUERY FAILED
			"message":"Data Student Existed",
		})
	}else{
	fmt.Println("dataStudent.First_name")
	primaryKey,err := db.Query("SELECT count(*) FROM student")
	if err != nil {
		context.JSON(http.StatusInternalServerError,gin.H{
			//QUERY FAILED
			"message":"Database 1 Failed",
		})
		panic(err.Error())
	} 
	for primaryKey.Next() {
		var primaryKeyCount StudentModel.PrimaryKeyCount
		err = primaryKey.Scan(&primaryKeyCount.PrimaryKey) 
		primaryKeyStudent = primaryKeyCount.PrimaryKey + 1
	}
	fmt.Println(primaryKeyStudent)
	results,err := db.Query("INSERT INTO student (StudentId, First_name,Last_name, DoB,Gender,Email,PhoneNo,Note) value (?,?,?,?,?,?,?,?)",primaryKeyStudent,dataStudent.First_name,dataStudent.Last_name, dataStudent.DoB,dataStudent.Gender,dataStudent.Email,dataStudent.PhoneNo,dataStudent.Note)
	
	if err != nil {
		context.JSON(http.StatusOK,gin.H{
			"message":"Create Failed 123",
		})
		panic(err.Error())
	}
	fmt.Println(results)
	context.JSON(http.StatusOK,gin.H{
		"message":"Create Success",
	})
	}
}


func RealAllStudent(context *gin.Context){

	var students []StudentModel.Student
	db := DBconnect()
	results,err := db.Query("SELECT * FROM student")
	if err != nil {
		context.JSON(http.StatusInternalServerError,gin.H{
			"message":"Database error",
		})
		panic(err.Error())
	}
	
	for results.Next() {
		var student StudentModel.Student
		err = results.Scan(&student.StudentID,&student.First_name,&student.Last_name,&student.DoB,&student.Gender,&student.Email,&student.PhoneNo,&student.Note,&student.CreatedAt,&student.UpdatedAt,&student.Enabled)
		fmt.Println(student.StudentID)
		students = append(students, student)	
	}
	context.JSON(http.StatusOK,students)
	
}


func GetStudent (context *gin.Context){

	db := DBconnect()
	result,err := db.Query("SELECT * FROM student where StudentID = ?",context.Param("studentid"))
	if err != nil{
		context.JSON(http.StatusInternalServerError,gin.H{
			"message":"Database error",
		})
	}
	if result.Next() {
		var student StudentModel.Student
		err = result.Scan(&student.StudentID,&student.First_name,&student.Last_name,&student.DoB,&student.Gender,&student.Email,&student.PhoneNo,&student.Note,&student.CreatedAt,&student.UpdatedAt,&student.Enabled)
		context.JSON(http.StatusOK,student)
	}else{
		context.JSON(http.StatusBadRequest,gin.H{
			"message":"ID not Existed",
		})
	}
}

func UpdateStudent(context *gin.Context){
	var dataStudentUpdate StudentModel.Student
	err := context.BindJSON(&dataStudentUpdate)
	if err != nil {
		context.JSON(http.StatusBadRequest,gin.H{
			"message":"create failed",
		})
	panic(err.Error())
	}

	db := DBconnect()
	result,err := db.Query("SELECT * FROM student WHERE StudentID = ?",context.Param("studentid"))
	if err != nil {
		context.JSON(http.StatusInternalServerError,gin.H{
			"message":"Database error 1",
		})
	panic(err.Error())
	}
	if result.Next() {
		updateQuery,err := db.Prepare("UPDATE student SET First_name = ?, Last_name = ?, Enabled = ?, PhoneNo = ?,  Email = ?,updatedAt = NOW() where StudentID = ?")
		updateQuery.Exec(dataStudentUpdate.First_name,dataStudentUpdate.Last_name,dataStudentUpdate.Enabled,dataStudentUpdate.PhoneNo,dataStudentUpdate.Email,context.Param("studentid"))
		if err != nil {
			context.JSON(http.StatusInternalServerError,gin.H{
				"message":"Database error",
			})
		panic(err.Error())
		}
		context.JSON(http.StatusOK,gin.H{
			"message":"Update success",
		})
	}else{
		context.JSON(http.StatusBadRequest,gin.H{
			"message":"ID not Existed",
		})
	}

}