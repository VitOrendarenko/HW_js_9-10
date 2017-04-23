$(function() {
  $('.jcarousel').jcarousel({
            // Core configuration goes here
          })
  .jcarouselAutoscroll({
    interval: 4000,
    target: '+=1',
    autostart: true
  });
  $('.jcarousel-prev').jcarouselControl({ target: '-=1' });
  $('.jcarousel-next').jcarouselControl({ target: '+=1' });
  $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
    });

  var createCheckboxes = {
        titles: ['label 1','label 2', 'label 3'],
        create: function() {
            for ( var i = 0; i < this.titles.length; i++) {
              var chkName = 'chk' + (i+1);
                $('<input class="checkbox" type="checkbox" name="' + chkName + '" id="' + chkName + '">')
                    .appendTo('.checkbox__header-jquery')
                    .wrap('<div></div>')
                    .after('<label for="' + chkName + '" class="checkbox-label">' + this.titles[i] + '</label>')
                    .after('<label for="' + chkName + '" class="checkbox-style"</label>')
                    .on('click', function() {
                        $(this).siblings('.checkbox-style').toggleClass('checkbox-checked');
                });
            };

            $('<button class="submit" name="submit" type="submit" value="jquery">Submit</button>').appendTo('.header__jquery-checkboxes');      
        }
    }

    createCheckboxes.create();
  
  $('.dropdown').hover(function() {
    $(this).children('.topmenu__submenu').slideDown(300);
  },
  function() {
    $(this).children('.topmenu__submenu').slideUp(300);
  }
  );

    


    

});