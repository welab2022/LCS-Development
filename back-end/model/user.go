package model

import "time"

type User struct {
	name string `json:"name"`
	email	 string  `json:"email"`
	password	string  `json:"password"`
	createdAt time.Time
	updatedAt time.Time
	enabled bool

}
type Password struct {
	Password string 
}
type UserUpdatePassword struct {
	CurrentPassword string
	NewPassword string
}
type Number struct {
	Number int
}
type UserRead struct {
	Name string `json:"name"`
	Email	 string  `json:"email"`
}
type UserCreate struct {
	Email	 string  
	Name 	 string  
	Password string  
}
type UserUpdate struct {
	Name string

}