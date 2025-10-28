import { createSlice } from "@reduxjs/toolkit";
// example
// {
// id: 1234,
// name: "Wednesday Chicken Bucket",
// category: "slicer",
//  quantity: 1 Kuch value de denge 
// }
// [{},{},{},{},{}]
const Cart = createSlice({
    name:'cartslice',
    initialState:{
        items:[],
        count:0,
    },
    reducers:{
        additems:(state,action)=>{
            state.items.push({...action.payload,quantity:1})
            state.count++
        },
        IncrementItems:(state,action)=>{
          const element = state.items.find(item=>item.id===action.payload.id)
          element.quantity+=1;
        },
        DecrementItems:(state,action)=>{
            const element = state.items.find(item=>item.id===action.payload.id)
            if(element.quantity>1){
                element.quantity-=1;
            }else{
                state.items = state.items.filter(item=>item.id!=action.payload.id)
            }
            state.count--;
        }
    }
})
export const {additems,IncrementItems,DecrementItems} = Cart.actions
export default Cart.reducer