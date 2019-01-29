import userAction from '../actions/userActions'
import appAction from '../actions/appActions'

const initGiftsState = () => ({
	giftList: []
});

const ACTION_HANDLERS = {

}

const giftReducer = (state = initGiftsState(), action) => {
	const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}

export default giftReducer;
