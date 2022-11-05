import './TodoTemplate.scss';

// children으로 내부 JSX를 props로 받아 와서 렌더링
const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
