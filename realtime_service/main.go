package realtime_service

import (
	"github.com/gorilla/websocket"
	"github.com/segmentio/kafka-go"
	"net/http"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool { return true },
}

func main() {
	// Connect to Kafka
	r := kafka.NewReader(kafka.ReaderConfig{
		Brokers: []string{"kafka:9092"},
		Topic:   "tweets",
		GroupID: "realtime-group",
	})

	http.HandleFunc("/stream", func(w http.ResponseWriter, r *http.Request) {
		conn, _ := upgrader.Upgrade(w, r, nil)
		defer conn.Close()

		for {
			msg, _ := r.FetchMessage(context.Background())
			conn.WriteJSON(map[string]string{
				"id":      string(msg.Key),
				"content": string(msg.Value),
			})
			r.CommitMessages(context.Background(), msg)
		}
	})

	http.ListenAndServe(":8081", nil)
}
