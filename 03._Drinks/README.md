# Drinks API

Below a REST API has been designed for a hypothetical system which revolves around drinks.
The API has been designed to meet the following principles:
1. ***Use the appropriate HTTP method for the action***
2. ***Be mindful of how you order the HTTP methods***
    This will improve readability. The preferred order of methods are: GET, POST, PUT, PATCH, DELETE
3. ***Name the endpoints so that they map to the collection (DB schema) in your system***

| **HTTP method** | **Endpoint**   | **Description**                                             |
|-----------------|----------------|-------------------------------------------------------------|
| GET             | /drinks        | Gets a full list of drinks                                  |
| GET             | /drinks/{id}   | Gets a single drink with the ID entered in place of {id}    |
| POST            | /drinks        | Adds a new drink to the collection                          |
| PUT             | /drinks/{id}   | Updates the drink with the ID entered in place of {id}      |
| DELETE          | /drinks/{id}   | Deletes the drink with the ID entered in place of {id}      |