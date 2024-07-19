import json
from channels.generic.websocket import WebsocketConsumer
from channels.layers import get_channel_layer

class ChatConsumer(WebsocketConsumer):
    async def connect(self):
        self.room_group_name = 'chat'
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )
        self.accept()
    
    async def receive(self, text_data=None):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type' : 'chat_message',
                'message' : message
            }
        )
    def chat_message(self, event):
        message = event['message']

        self.send(text_data=json.dumps(
            {
                'type' : 'chat',
                'message' : message
            }
        ))
