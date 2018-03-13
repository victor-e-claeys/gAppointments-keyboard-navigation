jQuery(document).ready(function($){

    // This function allows to change the selected day
    function gAppointmentsSelectDay(day){
        var currentDate = $("#gappointments_calendar .day_available.selected"); // Get the currently selected day
        if(currentDate.size() === 0){ // If no day is selected...
            $("#gappointments_calendar .day_available").first().trigger('click'); // Select the first day in the calendar month
            return;
        }
        if(day && day === 'next' || day === 'prev'){ // If we've received an argument and that argument is the next or prev day
            var first = day === 'next' ? 'first' : 'last'; // Used later to select either the first day of the next week or last day of the previous week
            if(currentDate[day]('.day_available').length > 0){ // If there is a next/prev day
                currentDate[day]('.day_available').trigger('click'); // Select that day
            }else if(currentDate.parent()[day+'All']('tr:not(#gappointments_calendar_slots)').length > 0){ // If there is another week on the calendar
                currentDate.parent()[day+'All']('tr:not(#gappointments_calendar_slots)')[first]().find('.day_available')[first]().trigger('click'); // Select the first day of the next week (or the last day of the previous week)
            }
        }
    }

    // This function allows to change the selected month
    function gAppointmentsSelectMonth(month){
        if(month && month === 'next' || month === 'prev')
            $("#gappointments_calendar .ga_appointments_calendar_header h3")[month]().trigger('click');
    }

    // Focus on our anchor tag to catch keyboard navigation on day selection
    $(document).on('click', "#gappointments_calendar .day_available", function(){
        $("#gappointments_day_selector").focus();
    });
    
    // Time selector
    $('<a id="gappointments_time_selector" href="#gappointments_calendar_slots">').on('keydown', function(e){ // Attach keydown handler to new anchor tag for time selection
        
        
        if (e.key === "ArrowDown") { // When we press the down arrow remove the focus class from the currently focused time slot and add it to the next
            $("#gappointments_calendar_slots .time_slot.focus").removeClass('focus').parent().next().find('.time_slot').addClass('focus');
        } else if (e.key === "ArrowUp") { // When we press the up arrow remove the focus class from the currently focused time slot and add it to the previous
            $("#gappointments_calendar_slots .time_slot.focus").removeClass('focus').parent().prev().find('.time_slot').addClass('focus');
        } else if (e.key === "Enter"){ // When we press the return key trigger the click event on the currently focused time slot, adding the booking
            $("#gappointments_calendar_slots .time_slot.focus").trigger('click');
        } else { // When we press any other key, do nothing
            return;
        }
        if (e.key === "ArrowDown" || e.key === "ArrowUp"){ // Scroll to the focused time slot when we press the up and down keys
            $($(this).attr('href')).find('.calendar_time_slots').scrollTop( $($(this).attr('href')).find('.calendar_time_slots').scrollTop() + $("#gappointments_calendar_slots .time_slot.focus").parent().position().top - $($(this).attr('href')).find('.calendar_time_slots').outerHeight() / 2 );
            e.preventDefault(); // ... and prevent the default browser behaviour (scrolling the page)
        }
    }).on('focus', function(e){ // Attach focus handler to new anchor tag for time selection
        e.preventDefault();
        $("#gappointments_calendar_slots .time_slot.focus").removeClass('focus'); // On focus clear currently focused time slot
        $("#gappointments_calendar_slots .time_slot").first().addClass('focus'); // On focus add focus to first time slot
        window.scrollTo( 0, $($(this).attr('href')).offset().top ); // Scroll the browser to the time slot selector
    }).prependTo("#gappointments_calendar"); //Prepend this element to the gappointments calendar
    
    // Day selector
    $('<a id="gappointments_day_selector" href="#service-working-days">').on('keydown', function(e){
        if (e.key === "ArrowRight") {
            gAppointmentsSelectDay('next');
        } else if (e.key === "ArrowLeft") {
            gAppointmentsSelectDay('prev');
        }
    }).on('focus', function(e){
        e.preventDefault();
        gAppointmentsSelectDay(); // Select the first available day
        window.scrollTo( 0, $($(this).attr('href')).offset().top ); // Scroll to the day selection in calendar
    }).prependTo("#gappointments_calendar");

    // Month selector
    $('<a id="gappointments_month_selector" href="#gappointments_calendar">').on('keydown', function (e) {
        if (e.key === "ArrowRight") {
            gAppointmentsSelectMonth('next');
        } else if (e.key === "ArrowLeft") {
            gAppointmentsSelectMonth('prev');
        }
    }).on('focus', function(e){
        e.preventDefault();
        window.scrollTo( 0, $($(this).attr('href')).offset().top ); // Scroll to the month selection in calendar
    }).prependTo("#gappointments_calendar");
});