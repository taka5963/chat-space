$(function(){
  function buildHTML(message){
    if ( message.image ) {
      var html =
       `<div class="chat-main__message-main__message-box">
          <div class="chat-main__message-main__message-box__message-info">
            <div class="chat-main__message-main__message-box__message-info__message-name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-main__message-box__message-info__message-date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-main__message-box__message-detail">
            <p class="chat-main__message-main__message-box__message-detail__content">
              ${message.content}
            </p>
          </div>
          <img src=${message.image} >
        </div>`
      return html;
    } else {
      var html =
       `<div class="chat-main__message-main__message-box">
          <div class="chat-main__message-main__message-box__message-info">
            <div class="chat-main__message-main__message-box__message-info__message-name">
              ${message.user_name}
            </div>
            <div class="chat-main__message-main__message-box__message-info__message-date">
              ${message.created_at}
            </div>
          </div>
          <div class="chat-main__message-main__message-box__message-detail">
            <p class="chat-main__message-main__message-box__message-detail__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',  
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chat-main__message-main').append(html);
      $('.chat-main__message-main').animate({ scrollTop: $('.chat-main__message-main')[0].scrollHeight});
      $('form')[0].reset();
      $('.new_message__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  })
})