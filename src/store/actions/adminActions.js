
import actionTypes from './actionTypes';
import { getAllCategory , getAllProduct} from '../../services/UserSevices';

export const fetAllCategory = () => {
    return async ( dispatch, getSate ) => {
        try {
            let res = await getAllCategory();
            console.log( 'check data', res )
            if ( res) {


                dispatch( fetchALLCategorySuccess( res ) );
            }
            else {
                dispatch( fetchALLFails() );

            }



        } catch ( e ) {
            dispatch( fetchALLFails() );

            console.log( ' fetchALLFails', e )

        }

    }

};

export const fetchALLCategorySuccess = ( data ) => ( {



    type: actionTypes.FETCH_ALL_CATEGORIES_SUCCESS,
    data: data

} )
export const fetchALLFails = () => ( {
    type: actionTypes.FETCH_ALL_CATEGORIES_FAILS
} )
//FETCH ALL PRODUCT 
export const fetAllProduct = () => {
    return async ( dispatch, getSate ) => {
        try {
            let res = await getAllProduct();
            console.log( 'check data product', res )
            if ( res ) {


                dispatch( fetchALLProductSuccess( res ) );
            }
            else {
                dispatch( fetchALLFails() );

            }



        } catch ( e ) {
            dispatch( fetchALLProductFails() );

            console.log( ' fetchALLProductFails', e )

        }

    }

};

export const fetchALLProductSuccess = ( data ) => ( {



    type: actionTypes.FETCH_ALL_PRODUCT_SUCCESS,
    data: data

} )
export const fetchALLProductFails = () => ( {
    type: actionTypes.FETCH_ALL_PRODUCT_FAILS
} )
