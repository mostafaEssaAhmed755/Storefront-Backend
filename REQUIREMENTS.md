## API Endpoints

### Users

-   Index For Admin - **`token required`** - **`admin required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/admin/users/`
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Array of user objects`

        ```json
        {
        	"status": "success",
        	"data": [
        		{
        			"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"email": "mostafa.essa.ahmed755@gmail.com",
        			"firstName": "mostafa",
        			"lastName": "essa",
        			"address": "qina qous",
        			"age": 23,
        			"gender": "male",
        			"is_admin": true,
        			"created_at": "2022-07-017 04:05:06"
        		}
        	],
        	"message": "get all users successfuly"
        }
        ```

-   Show For Admin **`token required`** - **`admin required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/users/:id` - **id of the user to be retrieved**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Data object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"email": "mostafa.essa.ahmed755@gmail.com",
        		"firstName": "mostafa",
        		"lastName": "essa",
        		"address": "qina qous",
        		"age": 23,
        		"gender": "male",
        		"is_admin": true,
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "get user successfuly"
        }
        ```

-   Show For User **`token required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/profile/`
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Data object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"email": "mostafa.essa.ahmed755@gmail.com",
        		"firstName": "mostafa",
        		"lastName": "essa",
        		"address": "qina qous",
        		"age": 23,
        		"gender": "male",
        		"is_admin": true,
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "get user successfuly"
        }
        ```

-   Create For Admin **`token required`** - **`admin required`**

    -   HTTP verb `POST`
    -   Endpoint:- `/api/admin/users`
    -   Request Body

        ```json
        {
        	"email": "mostafa.essa.ahmed755@gmail.com",
        	"firstName": "mostafa",
        	"lastName": "essa",
        	"password": "mostafa755",
        	"address": "qina qous",
        	"age": 23,
        	"gender": "male",
        	"is_admin": true
        }
        ```

    -   Response Body -- `User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"email": "mostafa.essa.ahmed755@gmail.com",
        		"firstName": "mostafa",
        		"lastName": "essa",
        		"address": "qina qous",
        		"age": 23,
        		"gender": "male",
        		"is_admin": true,
        		"created_at": "2022-07-017 04:05:06",
        		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VyTmFtZSI6InRlc3R1c2VyIiwiZmlyc3ROYW1lIjoiVGVzdCIsImxhc3ROYW1lIjoiVXNlciJ9LCJpYXQiOjE2MjUwMDAyNTB9.y45Rlb9_olQIZpTHzFMH5fHK_coRlzcEuXQC2FXtCBY"
        	},
        	"message": "created user successfuly"
        }
        ```

-   Delete For Admin **`token required`** - **`admin required`**

    -   HTTP verb `DELETE`
    -   Endpoint:- `/api/admin/users/:id` - **id of the user to be deleted**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Deleted User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"email": "mostafa.essa.ahmed755@gmail.com",
        		"firstName": "mostafa",
        		"lastName": "essa",
        		"address": "qina qous",
        		"age": 23,
        		"gender": "male",
        		"is_admin": false,
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "deleted user successfuly"
        }
        ```

-   Update For Admin **`token required`** - **`admin required`**

    -   HTTP verb `PATCH`
    -   Endpoint:- `/api/admin/users/:id`
    -   Request Body

        ```json
        {
        	"firstName": "mostafa",
        	"lastName": "essa",
        	"password": "mostafa755",
        	"address": "qina qous",
        	"age": 23,
        	"gender": "male",
        	"is_admin": true
        }
        ```

    -   Response Body -- `Updated User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"email": "mostafa.essa.ahmed755@gmail.com",
        		"firstName": "mostafa",
        		"lastName": "essa",
        		"address": "qina qous",
        		"age": 23,
        		"gender": "male",
        		"is_admin": true,
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "updated user successfuly"
        }
        ```

-   Update For User **`token required`**

    -   HTTP verb `PATCH`
    -   Endpoint:- `/api/profile`
    -   Request Body

        ```json
        {
        	"firstName": "mostafa",
        	"lastName": "essa",
        	"address": "qina qous",
        	"age": 23,
        	"gender": "male"
        }
        ```

    -   Response Body -- `Updated User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"email": "mostafa.essa.ahmed755@gmail.com",
        		"firstName": "mostafa",
        		"lastName": "essa",
        		"address": "qina qous",
        		"age": 23,
        		"gender": "male",
        		"is_admin": false,
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "updated user successfuly"
        }
        ```

