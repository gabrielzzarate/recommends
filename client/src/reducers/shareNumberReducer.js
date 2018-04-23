import { SHARE_SUCCESS, DISMISS_SHARE_DIALOG } from '../actions/types';

export default function(state = { number: null, showShare: false }, action) {
	switch (action.type) {
		case SHARE_SUCCESS:
			return { number: action.payload.shareNumber, showShare: true };
		case DISMISS_SHARE_DIALOG:
			return {
				...state,
				showShare: false
			};
		default:
			return state;
	}
}
