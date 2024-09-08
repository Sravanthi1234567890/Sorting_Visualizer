var arr = [];
var bar = document.querySelector("#bar");
var new_btn = document.querySelector("#new");
var bubble = document.querySelector(".bubble");
var selection = document.querySelector(".selection");
var insertion = document.querySelector(".insertion");
var quick = document.querySelector(".quick");
var merge = document.querySelector(".merge");
var check = document.querySelector(".check");
var arr_size = document.querySelector("#arr_sz");
var button = document.querySelector("button");
var range = document.querySelector("range");
var speed = document.querySelector("#speed");
var count = 0;


//bars
function create_bars(){
    arr = [];
    bar.innerHTML="";
    var no_of_bars = arr_size.value;
    var arr_width_size = (500/no_of_bars);
    for(var i = 0 ; i < no_of_bars ; i++){
        arr.push(Math.floor(Math.random()*100));
    }
    for(var i = 0 ; i < no_of_bars ; i++){
        var div = document.createElement("DIV");
        var margin_size=0.1;
        div.classList.add("special");
        div.style="margin:0%" + margin_size + "%;width:" + (100/no_of_bars-(2*margin_size))+"%;";
        var height = (arr[i]*5+10).toString();
        height = height+'px';
        div.style.height=height;
        bar.appendChild(div);
    }
}

//creating bars at first
create_bars();

//new bars
new_btn.addEventListener("click",function(){
    create_bars();
});

//range
arr_size.addEventListener("input",create_bars);

//bubble sort function
bubble.addEventListener("click",async function () {
    this.classList.add("selected");
    for(var i=0 ; i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    this.classList.remove("unselected");
    arr_size.disabled=true;
    speed.disabled=true;
    await bubble_sort();
    for(var i=0 ; i<button.length;i++)
        button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
        arr_size.disabled=false;
        speed.disabled=false;
        this.classList.remove("unselected");
});

//selection sort function
selection.addEventListener("click",async function () {
    this.classList.add("selected");
    for(var i=0 ; i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    arr_size.disabled=true;
    speed.disabled=true;
    this.classList.remove("unselected");
    await selection_sort();
    for(var i=0 ; i<button.length;i++)
        button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
        arr_size.disabled=false;
        speed.disabled=false;
        this.classList.remove("unselected");
});

//insertion sort function
insertion.addEventListener("click",async function () {
    this.classList.add("selected");
    for(var i=0 ; i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    arr_size.disabled=true;
    speed.disabled=true;
    this.classList.remove("unselected");
    await insertion_sort();
    for(var i=0 ; i<button.length;i++)
        button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
        arr_size.disabled=false;
        speed.disabled=false;
        this.classList.remove("unselected");
});

//merge sort function
merge.addEventListener("click",async function(){
    this.classList.add("selected");
    var no_of_bar=arr_size.value;
    for(var i=0;i<button.length;i++)
    button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    this.classList.remove("unselected");
    arr_size.disabled=true; 
    speed.disabled=true;
    await merge_sort(0,no_of_bar-1);
     for(var i=0;i<button.length;i++)
    button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
    arr_size.disabled=false;
    speed.disabled=false;
    this.classList.remove("selected");
  });

//quick sort function
quick.addEventListener("click",async function () {
    this.classList.add("selected");
    for(var i=0 ; i<button.length;i++)
        button[i].disabled=true,button[i].style.pointerEvents = "none",button[i].classList.add("unselected");
    arr_size.disabled=true;
    speed.disabled=true;
    this.classList.remove("unselected");
    await quick_sort();
    for(var i=0 ; i<button.length;i++)
        button[i].disabled=false,button[i].style.pointerEvents = "auto",button[i].classList.remove("unselected");
        arr_size.disabled=false;
        speed.disabled=false;
        this.classList.remove("unselected");
});