-   Register For User

    -   HTTP verb `POST`
    -   Endpoint:- `/register`
    -   Request Body

        ```json
        {
        	"email": "mostafa.essa.ahmed755@gmail.com",
        	"firstName": "mostafa",
        	"lastName": "essa",
        	"password": "mostafa755",
        	"address": "qina qous",
        	"age": 23,
        	"gender": "male"
        }
        ```

    -   Response Body -- `User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"email": "mostafa.essa.ahmed755@gmail.com",
        		"firstName": "mostafa",
        		"lastName": "essa",
        		"address": "qina qous",
        		"age": 23,
        		"gender": "male",
        		"is_admin": false,
        		"created_at": "2022-07-017 04:05:06",
        		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJ1c2VyTmFtZSI6InRlc3R1c2VyIiwiZmlyc3ROYW1lIjoiVGVzdCIsImxhc3ROYW1lIjoiVXNlciJ9LCJpYXQiOjE2MjUwMDAyNTB9.y45Rlb9_olQIZpTHzFMH5fHK_coRlzcEuXQC2FXtCBY"
        	},
        	"message": "created user successfuly"
        }
        ```

-   login

    -   HTTP verb `POST`
    -   Endpoint:- `/login`
    -   Request Body

        ```json
        {
        	"email": "mostafa.essa.ahmed755@gmail.com",
        	"password": "mostafa755"
        }
        ```

    -   Response Body -- `Updated User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"email": "mostafa.essa.ahmed755@gmail.com",
        		"firstName": "mostafa",
        		"lastName": "essa",
        		"address": "qina qous",
        		"age": 23,
        		"gender": "male",
        		"is_admin": true,
        		"created_at": "2022-07-017 04:05:06",
        		"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6Im1vQGVsemFuYXR5LmNvbSIsInVzZXJOYW1lIjoibW9oYW1tZWRlbHphbmF0eSIsImZpcnN0TmFtZSI6Ik1vaGFtbWVkIiwibGFzdE5hbWUiOiJFbHphbmF0eSJ9LCJpYXQiOjE2MjUwMDExMDB9.ubpj0l9VSl2Hd-KlHRqqO3-PmSf0VAySY2qnJ1N_S2Y"
        	},
        	"message": "authenticated user successfuly"
        }
        ```

### Products

-   Index For Admin - **`token required`** - **`admin required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/admin/products/`
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Array of products`

        ```json
        {
        	"status": "success",
        	"data": [
        		{
        			"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"name": "product_one",
        			"price": 15,
        			"description": "description for this product",
        			"image": "https://placekitten.com/200/300",
        			"quantity": 50,
        			"category_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"created_at": "2022-07-017 04:05:06"
        		}
        	],
        	"message": "get all products  successfuly"
        }
        ```

-   Index For User

    -   HTTP verb `GET`
    -   Endpoint:- `/api/products/`
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Array of products`

        ```json
        {
        	"status": "success",
        	"data": [
        		{
        			"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"name": "product_one",
        			"price": 15,
        			"description": "description for this product",
        			"image": "https://placekitten.com/200/300",
        			"quantity": 50,
        			"category_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"created_at": "2022-07-017 04:05:06"
        		}
        	],
        	"message": "get all products  successfuly"
        }
        ```

-   Show For Admin - **`token required`** - **`admin required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/admin/products/:id` - **id of the product to be retrieved**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Product object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "product_one",
        		"price": 15,
        		"description": "description for this product",
        		"image": "https://placekitten.com/200/300",
        		"quantity": 50,
        		"category_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "get product successfuly"
        }
        ```

-   Show For User

    -   HTTP verb `GET`
    -   Endpoint:- `/api/products/:id` - **id of the product to be retrieved**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Product object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "product_one",
        		"price": 15,
        		"description": "description for this product",
        		"image": "https://placekitten.com/200/300",
        		"quantity": 50,
        		"category_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "get product successfuly"
        }
        ```

-   Create **`token required`** - **`admin required`**

    -   HTTP verb `POST`
    -   Endpoint:- `/api/admin/products`
    -   Request Body

        ```json
        {
        	"name": "product_one",
        	"price": 15,
        	"description": "description for this product",
        	"image": "https://placekitten.com/200/300",
        	"quantity": 50,
        	"category_id": "88812f84-34bc-4355-8965-1d5e066f70e7"
        }
        ```

    -   Response Body -- `User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "product_one",
        		"price": 15,
        		"description": "description for this product",
        		"image": "https://placekitten.com/200/300",
        		"quantity": 50,
        		"category_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "created product successfuly"
        }
        ```

-   Update **`token required`** - **`admin required`**

    -   HTTP verb `PATCH`
    -   Endpoint:- `/api/admin/products/:id`
    -   Request Body

        ```json
        {
        	"name": "product_one",
        	"price": 15,
        	"description": "description for this product",
        	"image": "https://placekitten.com/200/300",
        	"quantity": 50
        }
        ```

    -   Response Body -- `Updated User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "product_one",
        		"price": 15,
        		"description": "description for this product",
        		"image": "https://placekitten.com/200/300",
        		"quantity": 50,
        		"category_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "updated product successfuly"
        }
        ```

