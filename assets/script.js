$(document).ready(function() {
    var now = moment(); //get current moment (the current time/date)
    var currentHour = now.hour().toString(); //set the current moment to a string

    $('#current-day-time-id').text(now.format('LLLL')); //display date and time on the top of the page

    $('textarea').each(function() {
        var rowIndex = parseInt($(this).closest('.row').attr('data-index')); //get the data-index of the row associated with the textarea
        
        $(this).val(localStorage.getItem(rowIndex.toString())); //get the locally stored value if available and show it

        //change the background color of the textarea element based on it's relation to the current time
        if(currentHour > rowIndex) {
            $(this).addClass('bg-secondary');
        } else if (currentHour < rowIndex) {
            $(this).addClass('bg-info');
        };
    });
    
    $('button').on('click', function() {    //when a Save button is clicked
        var thisIndex = $(this).closest('.row').attr('data-index'); //get the data-index of it's containing row
        localStorage.setItem(thisIndex, $(this).closest('.row').find('textarea').val()); //and set the value of it into local storage
    });
});