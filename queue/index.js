var queue = {
  initialize: function(initQueue){
    queue.content = initQueue;
  },
  enqueue: function(item){
	  var arrays =  queue.content;
	  var add = [item];
	  queue.content = add.concat(arrays);
  },
  dequeue: function(){
	  var front = queue.peek();
	  
	  if(front!=null){
		  queue.content = queue.content.splice(0,  queue.content.length-1);
	  }
	  return front;
  },
  peek: function(){
	  if(queue.content.length == 0) {
		  return null;
	  } else {
		  return queue[queue.content.length];
	  }
  },
  content: [],
  priority: []
}
