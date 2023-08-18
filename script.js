//
$(document).ready(function () {
  console.log("ready!")

  const timeBlock = $(".time-block");
  
  timeBlock.on('click', 'button', function () {
    const thisId = $(this).closest('.time-block').attr('id');
    const thisDescription = $(this).siblings('.description');
    localStorage.setItem(thisId, thisDescription.val());
  })

  timeBlock.each(function () {

    hourTime = $(this).attr('id').split('-')[1];
    console.log(hourTime)

    currentHour = dayjs().hour();
    console.log(currentHour)

    if (hourTime < currentHour) {
      $(this).addClass('past');
      $(this).removeClass('present, future');
    } 
    
    else if (hourTime > currentHour) {
      $(this).addClass('future');
      $(this).removeClass('present, past');
    } 
    
    else {
      $(this).addClass('present');
      $(this).removeClass('past, future');
    }

    savedDescription = localStorage.getItem(hourTime);
    $(this).find('.description').val(savedDescription);
  });

  function displayDateTime() {
    const currentDayEl = $("#currentDay");
    currentDayEl.text(dayjs().format('ddd, MMMM DD, YYYY h:mma'));
  };

  console.log(localStorage);

  setInterval(displayDateTime, 1000);

});add