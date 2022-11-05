// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  // mapDispatchToProps에 해당하는 파라미터를 함수 형태가 아닌 액션 생성 함수로 이루어진 객체 형태로 넣어 주는 것
  {
    increase,
    decrease,
  },

  // bindActionCreators 유틸 함수 사용
  // (dispatch) =>
  //   bindActionCreators(
  //     {
  //       increase,
  //       decrease,
  //     },
  //     dispatch,
  //   ),

  // 각 액션 생성 함수 호출 후 dispatch로 감싸기
  // ({
  //   increase: () => dispatch(increase()),
  //   decrease: () => dispatch(decrease()),
  // }),
)(CounterContainer);

// // mapStateToProps : 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정
// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// // mapDispatchToProps : 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용
// const mapDispatchToProps = (dispatch) => ({
//   // 임시 함수
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// // mapStateToProps와 mapDispatchToProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달됨
// // mapStateToProps : state를 파라미터로 받아 오며, 이 값은 현재 스토어가 지니고 있는 상태
// // mapDispatchToProps : store의 내장 함수 dispatch를 파라미터로 받아 옴
// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
