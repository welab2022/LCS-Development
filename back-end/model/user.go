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