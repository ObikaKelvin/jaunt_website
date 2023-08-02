$(document).ready(function() {
    $(".circle-default").click(function(event) {
      event.stopPropagation(); // Prevents the click event from propagating to the document
  
      const clickedCard = $(this);
      const target = clickedCard.children(".member-details");
      
      if (target.hasClass("member-active")) {
        target.removeClass("member-active");
      } else {
        $(".circle-default .member-details").removeClass("member-active");
  
        target.addClass("member-active");
      }
    });
  
    // Add event listener to the document to handle clicks outside the container
    $(document).click(function(event) {
      const container = $(".circle-default");
      const target = $(event.target);
  
      if (!target.closest(container).length) {
        container.children(".member-details").removeClass("member-active");
      }
    });
  });
  
  
  
  
  
  