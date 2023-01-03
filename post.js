 // function for getting user data and post and comments on post 
async function getAllPosts() {
  try {
    const posts = document.getElementById("posts");

    // get user 
    let users = [];
    const res = await fetch("https://dummyjson.com/users?limit=200");
    const userData = await res.json();
    users = userData.users;

    
    let postsArray = [];

    // get post 
    const Apires = await fetch("https://dummyjson.com/posts/search?q=love");
    const postdata = await Apires.json();
    postsArray = postdata.posts;

    // loop for for displaying all post
    for (let i = 0; i < postsArray.length; i++) {
      // loop to display user with all post 
      let user;
      for (let u = 0; u < users.length; u++) {
        if (postsArray[i].userId == users[u].id) {
          user = users[u];
        }
      }

      // get comment on each post 
      let comments = [];
      let res = await fetch(
        `https://dummyjson.com/posts/${users[i].id}/comments`
      );
      let data = await res.json();
      comments = data.comments;

      // html for user , posts and comments
      const post = `
  <div class="feed">
  <div class="head">
    <div class="user">
        <div class="profile-picture">
            <img src="${user.image}" alt="${user.id}">
        </div>

        <div class="ingo">
            <h3>${user.username}</h3>
            <small>${user.firstName}</small>
        </div>
    </div>
    <span class="edit">
     <i class="uil uil-ellipsis-h"></i>
  </span>
    </div>
        
     
        <div class="photo">
            <h2>${postsArray[i].title}</h2>
            <p style="font-size: 0.9rem;">${postsArray[i].body}</p>
        </div>

        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>

                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>

                        <div class="liked-by">
                            <span><img src="./images/profile-8.jpg" alt=""></span>
                            <span><img src="./images/profile-15.jpg" alt=""></span>
                            <span><img src="./images/profile-10.jpg" alt=""></span>
                            <p>Liked by <b>${+postsArray[i].reactions}</b></p>
          
                          </div>

                      
                          
        <div class="create-post" id="comments-write">
            <div class="profile-picture">
                <img src="images/profile-9.jpg" alt="">
            </div>
            <input type="text" id="enter-comment" placeholder="Write Comments here" id="create-post">
            <button value="Post" class="btn btn-primary"> Post</button>
        </div>

        <h2 id="comm">Comments</h2>
        <div class="comment-section" id="comment-section" >
        ${comments.map((com) => {
          // displaying comments

          // getting images of comments
          let images = "";
          for (let c = 0; c < users.length; c++) {
            if (com.user.id == users[c].id) {
              images = users[c].image;
            }
          }
          return `
    
    <div class="all-comments"  >
     <div class="user" id="users-comments">
        <div class="head">
            <div class="user">
            
               <div class="profile-picture">
                  <img src="${images}" alt="">
               </div>

               <div class="ingo">
               <h3>${com.user.username}</h3>
               <small>${com.body}</small>
               </div>
            </div>
            <span class="edit" id="edit"><i class="uil uil-ellipsis-h"></i></span>
       </div>
       
              
              
            </div>
          </div>`;
        })}
        
        </div>
  </div>`;

      posts.innerHTML += post;
    } //loop end
  } catch (e) {
    // post function end

    console.log(e.message);
  }
}