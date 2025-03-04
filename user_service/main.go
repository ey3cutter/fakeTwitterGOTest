package user_service

import (
	_ "context"
	"fmt"
	"net"

	pb "chatHuitter/chirper-protos/user"
	"google.golang.org/grpc"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type UserService struct {
	db *gorm.DB
	pb.UnimplementedUserServiceServer
}

func main() {
	dsn := "host=postgres user=twitter password=secret dbname=twitter_db port=5433 sslmode=disable"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}

	lis, _ := net.Listen("tcp", ":50051")
	s := grpc.NewServer()
	pb.RegisterUserServiceServer(s, &UserService{db: db})

	fmt.Println("User service running at localhost:50051")
	s.Serve(lis)
}
