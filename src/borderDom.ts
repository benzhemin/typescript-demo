// 请实现，鼠标移到页面中的任意标签，显示出这个标签的基本矩形轮廓。

export {};

function borderDom(d: HTMLElement) {
  d.onmouseover = function(e) {
    this.style.border = '1px solid red';
  };
  d.onmouseout = function(e) {
    this.style.border = '';
  }
}

function borderDomTree(dom: HTMLElement) {
  borderDom(dom);

  Array.from(dom.childNodes).forEach(d => {
    if (d.nodeType === 1) {
      borderDomTree(d as HTMLElement);
    }
  });
}