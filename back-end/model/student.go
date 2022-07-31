package model

type Student struct {
	StudentID int
	First_name string  `json:"First_name" binding:"required"`
	Last_name string   `json:"Last_name" binding:"required"`
	DoB string  
	Gender string 
	Email string `json:"email" binding:"required,email"`
	PhoneNo int   
	Note string 
	CreatedAt 	 string  
	UpdatedAt string 
	Enabled   bool 
}


// type Student struct {
// 	StudentID int
// 	First_name string  
// 	Last_name string   
// 	DoB string  
// 	Gender string 
// 	Email string 
// 	PhoneNo int   
// 	Note string 
// 	CreatedAt 	 string  
// 	UpdatedAt string 
// 	Enabled   bool 
// }

type PrimaryKeyCount struct{
	PrimaryKey int64
}