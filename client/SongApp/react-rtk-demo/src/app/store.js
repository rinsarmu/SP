// const { getDefaultMiddleware } = require('@reduxjs/toolkit');
// const reduxLogger = require('redux-logger');
// const cakeReducer = require('../features/cake/cakeSlice')
// const iceCreamReducer = require('../features/icecream/icecream')
// const userReducer = require('../features/user/userSlice')

// const logger = reduxLogger.createLogger()
import reduxLogger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/icecream'
import userReducer from '../features/user/userSlice'
const store = configureStore({
    reducer:{
        cake:cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer
    },
    // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
  
})

export default store
