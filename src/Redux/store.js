import {legacy_createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk"
import { reducer as AppReducer } from "../Redux/CurrentCityReducer/reducer";
// import { reducer as AuthReducer } from "./AuthReducer/reducer";


const composeEnhancers =
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
 ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
   // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
 : compose;

const rootReducer = combineReducers({AppReducer});

 const store = legacy_createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

 export default store