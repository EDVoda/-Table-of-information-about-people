import * as actionName from '../actions/actionName'

const initialState = {
    info: [],
    state_table: [],
    errors: false
}
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case actionName.STATE_CHANGE_START:
            return {
                ...state,
                loading: true
            }
        case actionName.STATE_CHANGE_SUCCES:
            return {
                ...state,
                errors: false,
                state_table: payload

            }
        case actionName.STATE_CHANGE_SUCCES:
            return {
                ...state,
                errors: { message: payload },

            }


        case actionName.INFO_POST_START:
        {
            return {
                ...state,
                currentProduct: null,
                loading: true,
                errors: false
            }
        }
        case actionName.INFO_POST_SUCCES:
        {
            return {
                ...state,
                loading: false,
                info: payload
            }
        }
        case actionName.INFO_POST_FAILURE:
            return {
                ...state,
                errors: { message: payload },
            }
        default:
            return state
    }
}
