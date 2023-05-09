var days_In_a_Week;
(function (days_In_a_Week) {
    days_In_a_Week[days_In_a_Week["sunday"] = 0] = "sunday";
    days_In_a_Week[days_In_a_Week["monday"] = 1] = "monday";
    days_In_a_Week[days_In_a_Week["tuesday"] = 2] = "tuesday";
    days_In_a_Week[days_In_a_Week["wednesday"] = 3] = "wednesday";
    days_In_a_Week[days_In_a_Week["thursday"] = 4] = "thursday";
    days_In_a_Week[days_In_a_Week["friday"] = 5] = "friday";
    days_In_a_Week[days_In_a_Week["saturday"] = 6] = "saturday";
})(days_In_a_Week || (days_In_a_Week = {}));
;
var present_day = daysInaWeek.tuesday;
console.log(days_In_a_Week);
console.log(present_day);
console.log(days_In_a_Week[5]);
