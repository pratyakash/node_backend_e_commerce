# spark18_resto

# Following MVC Structure

# Dump of SQL is provided. Please restore that

# Things to do in future:- 
    * Multiple Delete

To Run:- 
    1. npm install
    2. npm run start-dev

# Restaurant
    * Add Restaurant
        link:- /restaurant/save_restaurants
        method:- POST
        body:- {
                    "restaurant": 
                        {
                            "name": "test",
                            "address": "hello",
                            "photo": "name.jpg",
                            "weekday_start_time": "13:00",
                            "weekday_end_time": "15:00",
                            "weekend_start_time": "2:00",
                            "weekend_end_time": "14:00"

                        }   
                }

    * Get All Restro
        link:- /restaurant/get_all_restaurant
        method:- GET

    * Get Restro By Id
        link:- /restaurant/get_restaurant_by_id?id=7
        method:- GET

    * Delete Restro
        link:- /restaurant/delete_restaurants?id=
        method:- DELETE
    
    * Update Restro
        link:- /restaurant/update_restaurant
        method:- PUT
        body:- {
                    "restaurant": {
                            "id": 7,
                            "name": "test3",
                            "address": "hello",
                            "photo": "name.jpg",
                            "weekday_start_time": "13:00:00",
                            "weekday_end_time": "15:00:00",
                            "weekend_start_time": "14:00:00",
                            "weekend_end_time": null,
                            "is_active": true
                    }
                }

# Product
    * Add product
        link:- /product/save_product
        method:- POST
        body:- {
                    "product": 
                        {
                            "name": "test",
                            "price": "50",
                            "photo": "name.jpg",
                            "sale_days": "Monday,Tuesday",
                            "sale_start_time": "13:00",
                            "sale_end_time": "15:00",
                            "product_category_id": "2",
                            "sale_price": "22",
                            "sale_description": "Free",
                            "restaurant_id": "2"
                        }   
                }

    * Get All Product By Restro Id
        link:- /product/get_all_product_by_restarant_id?id=2
        method:- GET

    * Delete Product
        link:- /product/delete_product?id=
        method:- DELETE
    
    * Update Product
        link:- /product/update_product
        method:- PUT
        body:- {
                    "product": 
                        {
                            "name": "test",
                            "price": "50",
                            "photo": "name.jpg",
                            "sale_days": "Monday,Tuesday",
                            "sale_start_time": "13:00",
                            "sale_end_time": "15:00",
                            "product_category_id": "2",
                            "sale_price": "22",
                            "sale_description": "Free",
                            "restaurant_id": "2",
                            "is_active": 1
                        }   
                }


# Product Category
    * Add product
        link:- /product_category/save_product
        method:- POST
        body:- {
                    "category": 
                        {
                            "name": "test"
                        }   
                }

    * Get All Product Category
        link:- /product_category/get_all_product_category
        method:- GET

    * Update Product
        link:- /product_category/update_product_category
        method:- PUT
        body:- {
                    "product": 
                        {
                            "name": "test",
                            "is_active": 1,
                            "id": 1
                        }   
                }



# Things to do in future:- 
    * Multiple Delete
    * S3 upload fucntion