const homepageController = (req, res) => {
    res.render('main', { title: '포트폴리오 제작' });
  };

  /* 밖에서 사용할 수 있게 해줌 */
  module.exports = {
      homepageController
  };