// Get CSRF Token
const getCookie = function (name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function upVote(data) {
    $.ajax({
        method: "POST",
        url: '/up-vote/',
        headers: {
            "X-CSRFToken": getCookie('csrftoken'),
        },
        data: {'id': data.dataset.id},
        success: function (res) {
            data.nextElementSibling.innerText = res.up_vote;
        }

    })
}

function downVote(data) {
    $.ajax({
        method: "POST",
        url: '/down-vote/',
        headers: {
            "X-CSRFToken": getCookie('csrftoken'),
        },
        data: {'id': data.dataset.id},
        success: function (res) {
            data.nextElementSibling.innerText = res.down_vote;
        }

    })
}