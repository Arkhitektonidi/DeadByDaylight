let comments = [];

document.getElementById('comment-add').onclick = function(){
    let commentName = document.getElementById('comment-name');
    let commentName = document.getElementById('comment-body');

    let comment = {
        name : commentName.value,
        body : commentBody.value,
        time : Math.floor(Date.now()/1000)
    }
    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComments();
}

function saveComments(){
    localStorage.setItem('comments', JSON.stringify(comments));
}
 function showComments(){
     let commentfiels = document.getElementById('comment-field');
     let out = '';
     comments.forEach(function(item){
         out += `<p class="text-right small">${timeConverter(item.time)}</p>`;
     });
     commentfiels.innerHTML = out;
 }

 function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    return time;
 }