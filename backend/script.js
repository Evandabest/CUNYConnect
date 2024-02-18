liked = () => {
    let x = 0
    let likes = 12;
    function increaseLikes() {
      likes++;
      document.getElementById("likes").innerHTML = (`<b>${likes}</b>`);
    }
    if (x < 1) {
      increaseLikes()
      x++;
    }
  }
  
  liked1 = () => {
    let x = 0
    let likes = 37;
    function increaseLikes() {
      likes++;
      document.getElementById("likes1").innerHTML = (`<b>${likes}</b>`);
    }
    if (x < 1) {
      increaseLikes()
      x++;
    }
  }
  
  liked2 = () => {
    let x = 0
    let likes = 20;
    function increaseLikes() {
      likes++;
      document.getElementById("likes2").innerHTML = (`<b>${likes}</b>`);
    }
    if (x < 1) {
      increaseLikes()
      x++;
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
      var comment = document.getElementById("comment-section");
      var display = 0;
  
      showcomments = () => {
          if (display == 1) {
              comment.style.display = "block";
              display = 0;
          } else {
              comment.style.display = "none";
              display = 1;
          }
      }
  
      document.getElementById("comments2").onclick = showcomments;
  });
  
  function showComments() {
    var commentSection = document.getElementById("comment-section");
    commentSection.style.display = "block";
  }
  
  function hideComments() {
    var commentSection = document.getElementById("comment-section");
    commentSection.style.display = "none";
  }
  
  function submitComment() {
    // Here you can handle submitting the comment, for example, sending it to a server or adding it to the page
    var commentInput = document.getElementById("comment-input");
    var comment = commentInput.value;
    // For demonstration purposes, let's just log the comment to the console
    console.log("Submitted comment:", comment);
    // After submitting, you might want to clear the input field and hide the comment section
    commentInput.value = "";
    hideComments();
  }
  
  // You can remove this line if you don't want to initially hide the comments
  // showcomments();
  
  
  
  document.addEventListener("DOMContentLoaded", function() {
      var comment = document.getElementById("comment-section");
      var display = 0;
  
      showcomments = () => {
          if (display == 1) {
              comment.style.display = "block";
              display = 0;
          } else {
              comment.style.display = "none";
              display = 1;
          }
      }
  
      document.getElementById("comments3").onclick = showcomments;
  });
  
  function showComments() {
    var commentSection = document.getElementById("comment-section");
    commentSection.style.display = "block";
  }
  
  function hideComments() {
    var commentSection = document.getElementById("comment-section");
    commentSection.style.display = "none";
  }
  
  function submitComment() {
    // Here you can handle submitting the comment, for example, sending it to a server or adding it to the page
    var commentInput = document.getElementById("comment-input");
    var comment = commentInput.value;
    // For demonstration purposes, let's just log the comment to the console
    console.log("Submitted comment:", comment);
    // After submitting, you might want to clear the input field and hide the comment section
    commentInput.value = "";
    hideComments();
  }
  
  // You can remove this line if you don't want to initially hide the comments
  // showcomments();