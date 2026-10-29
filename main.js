import Ajv from "ajv";
const ajv = new Ajv({allErrors: true});

const schema = {
    "title": "Food Rating Schema",
    "description": "Schema for validating food rating data",
    "type": "object",
    "required": ["foodName", "rating", "Comments"],
    "properties": {
        "foodName": {
            "type": "string",
            "description": "The name of the food item"
        },
        "rating": {
            "type": "number",
            "description": "The rating for the food item",
            "exclusiveMinimum": 0,
            "maximum": 5
        },
        "Comments": {
            "type": "string",
            "description": "Any additional comments about the food item"
        }
    }
}

const validate = ajv.compile(schema);

const data = {
    "foodName": "Pizza",
    "rating": 4.5,
    "Comments": "Delicious and cheesy!"
};

const valid = validate(data);
if (!valid) {
    console.log("Data is invalid:", validate.errors);
}
else {
    console.log("Data is valid!");
}