-   Delete **`token required`** - **`admin required`**

    -   HTTP verb `DELETE`
    -   Endpoint:- `/api/admin/products/:id` - **id of the product to be deleted**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Deleted Product object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "product_one",
        		"price": 15,
        		"description": "description for this product",
        		"image": "https://placekitten.com/200/300",
        		"quantity": 50,
        		"category_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "deleted product successfuly"
        }
        ```

### Categories

-   Index For Admin - **`token required`** - **`admin required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/admin/categories/`
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Array of products`

        ```json
        {
        	"status": "success",
        	"data": [
        		{
        			"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"name": "category_one",
        			"image": "https://placekitten.com/200/300",
        			"created_at": "2022-07-017 04:05:06"
        		}
        	],
        	"message": "get all categories  successfuly"
        }
        ```

-   Index For User

    -   HTTP verb `GET`
    -   Endpoint:- `/api/categories/`
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Array of categories`

        ```json
        {
        	"status": "success",
        	"data": [
        		{
        			"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"name": "category_one",
        			"image": "https://placekitten.com/200/300",
        			"created_at": "2022-07-017 04:05:06"
        		}
        	],
        	"message": "get all categories  successfuly"
        }
        ```

-   Show For Admin - **`token required`** - **`admin required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/admin/categories/:id` - **id of the categorie to be retrieved**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Categories object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "category_one",
        		"image": "https://placekitten.com/200/300",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "get category successfuly"
        }
        ```

-   Show For User

    -   HTTP verb `GET`
    -   Endpoint:- `/api/categories/:id` - **id of the category to be retrieved**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Category object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "category_one",
        		"image": "https://placekitten.com/200/300",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "get category successfuly"
        }
        ```

-   Create **`token required`** - **`admin required`**

    -   HTTP verb `POST`
    -   Endpoint:- `/api/admin/categories`
    -   Request Body

        ```json
        {
        	"name": "category_one",
        	"image": "https://placekitten.com/200/300"
        }
        ```

    -   Response Body -- `category object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "category_one",
        		"image": "https://placekitten.com/200/300",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "created category successfuly"
        }
        ```

-   Update **`token required`** - **`admin required`**

    -   HTTP verb `PATCH`
    -   Endpoint:- `/api/admin/categories/:id`
    -   Request Body

        ```json
        {
        	"name": "category_one",
        	"image": "https://placekitten.com/200/300"
        }
        ```

    -   Response Body -- `Updated category object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"name": "category_one",
        		"image": "https://placekitten.com/200/300",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "updated category successfuly"
        }
        ```

-   Delete **`token required`** - **`admin required`**

    -   HTTP verb `DELETE`
    -   Endpoint:- `/api/admin/categories/:id` - **id of the category to be deleted**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Deleted category object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"name": "category_one",
        		"image": "https://placekitten.com/200/300"
        	},
        	"message": "deleted category successfuly"
        }
        ```

### Orders

-   Index For Admin - **`token required`** - **`admin required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/admin/orders/`
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Array of order objects`

        ```json
        {
        	"status": "success",
        	"data": [
        		{
        			"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"total_price": 50,
        			"status": "pending",
        			"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"created_at": "2022-07-017 04:05:06"
        		}
        	],
        	"message": "get all orders  successfuly"
        }
        ```

-   Index For User - **`token required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/orders/`
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Array of order objects`

        ```json
        {
        	"status": "success",
        	"data": [
        		{
        			"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"total_price": 50,
        			"status": "pending",
        			"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        			"created_at": "2022-07-017 04:05:06"
        		}
        	],
        	"message": "get all orders  successfuly"
        }
        ```

-   Show For Admin - **`token required`** - **`admin required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/admin/orders/:id` - **id of the order to be retrieved**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Order object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"total_price": 50,
        		"status": "pending",
        		"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06",
        		"items": [
        			{
        				"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"price": 10,
        				"quantity": 20,
        				"order_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"product_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"created_at": "2022-07-017 04:05:06"
        			}
        		]
        	},
        	"message": "get order successfuly"
        }
        ```

-   Show For User - **`token required`**

    -   HTTP verb `GET`
    -   Endpoint:- `/api/orders/:id` - **id of the order to be retrieved**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Order object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"total_price": 50,
        		"status": "pending",
        		"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06",
        		"items": [
        			{
        				"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"price": 10,
        				"quantity": 20,
        				"order_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"product_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"created_at": "2022-07-017 04:05:06"
        			}
        		]
        	},
        	"message": "get order successfuly"
        }
        ```

