import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = {}
    
export const set_recommendations = createAction('SET_RECOMMENDATIONS')

export default createReducer(INITIAL_STATE, {
    [set_recommendations.type]: (state, action) => ({...state, recommendations: action.payload })
})