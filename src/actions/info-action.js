import * as actionName from './actionName';

import React from "react";



export function getInfo(e) {
    return dispatch => {
        dispatch({type: actionName.INFO_POST_START});
        if(e !== null)
            dispatch({type: actionName.INFO_POST_SUCCES, payload: e})
        else {
            {dispatch({type: actionName.INFO_POST_FAILURE, payload: "Error"})}
        }
    }
}

export function getState(e) {
    return dispatch => {
        dispatch({type: actionName.STATE_CHANGE_START});
        if(e !== null)
        {dispatch({type: actionName.STATE_CHANGE_SUCCES, payload: e})}
        else {
            {dispatch({type: actionName.STATE_CHANGE_FAILURE, payload: "State empty"})}
        }

    }
}

