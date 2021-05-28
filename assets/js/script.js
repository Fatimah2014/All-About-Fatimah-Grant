var redirectUrl = './begin.html'



$('#start').on('click', function () {
  document.location.assign(redirectUrl)
})

$('body').css('cursor', 'pointer');