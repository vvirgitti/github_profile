describe('homepage', function(){
  before(function(){
    casper.start('http://localhost:3000/');
  });

  it('has a welcome message', function(){
    casper.then(function(){
      expect(".page-header").to.contain.text("Welcome to GitHub profile search!");
    });
  });
});
