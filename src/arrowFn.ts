export {}

const obj = {
  id: 'awesome',
  cool: () => {
    console.log(this.id);
  }
};

const id = 'not awesome';

obj.cool();
setTimeout(obj.cool, 100);

