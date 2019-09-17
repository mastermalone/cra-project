const $ = window.jQuery;

const carouselService = (id, images, wrap) => {
  $(document).ready(() => {
    $(`#${id}`).carousel({
      interval: 2000,
      wrap,
    });
    $('.carousel-control-prev').hide();
    $(`#${id}`).on('slid.bs.carousel', function carouselSlideLimit(e) {
      const carouselInfo = $(this).data('bs.carousel');
      const curentIndex = $('.active', e.target).index();
      const { _items } = carouselInfo;
      const lastElement = _items.length-1;

      $('.carousel-control-prev').hide();
      $('.carousel-control-next').show();

      if (curentIndex >= 1 ) {
        $('.carousel-control-prev').show();
      }

      if (curentIndex === lastElement) {
        $('.carousel-control-next').hide();
      } 
    });

    images.forEach((img, idx) => {
      $(`.item${idx}`).click(() =>{
        $(`#${id}`).carousel(idx);
      })
    })
  });
};

export default carouselService;