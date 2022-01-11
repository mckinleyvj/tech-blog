const postTxt = document.querySelector('#createPost');
// const curr_usrid = document.querySelector('#user_id');


const postFormHandler = async (e) => {
    e.preventDefault();

    const usrPost = postTxt.value.trim();
    // const usrId = curr_usrid.value.trim();

    if (usrPost) {
        try {
            const response = await fetch('/api/posts/create', {
                method: 'POST',
                body: JSON.stringify({
                  usrPost,
                  // usrId
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