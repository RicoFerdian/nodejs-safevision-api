## API Documentation

##### Hostname : `http://safevision.id:6500`

#### Resident Routes (Mobile Client) :

##### Through HTTP
- **User Login**

  - URL : `/user/login/resident`

  - Request Body :

    ```
    {
    	"email": "user1@gmail.com",
    	"password": "user1@gmail.com"
    }    
    ```

  - Expected Response :

    ```
    {
      "message": "Success",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkOWFiM2U3OTNiMjM4MTg0YWU3M2FhOCIsInJvbGUiOiJyZXNpZGVudCIsImlhdCI6MTU3MDQxOTc2NSwiZXhwIjoxNTcwNTA2MTY1fQ.NLmN7i3ImdnMx0HM9aruSKNeEo8OX50PsyoGibV7dAE"
    }
    ```
- **Change User Password**

  - URL : `/user/changePassword`
  - Request Header :

    ```
    Content-Type=application/json
    x-access-token={TOKEN} // User token from login
    ```

  - Request Body :

    ```
    {
    	"current_password": "user1@gmail.com",
    	"new_password": "newpassword"
    }    
    ```

  - Expected Response :

    ```
    {
      "message": "Success",
      "data": "5d736b440213f96eee9920ef"
    }
    ```

- **Add new sensor**

  - URL : `/sensor/create`

  - Request Header :

    ```
    Content-Type=application/json
    x-access-token={TOKEN} // User token from login
    ```

  - Request Body :

    ```
    {
    	"id": "SNSR0001", // sensor id
    	"jenis": "alarm", // sensor type
    	"long": "3423480923.21",
    	"lat": "2342830420938.22"
    }    
    ```

  - Expected Response :

    ```
    {
      "data": [],
      "_id": "SNSR0001",
      "jenis": "alarm",
      "status": "0",
      "username": "user2@gmail.com",
      "long": "3423480923.21",
      "lat": "2342830420938.22",
      "__v": 0
    }
    ```
- **Get sensor by Id**

  - URL : `/sensor/getById/{sensorId}`

  - Request Header :

    ```
    x-access-token={TOKEN} // User token from login
    ```

  - Expected Response :

    ```
    {
      "data": [],
      "_id": "5d739fea84498c1220ad4455",
      "jenis": "alarm",
      "status": "0",
      "username": "user2@gmail.com",
      "long": "457439745837498.21",
      "lat": "9374283748123.22",
      "__v": 0
    }
    ```
- **Get user sensor**

  - URL : `/sensor/getByUsername`

  - Request Header :

    ```
    x-access-token={TOKEN} // User token from login
    ```

  - Expected Response :

    ```
    [
      {
        "data": [],
        "_id": "5d739fc884498c1220ad4454",
        "jenis": "alarm",
        "status": "0",
        "username": "user2@gmail.com",
        "long": "22223141231.21",
        "lat": "44423112312.22",
        "__v": 0
      },
      {
        "data": [],
        "_id": "5d739fea84498c1220ad4455",
        "jenis": "cctv",
        "status": "1",
        "username": "user2@gmail.com",
        "long": "457439745837498.21",
        "lat": "9374283748123.22",
        "__v": 0
      },
      {
        "data": [],
        "_id": "5d99daace184ddb96c23aee3",
        "jenis": "alarm",
        "status": "1",
        "username": "user2@gmail.com",
        "long": "457439745837498.21",
        "lat": "9374283748123.22",
        "__v": 0
      }
    ]
    ```
- **Update sensor data**

  - URL : `/sensor/updateById/{sensorId}`
  
  - Request Body :

    ```
    {
    	"jenis": "alarm", // sensor type
    	"long": "3423480923.21",
    	"lat": "2342830420938.22"
    }    
    ```

  - Request Header :

    ```
    x-access-token={TOKEN} // User token from login
    ```

  - Expected Response :

    ```
    {
      "status": "0",
      "data": [],
      "_id": "5da1e820c72b96766d7a3091",
      "jenis": "alarm",
      "long": "457439745837498.255",
      "lat": "9374283748123.22",
      "username": "user2@gmail.com",
      "__v": 0
    }
    ```
- **Delete sensor data**

  - URL : `/sensor/deleteById/{sensorId}`

  - Request Header :

    ```
    x-access-token={TOKEN} // User token from login
    ```

  - Expected Response :

    ```
    {
      "status": "0",
      "data": [],
      "_id": "5da1e820c72b96766d7a3091",
      "jenis": "alarm",
      "long": "457439745837498.255",
      "lat": "9374283748123.22",
      "username": "user2@gmail.com",
      "__v": 0
    }
    ```
##### Through Websocket

- Socket Client JS : `/socket.io/socket.io.js`

- Socket Client Server : **Hostname**

- Events :

  - To be emitted :

    - **Requesting real-time data for web and mobile client**

        - Name : `client_request`

        - Data to send :

            ```
            {
                token: {userToken} // resident/security token retrieved in login
            }
            ```

        - Response : Server emits event _**api_data_push**_
    - **Pushing real-time sensor data**

        - Name : `sensor_1_push`

        - Data to send :

            ```
            {
                id: {sensorId},
                door: (0 | 1), // 1 if door is opened, 0 if it's closed
                motion: (0 | 1), // 1 if ... , 0 if ...
            }
            ```
  - To be listened :
    - **Response for _client_request_ event**

        - Name : `api_data_push`

        - Data : 

          ```
          [
              {
                "data": [],
                "_id": "5d739fc884498c1220ad4454",
                "jenis": "alarm",
                "status": "0",
                "username": "user2@gmail.com",
                "long": "22223141231.21",
                "lat": "44423112312.22",
                "__v": 0
              },
              {
                "data": [],
                "_id": "5d739fea84498c1220ad4455",
                "jenis": "cctv",
                "status": "1",
                "username": "user2@gmail.com",
                "long": "457439745837498.21",
                "lat": "9374283748123.22",
                "__v": 0
              },
              {
                "data": [],
                "_id": "5d99daace184ddb96c23aee3",
                "jenis": "alarm",
                "status": "1",
                "username": "user2@gmail.com",
                "long": "457439745837498.21",
                "lat": "9374283748123.22",
                "__v": 0
              }
            ]
          ```

#### Security Routes (Web Client) :
- Register user

  - URL : `/user/create`

  - Request Body :

- **NOT YET**
