var post = () => {
  $.ajax({
    url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf111/greeting',
    dataType: 'json',
    type: 'POST',
    contentType: 'application/json',
    // data: JSON.stringify({ "first-name": $('#first-name').val(), "last-name": $('#last-name').val() }),
    // success: function (data, textStatus, jQxhr) {
    //   $('#response pre').html(JSON.stringify(data));
    // },
    // error: function (jqXhr, textStatus, errorThrown) {
    //   console.log(errorThrown);
    // }
  });

}

