
var Post =  {


  

  create: function(message, successCB, errorCB = null){
  
    $.ajax({
      url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: successCB,
      error: errorCB || function(error){
        console.error('Bye', error)
      }
    })
  }
 


}

export default Post