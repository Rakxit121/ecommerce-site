// api.js

import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:5000/',
    withCredentials: true,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// Make seperate header for authorization
const config = {
    headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`,
    }    
}


export const testApi = () => Api.get('/test');
// http://localhost:5600/test

// create user api
export const createUserApi = (data) => Api.post('/api/user/create', data);

// login user api
export const loginUserApi = (data) => Api.post('/api/user/login', data);

// get all user api
export const getAllUsersApi = () => Api.get('/api/user/get_users')

// update user api
export const updateUserApi = (id, formData) => Api.put(`/api/user/update_user/${id}`, formData, config)

// delete user api
export const deleteUserApi = (id) => Api.delete(`/api/user/delete_user/${id}`, config)

//create product api
export const createProductApi = (data) => Api.post('/api/product/create_product',data, config)

//get all products
export const getAllProductsApi = () => Api.get('/api/product/get_products')

//get single product api
export const getSingleProductApi = (id) => Api.get(`/api/product/get_product/${id}`)

//update product api with id
export const updateProductApi = (id, formData) => Api.put(`/api/product/update_product/${id}`, formData, config)

//delete product api with id
export const deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`, config)



// Add to cart API
export const addToCartApi1 = (productId) => Api.post('/api/product/addToCart', { productId }, config);

// Fetch all cart API
export const fetchCartItemsApi = () => Api.get('/api/product/get_cart')

// Add to favourite API
export const addToFavouriteApi = (productId) => Api.post('/api/favourite/add_to_favourite', { productId }, config);


// Create Order API
export const createOrderApi = (data) => Api.post('/api/product/create_order', data, config);

// Get all Orders API
export const getAllOrdersApi = () => Api.get('/api/product/get_orders')


// create contact
export const createContactApi = (data) => Api.post('/api/contact/create_contact', data)

// get all contact
export const getContactApi = () => Api.get('/api/contact/get_contact')

// get contact by id
export const getContactByIdApi = (id) => Api.get(`/api/contact/get_contact/${id}`)

// delete contact
export const deleteContactApi = (id) => Api.delete(`/api/contact/delete_contact/${id}`)



