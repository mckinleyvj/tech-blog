const postTitle = document.querySelector('#createPostTitle'); //added
const postText = document.querySelector('#createPostTxt'); //added

const postFormHandler = async (e) => {
    e.preventDefault();

    const usrPost = postTitle.value.trim();
    const usrPostTxt = postText.value.trim();

    if (usrPost && usrPostTxt) {
        try {
            const response = await fetch('/api/posts/create', {
                method: 'POST',
                body: JSON.stringify({
                  usrPost,
                  usrPostTxt,
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

              if (response.ok) {
                location.reload();
                window.location.replace("/dashboard");
              }
        } catch (err) {
            console.log(err);
        }
    }
}
  
const el = document.getElementById('postBtn');
if(el){
  el.addEventListener('click', postFormHandler);
}