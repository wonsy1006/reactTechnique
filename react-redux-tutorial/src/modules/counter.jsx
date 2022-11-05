import { createAction, handleActions } from 'redux-actions';

// 액션 타입 정의하기
// 액션 타입은 대문자, 문자열 내용은 '모듈 이름/액션 이름'
// 문자열 안에 모듈 이름을 넣어 액션 이름이 충돌되지 않도록 해줌
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
// export -> 다른 파일에서 불러 와 사용 가능
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 및 리듀서 함수 만들기
const initialState = {
  number: 0,
};

// handleActions 함수의 파라미터
// 1. 각 액션에 대한 업데이트 함수
// 2. 초기 상태
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// };

export default counter;
