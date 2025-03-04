package tweet_service

import (
	"context"
	"github.com/gocql/gocql"
	"github.com/segmentio/kafka-go"
)

func main() {
	cluster := gocql.NewCluster("cassandra")
	cluster.Keyspace = "chirper"
	session, _ := cluster.CreateSession()
	defer session.Close()

	// Kafka Writer
	tweetWriter := kafka.NewWriter(kafka.WriterConfig{
		Brokers: []string{"localhost:9092"},
		Topic:   "chirper",
	})

	// gRPC server implementaion...
}
