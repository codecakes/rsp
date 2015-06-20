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
    if (this.lastPtr !== null) {
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
    else {
      this.lastPtr = {data:data, prev: this.topPtr};
    }
    this.count++;
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
    if (this.lastPtr !== null) {
      return console.log(this.lastPtr.data);
    }
    else {
      return null;
    }
  }

  this.peekFirst =  function() {
    if (this.topPtr !== null) {
      return console.log(this.topPtr.data);
    }
    else {
      return null;
    }
  }

  /* Pop method */
  this.popLast = function() {
    if (this.lastPtr !== null) {
      var last = this.lastPtr;
      this.lastPtr = this.lastPtr.prev;
      this.count--;
      return console.log(last.data);
    }
    else {
      return null;
    }
  };

  this.popFirst = function() {
    if (this.topPtr !== null) {
      var top = this.topPtr;
      this.topPtr = this.topPtr.next;
      this.count--;
      return console.log(top.data);
    }
    else {
      return null;
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
