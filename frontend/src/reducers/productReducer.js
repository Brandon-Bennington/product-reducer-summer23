// reducers/productReducer.js
import {v4 as uuidv4} from 'uuid'

const initialState = [];

export default function productReducer (state = initialState, action) {
    switch (action.type) {
        case 'delete-product':
            let filteredArray = state.filter(element => element.id === action.id ? false : true)
            return filteredArray;
        case 'edit-product':
            let editedArray = state.map(element =>  element.id === action.editedObj.id ? action.editedObj : element) 
            return editedArray
        case 'add-product':
            let newProduct = {
                id: uuidv4(),
                title: "",
                publisher: "", 
                genre: "",
                price: 0    
            }
            let addArray = [
                newProduct,
                ...state
            ];
            return addArray
        case 'get-products':
            return action.payload  
        case 'add-store':
            let payloadArr = action.payload.map(element => {
                return {
                        id: element.id,
                        title: element.gameTitle,
                        publisher: element.publisherName,
                        genre: element.genre,
                        price: element.MSRP
                        }
            })
            return [...payloadArr, ...state]
        default:
            alert('No matching types!')
            return state;
    }
}
