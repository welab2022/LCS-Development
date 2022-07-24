package model

type Mail struct {
    Sender  string
    To      []string
    Subject string
    Body    string
}
type Email struct{
    Email string `json:"email"`
}
type CheckForgotPassword struct{
    Email string `json:"email"`
    Token string  `json:"token"`
    Password string `json:"password"`
}