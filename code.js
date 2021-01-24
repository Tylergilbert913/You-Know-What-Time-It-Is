
var currentDate = luxon.DateTime.local();
var topDate = $("#currentDay");
var printDate = currentDate.toLocaleString(luxon.DateTime.DATE_MED_WITH_WEEKDAY)
topDate.text(printDate);
console.log(printDate);

// function that saves information entered to local storage
function setSchedule() {

    $(".timeBlock").each(function () {
        var id = $(this).attr("id");
        var schedule = localStorage.getItem(id);

        if (schedule !== null) {
            $(this).children(".timing").val(schedule);
        }
    });
}

setSchedule();

var saveBtn = $(".saveBtn");

saveBtn.on("click", function () {
    var time = $(this).parent().attr("id");
    var schedule = $(this).siblings(".timing").val();

    localStorage.setItem(time, schedule);
});

