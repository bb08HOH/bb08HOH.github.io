var posts=["2024/12/09/1-4章/","2024/12/03/hello-world/","2024/12/09/一些基础的代码题目以及题解分享/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };