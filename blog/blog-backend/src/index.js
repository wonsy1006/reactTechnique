// Koa 애플리케이션은 미들웨어의 배열로 구성
const Koa = require('koa');

const app = new Koa();

// Koa의 미들웨어 함수는 두 개의 파라미터를 받음
// param 1: ctx(context) -> 웹 요청과 응답에 관한 정보
// param 2: next -> 현재 처리중인 미들웨어의 다음 미들웨어를 호출
// 미들웨어 등록 후 next 함수를 호출하지 않으면 그 다음 미들웨어 처리 X

// 미들웨어는 app.use를 사용하여 등록되는 순서대로 처리
app.use((ctx, next) => {
  console.log(ctx.url);
  console.log(1);
  // next();
});

app.use((ctx, next) => {
  console.log(2);
  next();
});

// app.use -> 미들웨어 함수를 애플리케이션에 등록
app.use((ctx) => {
  ctx.body = 'hello world';
});

app.listen(4000, () => {
  console.log('Listening to port 4000');
});

// 결과: 크롬 브라우저는 사용자가 웹 페이지에 들어가면 해당 사이트의 아이콘 파일인 /favicon.ico 파일을 서버에 요청하기 때문에
// 결과에 /경로, /favicon.ico 경로 출력
// Listening to port 4000
// /
// 1
// 2
// /favicon.ico
// 1
// 2
// /
// 1
// 2
