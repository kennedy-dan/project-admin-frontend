import axios from '../helpers/axios'
import {categoryConstants} from './constants'


export const getCrimeCategories = () => {
    // console.log(category)
    return async dispatch =>{
        dispatch({type: categoryConstants.GET_CATEGORY_REQUEST})
        const res = await axios.get('/getcrimecategory')
        console.log(res)
        if(res.status === 200){
            const {crimes} = res.data
            dispatch({
                type: categoryConstants.GET_CATEGORY_SUCCESS,
                payload: { categories: crimes}
            })
        }else{
            dispatch({
                type: categoryConstants.GET_CATEGORY_FAILURE,
                payload: {error: res.data.error}
            })
        }
    }
}