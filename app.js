function removesingle(){
    var input = document.getElementById("number");
    input.value = input.value.slice(0,-1);
}

function removeall(){
    var input = document.getElementById("number");
    input.value = " ";
}

function result(){
    var input = document.getElementById("number");
     var ans = eval(input.value);
     input.value = ans;
}

function inputValue(value) {
    var input = document.getElementById("number");
    input.value += value;
  }
  