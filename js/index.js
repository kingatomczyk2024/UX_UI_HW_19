$('#download').on('click', function () {
  console.log('you clicked on #download')
  window.location.href = 'resume.pdf'
})

$('#contact').on('click', function () {
  console.log('you clicked on #contact')
  $('html, body').animate(
    {
      scrollTop: $(document).height() - $(window).height(),
    },
    700,
  )
})

$('.top').on('click', function (e) {
  console.log('you clicked on .top')
  $('html, body').animate({ scrollTop: 0 }, 500)
})

$('.project').hover(
  function () {
    $(this).addClass('hover')
  },
  function () {
    $(this).removeClass('hover')
  },
)
