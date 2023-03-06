import { createAction } from '../utils/createAction';
import { MockPosts } from '../__mock__/mockPosts';

const initialState = MockPosts(10);

export const add_post = createAction('ADD_POST');
export const add_comm = createAction('ADD_COMM');

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [{
        id: '',
        title: action.payload.title,
        content: action.payload.content,
        User: {
          id: '',
          nickName: '',
          profileImg: '',
        },
        Post_img: [],
        Comments: [
          {
            id: '',
            content: '',
            User: {
              id: '',
              nickName: '',
              profileImg: '',
            },
            myComment: false,
            createAt: '',
          }
        ],
        createAt: '',
        myPost: false,
      }, ...state];
    case 'ADD_COMM':
      const userComm = [
        {
          id: '',
          content: action.payload.content,
          User: {
            id: '',
            nickName: action.payload.nickName,
            profileImg: '',
          },
          myComment: false,
          createAt: '',
        }, ...state.Comments];
      return userComm;
    default:
      return state;
  }
}
export default reducer;