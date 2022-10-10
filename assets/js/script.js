$("#currentDay").text(moment().format("dddd,MMMM Do, YYYY")); //Grabbing the id

$(".saveBtn").on("click",function(){
    // console.log("click");
    var txt=$(this).siblings(".description").val(); //The sibling of this button, we want the value of the description
    var id=$(this).parent().attr("id");
    console.log(txt,id)
    localStorage.setItem(id,txt);
});

$("#9 .description").val(localStorage.getItem("9")); //Have to do this for every hour. The only thing that will change will be the # and what's in the "" in the localStorage
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));