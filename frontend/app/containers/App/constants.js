/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const FETCH_POSTS = 'app/App/FETCH_POSTS';
export const POSTS_RECEIVED = 'app/App/POSTS_RECEIVED';
export const FETCH_POSTS_FAILED = 'app/App/FETCH_POSTS_FAILED';
export const CREATE_POST = 'app/App/CREATE_POST';
export const POST_CREATED = 'app/App/POST_CREATED';
export const CREATE_POST_FAILED = 'app/App/CREATE_POST_FAILED';
