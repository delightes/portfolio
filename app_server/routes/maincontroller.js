/* root 페이지 > 홈페이지 컨트롤러
: main.pug와 title 자바 객체 합쳐서 렌더링 해줌! */
const homepageController = (req, res) => {
    res.render('main', { title: '포트폴리오 제작' });
  };

  /* 밖에서 사용할 수 있게 해줌 */
  module.exports = {
      homepageController
  };