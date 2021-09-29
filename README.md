# NodeJsChallenge
Alkemy's 🚀 CHALLENGE BACKEND - NodeJs

## Requirements

* Node.js version 14 or above is needed.

## APIs examples

<details>
<summary>examples</summary>

* Sign up a character using ```POST /auth/register``` Api:

![image](https://user-images.githubusercontent.com/11562125/133787200-1a3c2b8b-5a8e-4651-bcaa-a2664cd321a1.png)

* Sign in a character using ```GET /auth/login``` Api:

![image](https://user-images.githubusercontent.com/11562125/133788700-842087b7-ab9e-4fdb-8497-eb76f978302b.png)

* Create a new character using ```POST /characters``` Api: 

![image](https://user-images.githubusercontent.com/11562125/133789624-4e4cb847-447f-4349-8afb-ca03c561efb4.png)

* List all characters using ```GET /characters``` Api:

![image](https://user-images.githubusercontent.com/11562125/133790464-b126f96d-c14b-4b6b-a520-1d6f4ccddae7.png)

* Edit character using ```PUT /characters/{id}``` Api:

![image](https://user-images.githubusercontent.com/11562125/133791015-55404696-b370-4d67-9397-07c8d75f4f85.png)

* Delete a character using ```DELETE /characters/{id}``` Api:

![image](https://user-images.githubusercontent.com/11562125/133792547-4ce64088-8b7e-4652-962d-de7388ee6e24.png)

* View a character and his appearances using ```GET /characters/{id}``` Api:

![image](https://user-images.githubusercontent.com/11562125/133794810-3376f297-b99e-45af-934c-fdb8c1889301.png)

* Find a character by his name using ```GET /characters/name/{name}``` Api:

![image](https://user-images.githubusercontent.com/11562125/133795298-19d2f561-6b12-41f6-b32a-83812ffd3ea5.png)

* Find a character by his age using ```GET /characters/age/{age}``` Api:
  
![image](https://user-images.githubusercontent.com/11562125/133796114-569b82b8-4407-4c17-8d50-c1beb1d6a5ab.png)

* Find a character by a movie/serie using ```GET /characters/movies/{movieId}``` Api:
  
![image](https://user-images.githubusercontent.com/11562125/133796287-67c0ba10-d562-4b3b-bea2-376ba00e8d53.png)
  
* List all movies/series using ```GET /movies``` Api: 
  
![image](https://user-images.githubusercontent.com/11562125/133796594-a1feda70-4b13-4e14-8e61-d8aa09048ac6.png)

* View a movie/serie and its characters using ```GET /movies/{id}``` Api:
  
![image](https://user-images.githubusercontent.com/11562125/133796829-34c785ad-76a2-41fa-98f2-ceb34c7ec5f2.png)

* Create a movie using ```POST /movies``` Api:

![image](https://user-images.githubusercontent.com/11562125/133793857-aed33451-f441-4c40-be48-41ffc768e9cd.png)
  
* Update a movie/serie using ```PUT /movie/{id}``` Api:
  
![image](https://user-images.githubusercontent.com/11562125/133797156-ec56c328-66ee-4000-b0ce-fe386df8c892.png)

* Delete a movie/serie using ```DELETE /movie/{id}``` Api:
  
![image](https://user-images.githubusercontent.com/11562125/135288723-6100c207-a566-4896-a513-5cd594f0969d.png)
  
* Find a movie/serie by its name using ```GET /movies/name/{name}``` Api:
  
![image](https://user-images.githubusercontent.com/11562125/135290239-77342481-e0d9-4d33-abe6-6ffcd907da83.png)
  
* Find a movie/serie by its Genre using ```GET /movies/genre/{genreId}``` Api:
  
![image](https://user-images.githubusercontent.com/11562125/135290951-4fdb8dac-82ff-4e8d-b3ef-4c4de68b99d6.png)
  
* Order a movie/serie ascendant by its creation date using ```GET /movies/order/{ASC}``` Apí:
  
![image](https://user-images.githubusercontent.com/11562125/135291645-c3b02b53-6f89-4826-b190-a4c389f917f2.png)
  
* Order a movie/serie descendant by its creation date using ```GET /movies/order/{DESC}``` Api:

![image](https://user-images.githubusercontent.com/11562125/135292124-6e708c8f-de29-46e7-8d2a-1a12a83d5214.png)

</details>

You can find endpoint documentation in /static/postman_collection.json file


