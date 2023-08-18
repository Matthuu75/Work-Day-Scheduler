//
$(document).ready(function () {
  console.log("ready!")
  var t9 = document.getElementById('textarea9')
  var t10 = document.getElementById('textarea10')
  var t11 = document.getElementById('textarea11')
  var t12 = document.getElementById('textarea12')
  var t1 = document.getElementById('textarea1')
  var t2 = document.getElementById('textarea2')
  var t3 = document.getElementById('textarea3')
  var t4 = document.getElementById('textarea4')
  var t5 = document.getElementById('textarea5')

  const timeBlock = $(".time-block");
  
  timeBlock.on('click', 'button', function () {
    let thisId = $(this).closest('.time-block').attr('id');
    let thisDescription = $(this).siblings('.description');
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
    let currentDayEl = $("#currentDay");
    currentDayEl.text(dayjs().format('ddd, MMMM DD, YYYY h:mma'));
  }

  var getStorage = localStorage.getItem("hour-9");
  t9.value = getStorage;
  var getStorage = localStorage.getItem("hour-10");
  t10.value = getStorage;
  var getStorage = localStorage.getItem("hour-11");
  t11.value = getStorage;
  var getStorage = localStorage.getItem("hour-12");
  t12.value = getStorage;
  var getStorage = localStorage.getItem("hour-13");
  t1.value = getStorage;
  var getStorage = localStorage.getItem("hour-14");
  t2.value = getStorage;
  var getStorage = localStorage.getItem("hour-15");
  t3.value = getStorage;
  var getStorage = localStorage.getItem("hour-16");
  t4.value = getStorage;
  var getStorage = localStorage.getItem("hour-17");
  t5.value = getStorage;

  console.log(localStorage)

  setInterval(displayDateTime, 1000);

});