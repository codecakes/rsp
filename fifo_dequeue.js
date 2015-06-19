/* FIFO stack
 * with Double side Pop
 Omni Directional Push */

function Queue() {
  this.lastPtr=null;
  this.topPtr = null;
  this.count = 0;
  //this.next = null;

  /*methods*/
  this.print = function () {
    return console.log(this.lastPtr);
  };

  /* Push method - push from front*/
  this.push = function(data) {
    this.count++;
    if (this.lastPtr === null) {
      this.lastPtr = {data:data, prev: this.topPtr};
    }
    else {
      if (this.topPtr == null) {
        this.topPtr = {data:data, prev:null};
        this.topPtr.next = this.lastPtr;
        this.lastPtr.prev = this.topPtr;
      }
      else {
        var prev = this.topPtr;
        //var next = prev;
        this.topPtr = {data:data, prev:null};
        this.topPtr.next = prev;
        prev.prev = this.topPtr;
      }
    }
  }

  /* Show Stack */
  this.show = function () {
    var arr = [];
    var node = this.lastPtr;
    var i = 0
    for (i=0; i < this.count; i++) {
      arr.push(node.data);
      node = node.prev;
    }
    return console.log(arr);
  }

  this.peekLast =  function() {
    if (this.lastPtr == {}) {
      return null;
    }
    else {
      return console.log(this.lastPtr.data);
    }
  }

  this.peekFirst =  function() {
    if (this.topPtr == {}) {
      return null;
    }
    else {
      return console.log(this.topPtr.data);
    }
  }

  /* Pop method */
  this.popLast = function() {
    if (this.lastPtr == null) {
      return null;
    }
    else {
      var last = this.lastPtr;
      this.lastPtr = this.lastPtr.prev;
      this.count--;
      return console.log(last.data);
    }
  };

  this.popFirst = function() {
    if (this.topPtr == null) {
      return null;
    }
    else {
      var top = this.topPtr;
      this.topPtr = this.topPtr.next;
      this.count--;
      return console.log(top.data);
    }
  };
}


var s = new Queue();

s.push(8);
s.peekLast();

s.push(10);
s.peekLast();

s.push(20);
s.peekLast();

//s.print();

s.show();

s.popLast();

s.show();

s.popFirst();
s.show();
/*s.pop();*/

s.push(100);
s.show();

s.push(200);
s.show();

s.popLast();

s.show();

s.popFirst();
s.show();
