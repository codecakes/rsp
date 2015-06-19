/* LIFO stack */
function Stack() {
  this.topPtr={};
  this.count = 0;
  this.next = null;

  /*methods*/
  this.print = function () {
    return document.write(this.topPtr);
  };

  /* Push method */
  this.push = function(data) {
    if (this.topPtr == {}) {
      this.topPtr = {data:data, next: this.next};
    }
    else {
      this.next = this.topPtr;
      this.topPtr = {data:data, next: this.next};
    }
    this.count++;
  }

  /* Show Stack */
  this.show = function () {
    var arr = [];
    var node = this.topPtr;
    var i = 0
    for (i=0; i < this.count; i++) {
      arr.push(node.data);
      node = node.next;
    }
    return document.write(arr);
  }

  /* Pop method */
  this.pop = function() {
    if (this.topPtr == {}) {
      return null;
    }
    else {
      var top = this.topPtr;
      this.topPtr = this.next;
      this.next = this.topPtr.next;
      return document.write(top.data);
    }
    this.count--;
  };

  this.peek =  function() {
    if (this.topPtr == {}) {
      return null;
    }
    else {
      return document.write(this.topPtr.data);
    }
  }
}

var s = new Stack();


s.push(8);
s.push(10);
s.peek();

/*s.show();*/

s.pop();
s.show();
s.pop();
s.show();
