import { combineReducers } from 'redux'
import userReducer from './user.reducers';
import authReducer from './auth.reducers'
import reportReducer from './report.reducers'
import categoryReducer from './category.reducers';

// import userReducer from './user.reducers';
// import productReducer from './product.reducer';
// import orderReducer from './order.reducer';
// import pageReducer from './page.reducer'


const reducer = combineReducers({
    user: userReducer,
    auth: authReducer,
    report: reportReducer,
    category: categoryReducer,
    // product: productReducer,
    // page: pageReducer,
    // order: orderReducer,
});

export default reducer