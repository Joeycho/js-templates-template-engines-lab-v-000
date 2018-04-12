function createPost() {
  var title = document.getElementById("postTitle").value;
  var body = document.getElementById("postBody").value;
  var author =document.getElementById("postAuthor").value;

  var pageTemplate = document.getElementById("page-template").innerHTML;
//  var commentTemplate = document.getElementById("comment-template").innerHTML;
//  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(pageTemplate);

//  var start = document.getElementById("comments");

  var templateHTML = templateFn({ 'title': title, 'body': body,'author': author });
  debugger

  document.getElementById("start").innerHTML = templateHTML;

}
function postComment(){
  var commentsTemplate = document.getElementById("comments-template");
  var postTemplate = document.getElementById("post-template").innerHTML;

  var templateFn = _.template(postTemplate);

  var templateHTML = templateFn();

}
/*
function createPost(){
  var title = document.getElementById("title").value;
  var body = document.getElementById("body").value;
  var author = document.getElementById("author").value;

  var commentTemplate = document.getElementById("comment-template").innerHTML;


  var templateFn = _.template(commentTemplate);
  var templateHTML = templateFn({ 'title': title, 'body': body });

  var commentsDiv = document.getElementById("comments");
  commentsDiv.innerHTML += templateHTML;
}
*/
