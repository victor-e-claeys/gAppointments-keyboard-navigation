jQuery(document).ready(function(n){function e(t){var e=n("#gappointments_calendar .day_available.selected");if(0!==e.size()){if(t&&"next"===t||"prev"===t){var a="next"===t?"first":"last";0<e[t](".day_available").length?e[t](".day_available").trigger("click"):0<e.parent()[t+"All"]("tr:not(#gappointments_calendar_slots)").length&&e.parent()[t+"All"]("tr:not(#gappointments_calendar_slots)")[a]().find(".day_available")[a]().trigger("click")}}else n("#gappointments_calendar .day_available").first().trigger("click")}function a(t){(t&&"next"===t||"prev"===t)&&n("#gappointments_calendar .ga_appointments_calendar_header h3")[t]().trigger("click")}n(document).on("click","#gappointments_calendar .day_available",function(){n("#gappointments_day_selector").focus()}),n(document).on("click","#gappointments_calendar #gappointments_calendar_slots  .time_slot",function(){n("#gappointments_time_selector").focus()}),n('<a id="gappointments_time_selector" href="#gappointments_calendar_slots">').on("keydown",function(t){if("ArrowDown"===t.key)n("#gappointments_calendar_slots .time_slot.focus").removeClass("focus").parent().next().find(".time_slot").addClass("focus");else if("ArrowUp"===t.key)n("#gappointments_calendar_slots .time_slot.focus").removeClass("focus").parent().prev().find(".time_slot").addClass("focus");else{if("Enter"!==t.key)return;n("#gappointments_calendar_slots .time_slot.focus").trigger("click")}t.preventDefault(),n(n(this).attr("href")).find(".calendar_time_slots").scrollTop(n(n(this).attr("href")).find(".calendar_time_slots").scrollTop()+n("#gappointments_calendar_slots .time_slot.focus").parent().position().top-n(n(this).attr("href")).find(".calendar_time_slots").outerHeight()/2),n(this).attr("aria-label",n("#gappointments_calendar_slots .time_slot.focus").text()).blur().focus()}).on("focus",function(t){t.preventDefault(),0===n("#gappointments_calendar_slots .time_slot.focus").length&&n("#gappointments_calendar_slots .time_slot").first().addClass("focus"),window.scrollTo(0,n(n(this).attr("href")).offset().top)}).attr("aria-label",gappkn.navTimeLabel).prependTo("#gappointments_calendar"),n('<a id="gappointments_day_selector" href="#service-working-days" aria-label="Use left/right keys to select day">').on("keydown",function(t){"ArrowRight"===t.key?e("next"):"ArrowLeft"===t.key&&e("prev"),n("#gappointments_day_selector:focus").attr("aria-label",n("#gappointments_calendar .day_available.selected").attr("date-go")).blur().focus()}).on("focus",function(t){t.preventDefault(),e(),window.scrollTo(0,n(n(this).attr("href")).offset().top)}).attr("aria-label",gappkn.navDayLabel).prependTo("#gappointments_calendar"),n('<a id="gappointments_month_selector" href="#gappointments_calendar">').on("keydown",function(t){"ArrowRight"===t.key?a("next"):"ArrowLeft"===t.key&&a("prev")}).on("focus",function(t){t.preventDefault(),window.scrollTo(0,n(n(this).attr("href")).offset().top)}).attr("aria-label",gappkn.navMonthLabel).prependTo("#gappointments_calendar"),n(document).ajaxComplete(function(t){console.log(t),n("#gappointments_month_selector:focus").attr("aria-label",n("#gappointments_calendar .ga_appointments_calendar_header h3").text()).blur().focus()})});