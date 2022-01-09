const commentTxt = document.querySelector('#commentTxt');
const post_Id = document.querySelector('#post_id');

const commentFormHandler = async (e) => {
    e.preventDefault();

    const usrComment = commentTxt.value.trim();
    const post_id = post_Id.value.trim();
  
    if (usrComment) {
        try {
            const response = await fetch('/api/comments/create', {
                method: 'POST',
                body: JSON.stringify({
                  post_id,
                  usrComment
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });

              if (response.ok) {
                document.location.reload();
              }
        } catch (err) {
            console.log(err);
        }
    }
}
  
const el = document.getElementById('commentBtn');
if(el){
  el.addEventListener('click', commentFormHandler);
}