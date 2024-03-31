function fh(){
    window.open("ts-puzzle.html");
    alert(window.location);
  }

  function tj() {  
    var cores = 0;  
    var questions = document.getElementsByClassName("question");  
      
    for (var i = 0; i < questions.length; i++) {  
      var inputs = questions[i].getElementsByTagName("input");  
      var correctAnswer;  
        
      // 根据问题的索引获取正确答案  
      correctAnswer = (i === 0) ? "周三或周日" : "砍第三个"; // 这里应该是实际答案  
        
      for (var j = 0; j < inputs.length; j++) {  
        if (inputs[j].type === 'radio' && inputs[j].checked) {  
          var selectedAnswer = inputs[j].value; // 直接使用单选按钮的value属性  
            
          if (selectedAnswer === correctAnswer) {  
            cores++;  
            break; // 找到正确答案后退出循环  
          }  
        }  
      }  
    }  
      
    alert("你的分数是 " + cores + " 分");  
  }
