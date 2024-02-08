# AI models API

Below a REST API has been designed for a hypothetical system which revolves around AI models.
The API has been designed to meet the following principles:
1. ***Use the appropriate HTTP method for the action***
2. ***Be mindful of how you order the HTTP methods***
    This will improve readability. The preferred order of methods are: GET, POST, PUT, PATCH, DELETE
3. ***Name the endpoints so that they map to the collection (DB schema) in your system***

| **HTTP method** | **Endpoint**   | **Description**                                             |
|-----------------|----------------|-------------------------------------------------------------|
| GET             | /aimodels      | Gets a full list of AI models                               |
| GET             | /aimodels/{id} | Gets a single AI model with the ID entered in place of {id} |
| POST            | /aimodels      | Adds a new AI model to the collection                       |
| PUT             | /aimodels/{id} | Updates the AI model with the ID entered in place of {id}   |
| DELETE          | /aimodels/{id} | Deletes the AI model with the ID entered in place of {id}   |