-   Create For Admin **`token required`** - **`admin required`**

    -   HTTP verb `POST`
    -   Endpoint:- `/api/admin/orders`
    -   Request Body

        ```json
        {
        	"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        	"items": [
        		{ "id": "88812f84-34bc-4355-8965-1d5e066f70e7", "quantity": 10 }
        	]
        }
        ```

    -   Response Body -- `User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"total_price": 100,
        		"status": "pending",
        		"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06",
        		"items": [
        			{
        				"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"price": 10,
        				"quantity": 10,
        				"order_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"product_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"created_at": "2022-07-017 04:05:06"
        			}
        		]
        	},
        	"message": "created order successfuly"
        }
        ```

-   Create For User **`token required`**

    -   HTTP verb `POST`
    -   Endpoint:- `/api/orders`
    -   Request Body

        ```json
        {
        	"items": [
        		{ "id": "88812f84-34bc-4355-8965-1d5e066f70e7", "quantity": 10 }
        	]
        }
        ```

    -   Response Body -- `User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"total_price": 100,
        		"status": "pending",
        		"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06",
        		"items": [
        			{
        				"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"price": 10,
        				"quantity": 10,
        				"order_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"product_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        				"created_at": "2022-07-017 04:05:06"
        			}
        		]
        	},
        	"message": "created order successfuly"
        }
        ```

-   Delete For Admin **`token required`** - **`admin required`**

    -   HTTP verb `DELETE`
    -   Endpoint:- `/api/admin/orders/:id` - **id of the order to be deleted**
    -   Request Body

        ```json
          N/A
        ```

    -   Response Body -- `Deleted Order object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"total_price": 100,
        		"status": "pending",
        		"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "deleted order successfuly"
        }
        ```

-   Update For Admin **`token required`** - **`admin required`**

    -   HTTP verb `PUT`
    -   Endpoint:- `/api/admin/orders/:id`
    -   Request Body

        ```json
        {
        	"status": "completed"
        }
        ```

    -   Response Body -- `Updated User object`

        ```json
        {
        	"status": "success",
        	"data": {
        		"id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"total_price": 100,
        		"status": "completed",
        		"user_id": "88812f84-34bc-4355-8965-1d5e066f70e7",
        		"created_at": "2022-07-017 04:05:06"
        	},
        	"message": "updated order successfuly"
        }
        ```

-   [OPTIONAL] Completed Orders by user [args: user id](token required)

## Data Schema

### Categories Schema

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    image VARCHAR(100) NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

### Products Schema

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS products (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price NUMERIC(10,2) NOT NULL,
    description TEXT NULL,
    image VARCHAR(100) NULL,
    quantity INTEGER NOT NULL,
    category_id uuid NOT NULL REFERENCES categories(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

### Users Schema

```sql
CREATE TYPE GENDER AS ENUM ('male', 'female');

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    age INTEGER NOT NULL,
    gender GENDER NOT NULL,
    is_admin BOOLEAN DEFAULT 'false' NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

### Orders Schema

```sql
CREATE TYPE STATUS AS ENUM ('pending', 'completed', 'rejected');

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS orders (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    total_price NUMERIC(10,2) NOT NULL,
    status STATUS DEFAULT 'pending' NOT NULL,
    user_id uuid NOT NULL REFERENCES users(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

### Order Items Schema

```sql
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS order_items (
    id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    price NUMERIC(10,2) NOT NULL,
    quantity INTEGER NOT NULL,
    order_id uuid NOT NULL REFERENCES orders(id)  ON DELETE CASCADE ON UPDATE CASCADE,
    product_id uuid NOT NULL REFERENCES products(id),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL
);
```

## Data Shapes

### User

```typescript
type userType = {
	id?: string;
	email?: string;
	first_name?: string;
	last_name?: string;
	password?: string;
	address?: string;
	age?: number;
	gender?: 'male' | 'female';
	is_admin?: boolean;
	created_at?: string;
};
```

### Category

```typescript
type categoryType = {
	id?: string;
	name?: string;
	image?: string;
	created_at?: string;
};
```

### Product

```typescript
type productType = {
	id?: string;
	name?: string;
	price?: number;
	description?: string;
	image?: string;
	quantity?: number;
	category_id?: string;
	created_at?: string;
};
```

### Order

```typescript
type orderType = {
	id?: string;
	total_price?: number;
	status?: string;
	user_id?: string;
	created_at?: string;
};
```

### Order Items

```typescript
type orderItemType = {
	id?: string;
	price?: number;
	quantity?: number;
	order_id?: string;
	product_id?: string;
	created_at?: string;
};
```
