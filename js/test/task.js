describe('Task', function() {
  it('has a title', function () {
    expect(new Task().title).toEqual("Untitled Task");
  });

  it('it can be set a title', function () {
    expect(new Task( {title: "My first Test"} ).title).toEqual("My first Test");
  });
});