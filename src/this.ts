function inner() {
  console.log(this);
}

const obj = {
  a: 'a',
  b: function() {
    console.log(this.a);
    inner()
  }
}

obj.b();