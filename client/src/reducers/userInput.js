//import moment from 'moment';

// to-do: limit stay to 30 days max
// to-do: can only start stay 1 month in advance. Ending past is ok

// Default input upon visiting app: one adult, staying one night based on current date in San Francisco, CA


export default function (state={
    itinerary: {
        numAdults: 3,
        enterDate: null,
        exitDate: null,
        numNights: null,
        furthestAllowedEnterDate: null,
        deepTest: '',
    },
    fetching: false,
    fetched: false,
    error: null,
    }, action) {

    switch (action.type) {
        case "FETCH_DATA": {
            //successfully accessed. updates fetching in props
            console.log('fetch data reached');
            return {...state, fetching: true}
        }

        case "FETCH_DATA_FULFILLED": {
            console.log('updating entry reached');
            return {
                ...state,
                itinerary: action.payload
            }
        }

        // more cases to come

        default: {
            //alert('default case reached');
            return state;
        }
    }

}

/*

export default function (state={
    itinerary: {
        numAdults: 1,
        enterDate: moment().utcOffset(-420).format("MM/DD/YYYY"),
        exitDate: moment().utcOffset(-420).add(1, 'days').format("MM/DD/YYYY"),
        numNights: (moment().utcOffset(-420).add(1, 'days')).diff(moment().utcOffset(-420), 'days'),
        furthestAllowedEnterDate: moment().utcOffset(-420).add(1, 'months').format("MM/DD/YYYY")
    },

 */