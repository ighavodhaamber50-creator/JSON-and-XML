const schema =
{
  "type": "object",
  "properties": {
    "customerName": {
      "type": "string"
    },
    "restaurantName": {
      "type": "string"
    },
    "rating": {
      "type": "integer",
      "minimum": 1,
      "maximum": 5
    },
    "review": {
      "type": "string"
    },
    "deliveryTime": {
      "type": "integer"
    }
  },
  "required": [
    "customerName",
    "restaurantName",
    "rating",
    "review"
  ],
  "additionalProperties": false
}