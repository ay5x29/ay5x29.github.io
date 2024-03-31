function fh(){
    window.open("ts-puzzle.html");
    alert(window.location);
  }

  function tj() {  
    var cores = 0;  
    var questions = document.getElementsByClassName("question");  
    var answers;  
    var correctAnswer;  
    var selectedAnswer;  
  
    for (var i = 0; i < questions.length; i++) {  
        answers = questions[i].getElementsByTagName("input");  
        // 假设第一个问题的正确答案是 "周三或周日"，第二个问题的正确答案是 "砍第三个"  
        // 根据实际情况，您可能需要从其他地方获取正确答案，比如一个数组或者通过 AJAX 请求  
        correctAnswer = (i === 0) ? "周三或周日" : "砍第三个";  
  
        for (var j = 0; j < answers.length; j++) {  
            if (answers[j].checked) {  
                selectedAnswer = answers[j].nextElementSibling.textContent.trim(); // 获取相邻的 <li> 标签的文本内容  
                if (selectedAnswer === correctAnswer) {  
                    cores++; // 如果答案正确，增加分数  
                    break; // 不需要继续检查其他选项，因为只有一个会被选中  
                }  
            }  
        }  
    }  
  
    alert("你的分数是 " + cores + " 分");  
}
