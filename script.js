// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Transmit",
      "url": "backend.php",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "messageHandlers": {},
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cheader class=\"header_logo\"\u003E\n  \u003Cdiv\u003E\n    \u003Cimg src=\"https:\u002F\u002Fkevintiede.com\u002Fmouselab\u002Fstatic\u002Flogo_osu.jpg\" alt=\"Logo Ohio State University\" class=\"logo_osu\"\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cdiv class=\"div_intro\"\u003E\n\n    \u003Ch2\u003EWelcome!\u003C\u002Fh2\u003E\n\n    \u003Cp class=\"intro\"\u003E Welcome to this study on decision making! \u003C\u002Fp\u003E\n    \u003Cp class=\"intro\"\u003E Thank you so much for agreeing to participate in our study today.\u003C\u002Fp\u003E\n\n    \n\u003Cp class=\"intro\"\u003E\u003Cbr\u003EPlease enter your worker ID:\u003Cbr\u003E\n  \u003Cinput style=\"width:400px\" name=\"workerID\" class=\"intro\" required\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp class=\"intro\"\u003EPlease press \"Start &rarr;\" to continue on to today's task.\u003C\u002Fp\u003E\n\n      \n\n\n\u003C\u002Fdiv\u003E\n  \u003C\u002Fmain\u003E\n  \u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003EStart &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {
const ds = this.options.datastore

// set conditions
condition_array = [1,2,3,4]
condition= _.sample(condition_array)

/*
1 & 2 = numbers-only
3 = numbers+labels, numbers left
4 = numbers+labels, numbers right
*/



// Saving worker ID, assignment ID and HIT ID 
// (works for MTurk)

// Function to extract part of URL, e.g.
// [...]/webexperiment/index.html?parameter=value
// taken from https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


var pcnr = getParameterByName('pcnr') // for lab collection
var workerid = getParameterByName('workerId') // for online collection

var a = getParameterByName('a') // further attributes in URL
var b = getParameterByName('b')
var c = getParameterByName('c')
var tp_a = getParameterByName('tp_a')
var tp_b = getParameterByName('tp_b')
var tp_c = getParameterByName('tp_c')

// save variables

ds.set('condition', condition)
ds.set('workerid', workerid)
ds.set('a', a)
ds.set('b', b)
ds.set('c', c)
ds.set('tp_a', tp_a)
ds.set('tp_b', tp_b)
ds.set('tp_c', tp_c)


}
      },
      "title": "First_page"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button.continue": "click"
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {
// Condition logic
const ds = this.options.datastore
condition = ds.get('condition') //retrieve conditon
this.options.skip = (condition != 1 & condition != 2) //skip this page if numbers+labels condition


}
      },
      "title": "Intro1_numbers-only",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"div_intro\"\u003E\r\n\r\n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\r\n    \u003Cp class=\"intro\"\u003E This study consists of two parts. In the first part of this study, you are asked to choose repeatedly between two products. \u003C\u002Fp\u003E\r\n    \u003Cp class=\"intro\"\u003E Each product was rated by three independent and equally reliable reviewers. All ratings range from 0 to 100 points, with 100 points being the best rating. You will be provided with all three ratings for both products.\u003C\u002Fp\u003E\r\n    \u003C!-- only for numbers+labels condition:\r\n    \u003Cp class=\"intro\"\u003E In addition to the ratings, we will show you a verbal rating which classifies the point rating into one of five categories: poor, bad, fair, good and excellent. You will find the verbal rating next to the point rating.\u003C\u002Fp\u003E--\u003E\r\n    \u003Cp class=\"intro\"\u003E Your task is to choose the product you would prefer.\u003C\u002Fp\u003E\r\n  \r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Ffooter\u003E\r\n",
      "tardy": true
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button.continue": "click"
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {

const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 3 & condition != 4)


}
      },
      "title": "Intro1_numbers+labels",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"div_intro\"\u003E\r\n\r\n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n\r\n    \u003Cp class=\"intro\"\u003E This study consists of two parts. In the first part of this study, you are asked to choose repeatedly between two products. \u003C\u002Fp\u003E\r\n    \u003Cp class=\"intro\"\u003E Each product was rated by three independent and equally reliable reviewers. All ratings range from 0 to 100 points, with 100 points being the best rating. In addition, each rating is accompanied by a verbal rating which classifies each point rating into  one of five categories:\u003C\u002Fp\u003E\r\n      \u003Cp\u003E very poor - poor - fair - good - excellent \u003C\u002Fp\u003E\r\n      \u003Cp class=\"intro\"\u003E You will be provided with all three ratings for both products.\u003C\u002Fp\u003E\r\n    \u003C!-- only for numbers+labels condition:\r\n    \u003Cp class=\"intro\"\u003E In addition to the ratings, we will show you a verbal rating which classifies the point rating into one of five categories: poor, bad, fair, good and excellent. You will find the verbal rating next to the point rating.\u003C\u002Fp\u003E--\u003E\r\n    \u003Cp class=\"intro\"\u003E Your task is to choose the product you would prefer.\u003C\u002Fp\u003E\r\n  \r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Ffooter\u003E\r\n",
      "tardy": true
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button.continue": "click"
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {

const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 1 & condition != 2)

},
        "run": function anonymous() {
const ds = this.options.datastore
i = 0;
y = 0;

////// Product A

////Reviewer 1

// r1_n_A
show_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_A")
      ds.set("time", start)
}

show_content_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_A
show_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_A")
      ds.set("time", start)
}

show_content_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_A
show_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_A")
      ds.set("time", start)
}

show_content_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////// Product B

////Reviewer 1

// r1_n_B
show_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_B")
      ds.set("time", start)
}

show_content_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}
////Reviewer 2

// r2_n_B
show_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_B")
      ds.set("time", start)
}

show_content_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}


//// Reviewer 3

// r3_n_B
show_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_B")
      ds.set("time", start)
}

show_content_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}



// Buttons

choice_for_A = function(x) {
 ds.set('choice', 'A')
};

choice_for_B = function(x) {
 ds.set('choice', 'B')
};









}
      },
      "title": "Intro2_numbers-only",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"div_intro\"\u003E\r\n\r\n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n    \u003Cp class=\"intro\"\u003E The product ratings will be hidden in 'boxes' on the screen.\r\n      \u003Cbr\u003EIn order to see what the boxes contain, you can open them by moving the mouse cursor into one box at a time. When you move the cursor out of a box, it will close again. A box can be re-opened by moving the cursor back into the box. Therefore, you can open each box as often as you like. However, it is only possible to open one box at a time.\u003C\u002Fp\u003E\r\n    \u003Cp class=\"intro\"\u003E When you feel as if you have gathered enough information about the products, you can choose the product you would prefer by clicking on the respective buttons below the product (e.g., \"Product A\" or \"Product B\").\u003C\u002Fp\u003E\r\n\r\n    \u003Cp class=\"intro\"\u003E Below, you see an example of two products. \u003C\u002Fp\u003E\r\n\r\n\u003C!--\u003Ctable\u003E\r\n  \u003Ctr\u003E\r\n    \u003Ctd class=\"product_title_left\"\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003Ctd\u003E\r\n    \u003Ch1 class=\"product_name\"\u003E Computer \u003C\u002Fh1\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"product_title_right\"\u003E\r\n      \u003C\u002Ftd\u003E\r\n  \u003C\u002Ftr\u003E\r\n  \u003C\u002Ftable\u003E--\u003E\r\n\r\n\u003Cdiv class=\"content-horizontal-center \"\u003E\r\n\u003C!-- Table for both tables --\u003E\r\n\u003Ctable class=\"table-plain overall_table\"\u003E\r\n    \u003Ctd  class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product A --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\"\u003E\r\n      \u003Cp class=\"p_product\"\u003EComputer A\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n         \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_A\" onmouseenter=\"show_r1_n_A()\" onmouseleave=\"show_content_r1_n_A()\"\u003E\r\n            \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E60\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_A\" onmouseenter=\"show_r2_n_A()\" onmouseleave=\"show_content_r2_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E70\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_A\" onmouseenter=\"show_r3_n_A()\" onmouseleave=\"show_content_r3_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E80\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceA\" onclick=\"choice_for_A()\"\u003EComputer A\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product A --\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_gap\"\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product B --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\"\u003E\r\n      \u003Cp class=\"p_product\"\u003EComputer B\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n         \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_B\" onmouseenter=\"show_r1_n_B()\" onmouseleave=\"show_content_r1_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E85\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_B\" onmouseenter=\"show_r2_n_B()\" onmouseleave=\"show_content_r2_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E80\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n         \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_B\" onmouseenter=\"show_r3_n_B()\" onmouseleave=\"show_content_r3_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E90\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n         \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceB\" onclick=\"choice_for_B()\"\u003EComputer B\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product B --\u003E\r\n\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n\r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n    \r\n    \u003Cp class=\"intro\"\u003E In the main task, you can click on \"Computer A\" or \"Computer B\" to choose a product. After you have made a choice, a new screen appears.\u003C\u002Fp\u003E\r\n\r\n  \r\n\r\n\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Ffooter\u003E\r\n",
      "tardy": true
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button.continue": "click"
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {

const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 3)


},
        "run": function anonymous() {
const ds = this.options.datastore
i = 0;
y = 0;

////// Product A

////Reviewer 1

// r1_n_A
show_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_A")
      ds.set("time", start)
}

show_content_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r1_l_A
show_r1_l_A = function() {
    divTest = document.getElementById('box_r1_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_l_A")
      ds.set("time", start)
}

show_content_r1_l_A = function() {
    divTest = document.getElementById('box_r1_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_A
show_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_A")
      ds.set("time", start)
}

show_content_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r2_l_A
show_r2_l_A = function() {
    divTest = document.getElementById('box_r2_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_l_A")
      ds.set("time", start)
}

show_content_r2_l_A = function() {
    divTest = document.getElementById('box_r2_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_A
show_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_A")
      ds.set("time", start)
}

show_content_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r3_l_A
show_r3_l_A = function() {
    divTest = document.getElementById('box_r3_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_l_A")
      ds.set("time", start)
}

show_content_r3_l_A = function() {
    divTest = document.getElementById('box_r3_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////// Product B

////Reviewer 1

// r1_n_B
show_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_B")
      ds.set("time", start)
}

show_content_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r1_l_B
show_r1_l_B = function() {
    divTest = document.getElementById('box_r1_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_l_B")
      ds.set("time", start)
}

show_content_r1_l_B = function() {
    divTest = document.getElementById('box_r1_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_B
show_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_B")
      ds.set("time", start)
}

show_content_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r2_l_B
show_r2_l_B = function() {
    divTest = document.getElementById('box_r2_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_l_B")
      ds.set("time", start)
}

show_content_r2_l_B = function() {
    divTest = document.getElementById('box_r2_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_B
show_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_B")
      ds.set("time", start)
}

show_content_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r3_l_B
show_r3_l_B = function() {
    divTest = document.getElementById('box_r3_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_l_B")
      ds.set("time", start)
}

show_content_r3_l_B = function() {
    divTest = document.getElementById('box_r3_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}


// Buttons

choice_for_A = function(x) {
 ds.set('choice', 'A')
};

choice_for_B = function(x) {
 ds.set('choice', 'B')
};




}
      },
      "title": "Intro2_numbers+labels_n_left",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"div_intro\"\u003E\r\n\r\n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n    \u003Cp class=\"intro\"\u003E The product ratings will be hidden in 'boxes' on the screen. The point ratings will be shown in the left column, while the verbal ratings will be shown in the right column. \r\n      \u003Cbr\u003EIn order to see what the boxes contain, you can open them by moving the mouse cursor into one box at a time. When you move the cursor out of a box, it will close again. A box can be re-opened by moving the cursor back into the box. Therefore, you can open each box as often as you like. However, it is only possible to open one box at a time.\u003C\u002Fp\u003E\r\n    \u003Cp class=\"intro\"\u003E When you feel as if you have gathered enough information about the products, you can choose the product you would prefer by clicking on the respective buttons below the product (e.g., \"Product A\" or \"Product B\").\u003C\u002Fp\u003E\r\n\r\n\u003Cp class=\"intro\"\u003E Below, you see an example of two products. \u003C\u002Fp\u003E\r\n    \u003C!--\u003Ch1 class=\"product_name\"\u003E Computer \u003C\u002Fh1\u003E--\u003E\r\n\r\n\u003Cdiv class=\"content-horizontal-center \"\u003E\r\n\u003C!-- Table for both tables --\u003E\r\n\u003Ctable class=\"table-plain overall_table\"\u003E\r\n    \u003Ctd  class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product A --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\" colspan=\"2\"\u003E\r\n      \u003Cp class=\"p_product\"\u003EComputer A\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd  class=\"ml_td_points_labels\"\u003E\r\n            Label\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_A\" onmouseenter=\"show_r1_n_A()\" onmouseleave=\"show_content_r1_n_A()\"\u003E\r\n            \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E60\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_l_A\" onmouseenter=\"show_r1_l_A()\" onmouseleave=\"show_content_r1_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_l_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Efair\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_A\" onmouseenter=\"show_r2_n_A()\" onmouseleave=\"show_content_r2_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E70\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_l_A\" onmouseenter=\"show_r2_l_A()\" onmouseleave=\"show_content_r2_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_l_A\" onmouseleave=\"show_content_r2_l_A()\"\u003E\r\n  \u003Cp class=\"p_content\"\u003Efair\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_A\" onmouseenter=\"show_r3_n_A()\" onmouseleave=\"show_content_r3_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E80\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_l_A\" onmouseenter=\"show_r3_l_A()\" onmouseleave=\"show_content_r3_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_l_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Egood\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\" colspan=\"2\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceA\" onclick=\"choice_for_A()\"\u003EComputer A\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product A --\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_gap\"\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product B --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\" colspan=\"2\"\u003E\r\n      \u003Cp class=\"p_product\"\u003EComputer B\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Label\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_B\" onmouseenter=\"show_r1_n_B()\" onmouseleave=\"show_content_r1_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E85\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_l_B\" onmouseenter=\"show_r1_l_B()\" onmouseleave=\"show_content_r1_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_l_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Egood\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_B\" onmouseenter=\"show_r2_n_B()\" onmouseleave=\"show_content_r2_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E80\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_l_B\" onmouseenter=\"show_r2_l_B()\" onmouseleave=\"show_content_r2_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_l_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Egood\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_B\" onmouseenter=\"show_r3_n_B()\" onmouseleave=\"show_content_r3_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E90\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_l_B\" onmouseenter=\"show_r3_l_B()\" onmouseleave=\"show_content_r3_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_l_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Eexcellent\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\" colspan=\"2\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceB\" onclick=\"choice_for_B()\"\u003EComputer B\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product B --\u003E\r\n\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n\r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n    \r\n    \u003Cp class=\"intro\"\u003E In the main task, you can click on \"Computer A\" or \"Computer B\" to choose a product. After you have made a choice, a new screen appears.\u003C\u002Fp\u003E\r\n\r\n  \r\n\r\n\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Ffooter\u003E\r\n",
      "tardy": true
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button.continue": "click"
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {

const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 4)

},
        "run": function anonymous() {
const ds = this.options.datastore
i = 0;
y = 0;

////// Product A

////Reviewer 1

// r1_n_A
show_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_A")
      ds.set("time", start)
}

show_content_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r1_l_A
show_r1_l_A = function() {
    divTest = document.getElementById('box_r1_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_l_A")
      ds.set("time", start)
}

show_content_r1_l_A = function() {
    divTest = document.getElementById('box_r1_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_A
show_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_A")
      ds.set("time", start)
}

show_content_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r2_l_A
show_r2_l_A = function() {
    divTest = document.getElementById('box_r2_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_l_A")
      ds.set("time", start)
}

show_content_r2_l_A = function() {
    divTest = document.getElementById('box_r2_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_A
show_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_A")
      ds.set("time", start)
}

show_content_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r3_l_A
show_r3_l_A = function() {
    divTest = document.getElementById('box_r3_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_l_A")
      ds.set("time", start)
}

show_content_r3_l_A = function() {
    divTest = document.getElementById('box_r3_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////// Product B

////Reviewer 1

// r1_n_B
show_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_B")
      ds.set("time", start)
}

show_content_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r1_l_B
show_r1_l_B = function() {
    divTest = document.getElementById('box_r1_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_l_B")
      ds.set("time", start)
}

show_content_r1_l_B = function() {
    divTest = document.getElementById('box_r1_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_B
show_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_B")
      ds.set("time", start)
}

show_content_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r2_l_B
show_r2_l_B = function() {
    divTest = document.getElementById('box_r2_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_l_B")
      ds.set("time", start)
}

show_content_r2_l_B = function() {
    divTest = document.getElementById('box_r2_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_B
show_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_B")
      ds.set("time", start)
}

show_content_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r3_l_B
show_r3_l_B = function() {
    divTest = document.getElementById('box_r3_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_l_B")
      ds.set("time", start)
}

show_content_r3_l_B = function() {
    divTest = document.getElementById('box_r3_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}


// Buttons

choice_for_A = function(x) {
 ds.set('choice', 'A')
};

choice_for_B = function(x) {
 ds.set('choice', 'B')
};










}
      },
      "title": "Intro2_numbers+labels_n_right",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"div_intro\"\u003E\r\n\r\n    \u003Ch2\u003EInstructions\u003C\u002Fh2\u003E\r\n    \u003Cp class=\"intro\"\u003E The product ratings will be hidden in 'boxes' on the screen. The verbal ratings will be shown in the left column, while the point ratings will be shown in the right column. \r\n      \u003Cbr\u003EIn order to see what the boxes contain, you can open them by moving the mouse cursor into one box at a time. When you move the cursor out of a box, it will close again. A box can be re-opened by moving the cursor back into the box. Therefore, you can open each box as often as you like. However, it is only possible to open one box at a time.\u003C\u002Fp\u003E\r\n    \u003Cp class=\"intro\"\u003E When you feel as if you have gathered enough information about the products, you can choose the product you would prefer by clicking on the respective buttons below the product (e.g., \"Product A\" or \"Product B\").\u003C\u002Fp\u003E\r\n    \u003Cp class=\"intro\"\u003E Below, you see an example of two products. \u003C\u002Fp\u003E\r\n\r\n    \u003C!--\u003Ch1 class=\"product_name\"\u003E Computer \u003C\u002Fh1\u003E--\u003E\r\n\r\n\u003Cdiv class=\"content-horizontal-center \"\u003E\r\n\u003C!-- Table for both tables --\u003E\r\n\u003Ctable class=\"table-plain overall_table\"\u003E\r\n    \u003Ctd  class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product A --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\" colspan=\"2\"\u003E\r\n      \u003Cp class=\"p_product\"\u003EComputer A\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Label\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd  class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_l_A\" onmouseenter=\"show_r1_l_A()\" onmouseleave=\"show_content_r1_l_A()\"\u003E\r\n            \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_l_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Efair\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_A\" onmouseenter=\"show_r1_n_A()\" onmouseleave=\"show_content_r1_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E60\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_l_A\" onmouseenter=\"show_r2_l_A()\" onmouseleave=\"show_content_r2_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_l_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Efair\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_A\" onmouseenter=\"show_r2_n_A()\" onmouseleave=\"show_content_r2_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E70\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_l_A\" onmouseenter=\"show_r3_l_A()\" onmouseleave=\"show_content_r3_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_l_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Egood\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_A\" onmouseenter=\"show_r3_n_A()\" onmouseleave=\"show_content_r3_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_A\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E80\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\" colspan=\"2\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceA\" onclick=\"choice_for_A()\"\u003EComputer A\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product A --\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_gap\"\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product B --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\" colspan=\"2\"\u003E\r\n      \u003Cp class=\"p_product\"\u003EComputer B\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Label\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_l_B\" onmouseenter=\"show_r1_l_B()\" onmouseleave=\"show_content_r1_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_l_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Egood\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_B\" onmouseenter=\"show_r1_n_B()\" onmouseleave=\"show_content_r1_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E85\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_l_B\" onmouseenter=\"show_r2_l_B()\" onmouseleave=\"show_content_r2_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_l_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Egood\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_B\" onmouseenter=\"show_r2_n_B()\" onmouseleave=\"show_content_r2_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E80\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_l_B\" onmouseenter=\"show_r3_l_B()\" onmouseleave=\"show_content_r3_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_l_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003Eexcellent\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_B\" onmouseenter=\"show_r3_n_B()\" onmouseleave=\"show_content_r3_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_B\" \u003E\r\n  \u003Cp class=\"p_content\"\u003E90\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\" colspan=\"2\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceB\" onclick=\"choice_for_B()\"\u003EComputer B\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product B --\u003E\r\n\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n\r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n    \r\n    \u003Cp class=\"intro\"\u003E In the main task, you can click on \"Computer A\" or \"Computer B\" to choose a product. After you have made a choice, a new screen appears.\u003C\u002Fp\u003E\r\n\r\n  \r\n\r\n\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Ffooter\u003E\r\n",
      "tardy": true
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button.continue": "click"
      },
      "messageHandlers": {},
      "title": "Intro3",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"div_intro\"\u003E\r\n\r\n    \u003Ch2\u003EStart of the choice task\u003C\u002Fh2\u003E\r\n    \u003Cp class=\"intro\"\u003E In the following, you will make 20 choices between two products. The information about the products will presented as shown on the last pages.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp class=\"intro\"\u003EAgain, your task is to choose the product you would prefer.\u003C\u002Fp\u003E\r\n\r\n    \u003Cp class=\"intro\"\u003ETo start the  choice task, click \"continue &rarr;\"\u003C\u002Fp\u003E\r\n\r\n \r\n  \r\n\r\n\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button.continue": "click"
      },
      "messageHandlers": {
        "run": function anonymous() {
const ds = this.options.datastore



// determine order of gamblepairs
product_order = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
product_order_shuffled = _.shuffle(product_order) //shuffles order


count = 0 // set count to 0

// save variables
ds.set('count', count)

ds.set('product_order_shuffled', product_order_shuffled)


},
        "after:end": function anonymous() {
i = 0;
y = 0;
}
      },
      "title": "Start_screen",
      "content": "\u003Cmain class=\"interlude\"\u003E\r\n\u003Cdiv class=\"content-horizontal-center content-vertical-center\" \u003E\r\n\r\n\u003Cdiv class=\"interlude content-horizontal-center content-vertical-center\" style=\"display: block;\"\u003E\r\n  \u003Cdiv class=\"height_250px content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cp class=\"content-horizontal-center\"\u003EPlease click \"Start\" to start the choice task. \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n     \u003Cdiv class=\"div_button_interlude content-vertical-center content-horizontal-center\"\u003E \u003Cbutton type=\"submit\" class=\"continue\"\u003EStart\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "trial": "0",
          "product": "TV"
        },
        {
          "trial": "1",
          "product": "Microwave"
        },
        {
          "trial": "2",
          "product": "E-Book reader"
        },
        {
          "trial": "3",
          "product": "Printer"
        },
        {
          "trial": "4",
          "product": "Smartphone"
        },
        {
          "trial": "5",
          "product": "Speakers"
        },
        {
          "trial": "6",
          "product": "Laptop"
        },
        {
          "trial": "7",
          "product": "Tablet"
        },
        {
          "trial": "8",
          "product": "Washing machine"
        },
        {
          "trial": "9",
          "product": "Dishwasher"
        },
        {
          "trial": "10",
          "product": "Computer screen"
        },
        {
          "trial": "11",
          "product": "Refrigerator"
        },
        {
          "trial": "12",
          "product": "Smartwatch"
        },
        {
          "trial": "13",
          "product": "Headphones"
        },
        {
          "trial": "14",
          "product": "Oven"
        },
        {
          "trial": "15",
          "product": "Toaster"
        },
        {
          "trial": "16",
          "product": "Vacuum cleaner"
        },
        {
          "trial": "17",
          "product": "Coffee machine"
        },
        {
          "trial": "18",
          "product": "Printer"
        },
        {
          "trial": "19",
          "product": "Dryer"
        }
      ],
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {

const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 1 & condition != 2)


}
      },
      "title": "Loop_numbers-only",
      "tardy": true,
      "sample": {
        "mode": "draw-shuffle"
      },
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {
          "": ""
        },
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Screen",
            "files": {},
            "parameters": {},
            "responses": {
              "click button.choiceA": "option_a",
              "click button.choiceB": "option_B"
            },
            "messageHandlers": {
              "run": function anonymous() {
const ds = this.options.datastore

ds.get('product_order_shuffled') //get product order
ds.get('count') // get counter variable

// Products

i = 0; // set i to 0 (i is box counter, see below)
y = 0; // just for testing purposes

products_data = [
 // set 1
[[['85','80','70'],['good','good','fair']],[['86','57','74'],['excellent','fair','good']],1], // last attribute is set ID
[[['81','78','66'],['good','good','fair']],[['82','55','70'],['good','fair','fair']],2],
[[['76','71','61'],['good','good','fair']],[['84','69','70'],['good','fair','fair']],3],
[[['76','71','61'],['good','good','fair']],[['89','60','77'],['excellent','fair','good']],4],
// set 2
[[['79','84','84'],['good','good','good']],[['71','72','87'],['good','good','excellent']],5],
[[['78','92','87'],['good','excellent','excellent']],[['80','72','90'],['good','good','excellent']],6],
[[['72','86','86'],['good','excellent','excellent']],[['82','83','98'],['good','good','excellent']],7],
[[['77','81','71'],['good','good','good']],[['73','78','93'],['good','good','excellent']],8],
// set 3
[[['65','84','67'],['fair','good','fair']],[['55','56','86'],['fair','fair','excellent']],9],
[[['67','92','72'],['fair','excellent','good']],[['70','59','87'],['fair','fair','excellent']],10],
[[['53','91','71'],['fair','excellent','good']],[['66','67','97'],['fair','fair','excellent']],11],
[[['59','75','58'],['fair','good','fair']],[['56','63','90'],['fair','fair','excellent']],12],
// filler_equal
[[['73','82','63'],['good','good','fair']],[['74','81','65'],['good','good','fair']],13],
[[['92','77','73'],['excellent','good','good']],[['75','79','91'],['good','good','excellent']],14],
[[['55','68','60'],['fair','fair','fair']],[['58','64','63'],['fair','fair','fair']],15],
[[['72','56','69'],['good','fair','fair']],[['68','59','71'],['fair','fair','good']],16],
// filler_easy
[[['58','62','75'],['fair','fair','good']],[['87','76','91'],['excellent','good','excellent']],17],
[[['68','77','83'],['fair','good','good']],[['89','90','94'],['excellent','excellent','excellent']],18],
[[['56','62','66'],['fair','fair','fair']],[['67','79','83'],['fair','good','good']],19],
[[['67','73','58'],['fair','good','fair']],[['89','84','70'],['excellent','good','good']],20],

]


var shuffle_product_pair = function(product_pair) {
  return [
    shuffle_product(product_pair)
  ]
}

//Shuffle attribute order within a product (both keeping number and value in the same row)

var shuffle_product = function(product_pair) {
  // Shuffle the order of outcomes and probabilities
  // within a single gamble
  var product_a = product_pair[0]
  var product_b = product_pair[1]

  // Extract outcomes and probabilities from the gamble
  var numbers_a = product_a[0]
  var labels_a = product_a[1]
  var numbers_b = product_b[0]
  var labels_b = product_b[1]

  // Create a *shuffled* array containing the numbers from 0..(n-1),
  // where n is the number of outcomes in the gamble.
  var order = _.shuffle(_.range(3))

  // Create a function can can take an array and a
  // specified order, and reorder the array accordingly.
  // For example, given an array ['A', 'B', 'C'] and
  // an order [2, 0, 1], return ['C', 'A', 'B'].
  var reorder = function(list, order) {
    return order.map(function(i) {
      return list[i]
    })
  }

  // Apply the random ordering generated above
  // to the outcomes and probabilities
  var shuffled_products = [
    reorder(numbers_a, order),
    reorder(labels_a, order),
    reorder(numbers_b, order),
    reorder(labels_b, order)
  ]

  // Return the result
  return shuffled_products
}

// retrieve the current productpair number from the product order array
productpair_nummer = product_order_shuffled[count]
//choose the xth item of the products_data data
product_pair = products_data[productpair_nummer];
// Mini-Example:
// product_order_shuffled = [1,2,0]
// First trial -> product_order_shuffled[0] -> productpair_nummer = 1
// Choose second set from products_data (because counting start with 0)

var product_source = product_pair[2] // set ID
var product_pair = product_pair.slice(0,2) // extract stimulus data from set
var product_pair = _.shuffle(product_pair) // randomize left/right presentation
var product_shuffled = shuffle_product_pair(product_pair) //randomize rating order within products
var product_a_sum = [product_shuffled[0][0],product_shuffled[0][1]] // retrieve data for Product A
var product_b_sum = [product_shuffled[0][2],product_shuffled[0][3]] // retrieve data for Product B

var number_A_r1 = product_shuffled[0][0][0] // Numeric rating of Reviewer 1 for Product A
var number_A_r2 = product_shuffled[0][0][1] // Numeric rating of Reviewer 2 for Product A
var number_A_r3 = product_shuffled[0][0][2] // Numeric rating of Reviewer 3 for Product A
var label_A_r1 = product_shuffled[0][1][0] // Verbal rating of Reviewer 2 for Product A (not needed in this condition)
var label_A_r2 = product_shuffled[0][1][1] // and so on...
var label_A_r3 = product_shuffled[0][1][2]

var number_B_r1 = product_shuffled[0][2][0] // as for Product A
var number_B_r2 = product_shuffled[0][2][1]
var number_B_r3 = product_shuffled[0][2][2]
var label_B_r1 = product_shuffled[0][3][0]
var label_B_r2 = product_shuffled[0][3][1]
var label_B_r3 = product_shuffled[0][3][2]

// insert values into boxes/present values
document.getElementById('number_A_r1').innerHTML = number_A_r1 
document.getElementById('number_A_r2').innerHTML = number_A_r2
document.getElementById('number_A_r3').innerHTML = number_A_r3
document.getElementById('number_B_r1').innerHTML = number_B_r1
document.getElementById('number_B_r2').innerHTML = number_B_r2
document.getElementById('number_B_r3').innerHTML = number_B_r3





////// Product A

////Reviewer 1

// Function to record Mouselab data
// Same for all boxes:
// show_ function is triggered when mouse enters box
// show_content_ funtion is triggered when mouse leaves the box
// i is counter for boxes opened
// saves which box was opened and for how long
// for each opened box, two variables are saved: box[i] and time[i]; i refers to box counter
// Note: Opening logic is similar to MouselabWEB: https://www.mouselabweb.org/technotes.html


// r1_n_A

show_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "transparent"; //Cover becomes transparent
      var start = performance.now(); // Save timestamp
      i = i + 1; // Box counter is updated
      box_number = "box" + i ; // define box_number for variable name
      ds.set(box_number, "box_r1_n_A") // save name of box
      ds.set("time", start) // save timestamp
}

show_content_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "lightblue"; //change cover to lightblue
      time = ds.get("time") // get timestamp from opening
      var elapsed = performance.now() - time; // compute opening time
      time_number = "time" + i ; // define time_number for variable name
      ds.set(time_number, elapsed) //save opening time
}

////Reviewer 2

// r2_n_A
show_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_A")
      ds.set("time", start)
}

show_content_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_A
show_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_A")
      ds.set("time", start)
}

show_content_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////// Product B

////Reviewer 1

// r1_n_B
show_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_B")
      ds.set("time", start)
}

show_content_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}
////Reviewer 2

// r2_n_B
show_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_B")
      ds.set("time", start)
}

show_content_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}


//// Reviewer 3

// r3_n_B
show_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_B")
      ds.set("time", start)
}

show_content_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}


// Buttons (saves chosen option)

choice_for_A = function(x) {
 ds.set('choice', 'A')
};

choice_for_B = function(x) {
 ds.set('choice', 'B')
};

// Data storage

ds.set('product_a_sum', JSON.stringify(product_a_sum)) // record stimulus data for Product A
ds.set('product_b_sum', JSON.stringify(product_b_sum)) // record stimulus data for Product B
ds.set('product_source', product_source) // record set ID









},
              "end": function anonymous() {
const ds = this.options.datastore
ds.get('count')

count = count + 1 // add 1 to counter

ds.set('count', count)
}
            },
            "title": "Mouselab_page",
            "content": "\u003Cmain class=\"displaysize\"\u003E\r\n\u003C!--\u003Ch1 class=\"product_name\"\u003E ${parameters.product} \u003C\u002Fh1\u003E--\u003E\r\n\r\n\u003Cdiv class=\"content-horizontal-center \"\u003E\r\n\u003C!-- Table for both tables --\u003E\r\n\u003Ctable class=\"table-plain overall_table\"\u003E\r\n    \u003Ctd  class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product A --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only_width30\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B product_title_n-only\" colspan=\"3\"\u003E\r\n      \u003Cp class=\"p_product\"\u003E${parameters.product} A\u003C\u002Fp\u003E \u003C!-- Product name --\u003E\r\n      \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\" colspan=\"2\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n         \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\" colspan=\"2\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_A\" onmouseenter=\"show_r1_n_A()\" onmouseleave=\"show_content_r1_n_A()\"\u003E\r\n            \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_A\" \u003E\r\n  \u003Cp id=\"number_A_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\" colspan=\"2\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_A\" onmouseenter=\"show_r2_n_A()\" onmouseleave=\"show_content_r2_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_A\" \u003E\r\n  \u003Cp id=\"number_A_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\" colspan=\"2\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_A\" onmouseenter=\"show_r3_n_A()\" onmouseleave=\"show_content_r3_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_A\" \u003E\u003Cp id=\"number_A_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n            \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceA\" onclick=\"choice_for_A()\"\u003E${parameters.product} A\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product A --\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_gap\"\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product B --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only_width30\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B product_title_n-only\" colspan=\"3\"\u003E\r\n      \u003Cp class=\"p_product\"\u003E${parameters.product} B\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n       \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"  colspan=\"2\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n         \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\" colspan=\"2\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_B\" onmouseenter=\"show_r1_n_B()\" onmouseleave=\"show_content_r1_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\" colspan=\"2\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_B\" onmouseenter=\"show_r2_n_B()\" onmouseleave=\"show_content_r2_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n         \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\" colspan=\"2\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_B\" onmouseenter=\"show_r3_n_B()\" onmouseleave=\"show_content_r3_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n         \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd class=\"filler_td_n-only1\"\u003E\u003C\u002Ftd\u003E\r\n          \u003Ctd colspan=\"2\"\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceB\" onclick=\"choice_for_B()\"\u003E${parameters.product} B\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"filler_td_n-only2\"\u003E\u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product B --\u003E\r\n\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n\r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n",
            "tardy": true,
            "scrollTop": true
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "parameters": {},
            "responses": {
              "click button.continue": "click"
            },
            "messageHandlers": {
              "run": function anonymous() {
const ds = this.options.datastore /* Erspart lästige Schreibarbeit */
ds.get('count')
document.getElementById('completed').innerHTML = count // retrieve counter to present the number of completed trials
},
              "after:end": function anonymous() {
i = 0; // set i to 0 (box counter)
y = 0;
}
            },
            "title": "interlude",
            "content": "\u003Cmain class=\"interlude\"\u003E\r\n\u003Cdiv class=\"content-horizontal-center content-vertical-center\" \u003E\r\n\r\n\u003Cdiv class=\"interlude content-horizontal-center content-vertical-center\" style=\"display: block;\"\u003E\r\n  \u003Cdiv class=\"height_250px content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cp class=\"content-horizontal-center\"\u003EYou have made&nbsp;\u003Cspan id=\"completed\"\u003E\u003C\u002Fspan\u003E&nbsp;out of 20 choices. \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n     \u003Cdiv class=\"div_button_interlude content-vertical-center content-horizontal-center\"\u003E \u003Cbutton type=\"submit\" class=\"continue\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n\r\n\r\n"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "trial": "0",
          "product": "TV"
        },
        {
          "trial": "1",
          "product": "Microwave"
        },
        {
          "trial": "2",
          "product": "E-Book Reader"
        },
        {
          "trial": "3",
          "product": "Printer"
        },
        {
          "trial": "4",
          "product": "Smartphone"
        },
        {
          "trial": "5",
          "product": "Speakers"
        },
        {
          "trial": "6",
          "product": "Laptop"
        },
        {
          "trial": "7",
          "product": "Tablet"
        },
        {
          "trial": "8",
          "product": "Washing machine"
        },
        {
          "trial": "9",
          "product": "Dishwasher"
        },
        {
          "trial": "10",
          "product": "Computer screen"
        },
        {
          "trial": "11",
          "product": "Refrigerator"
        },
        {
          "trial": "12",
          "product": "Smartwatch"
        },
        {
          "trial": "13",
          "product": "Headphones"
        },
        {
          "trial": "14",
          "product": "Oven"
        },
        {
          "trial": "15",
          "product": "Toaster"
        },
        {
          "trial": "16",
          "product": "Vacuum cleaner"
        },
        {
          "trial": "17",
          "product": "Coffee machine"
        },
        {
          "trial": "18",
          "product": "Printer"
        },
        {
          "trial": "19",
          "product": "Dryer"
        }
      ],
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {

const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 3)


}
      },
      "title": "Loop_numbers+labels_n_left",
      "tardy": true,
      "sample": {
        "mode": "draw-shuffle"
      },
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {
          "": ""
        },
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Screen",
            "files": {},
            "parameters": {},
            "responses": {
              "click button.choiceA": "option_a",
              "click button.choiceB": "option_B"
            },
            "messageHandlers": {
              "run": function anonymous() {
const ds = this.options.datastore

ds.get('product_order_shuffled')
ds.get('count')

i = 0;
y = 0;
// Products

products_data = [
 // set 1
[[['85','80','70'],['good','good','fair']],[['86','57','74'],['excellent','fair','good']],1],
[[['81','78','66'],['good','good','fair']],[['82','55','70'],['good','fair','fair']],2],
[[['76','71','61'],['good','good','fair']],[['84','69','70'],['good','fair','fair']],3],
[[['76','71','61'],['good','good','fair']],[['89','60','77'],['excellent','fair','good']],4],
// set 2
[[['79','84','84'],['good','good','good']],[['71','72','87'],['good','good','excellent']],5],
[[['78','92','87'],['good','excellent','excellent']],[['80','72','90'],['good','good','excellent']],6],
[[['72','86','86'],['good','excellent','excellent']],[['82','83','98'],['good','good','excellent']],7],
[[['77','81','71'],['good','good','good']],[['73','78','93'],['good','good','excellent']],8],
// set 3
[[['65','84','67'],['fair','good','fair']],[['55','56','86'],['fair','fair','excellent']],9],
[[['67','92','72'],['fair','excellent','good']],[['70','59','87'],['fair','fair','excellent']],10],
[[['53','91','71'],['fair','excellent','good']],[['66','67','97'],['fair','fair','excellent']],11],
[[['59','75','58'],['fair','good','fair']],[['56','63','90'],['fair','fair','excellent']],12],
// filler_equal
[[['73','82','63'],['good','good','fair']],[['74','81','65'],['good','good','fair']],13],
[[['92','77','73'],['excellent','good','good']],[['75','79','91'],['good','good','excellent']],14],
[[['55','68','60'],['fair','fair','fair']],[['58','64','63'],['fair','fair','fair']],15],
[[['72','56','69'],['good','fair','fair']],[['68','59','71'],['fair','fair','good']],16],
// filler_easy
[[['58','62','75'],['fair','fair','good']],[['87','76','91'],['excellent','good','excellent']],17],
[[['68','77','83'],['fair','good','good']],[['89','90','94'],['excellent','excellent','excellent']],18],
[[['56','62','66'],['fair','fair','fair']],[['67','79','83'],['fair','good','good']],19],
[[['67','73','58'],['fair','good','fair']],[['89','84','70'],['excellent','good','good']],20],

]

var shuffle_product_pair = function(product_pair) {
  return [
    shuffle_product(product_pair)
  ]
}


var shuffle_product = function(product_pair) {
  // Shuffle the order of outcomes and probabilities
  // within a single gamble
  var product_a = product_pair[0]
  var product_b = product_pair[1]

  // Extract outcomes and probabilities from the gamble
  var numbers_a = product_a[0]
  var labels_a = product_a[1]
  var numbers_b = product_b[0]
  var labels_b = product_b[1]

  // Create a *shuffled* array containing the numbers from 0..(n-1),
  // where n is the number of outcomes in the gamble.
  var order = _.shuffle(_.range(3))

  // Create a function can can take an array and a
  // specified order, and reorder the array accordingly.
  // For example, given an array ['A', 'B', 'C'] and
  // an order [2, 0, 1], return ['C', 'A', 'B'].
  var reorder = function(list, order) {
    return order.map(function(i) {
      return list[i]
    })
  }

  // Apply the random ordering generated above
  // to the outcomes and probabilities
  var shuffled_products = [
    reorder(numbers_a, order),
    reorder(labels_a, order),
    reorder(numbers_b, order),
    reorder(labels_b, order)
  ]

  // Return the result
  return shuffled_products
}


productpair_nummer = product_order_shuffled[count]
product_pair = products_data[productpair_nummer];



var product_source = product_pair[2]
var product_pair = product_pair.slice(0,2)
var product_pair = _.shuffle(product_pair)
var product_shuffled = shuffle_product_pair(product_pair)
var product_a_sum = [product_shuffled[0][0],product_shuffled[0][1]]
var product_b_sum = [product_shuffled[0][2],product_shuffled[0][3]]

var number_A_r1 = product_shuffled[0][0][0]
var number_A_r2 = product_shuffled[0][0][1]
var number_A_r3 = product_shuffled[0][0][2]
var label_A_r1 = product_shuffled[0][1][0]
var label_A_r2 = product_shuffled[0][1][1]
var label_A_r3 = product_shuffled[0][1][2]

var number_B_r1 = product_shuffled[0][2][0]
var number_B_r2 = product_shuffled[0][2][1]
var number_B_r3 = product_shuffled[0][2][2]
var label_B_r1 = product_shuffled[0][3][0]
var label_B_r2 = product_shuffled[0][3][1]
var label_B_r3 = product_shuffled[0][3][2]


document.getElementById('number_A_r1').innerHTML = number_A_r1
document.getElementById('number_A_r2').innerHTML = number_A_r2
document.getElementById('number_A_r3').innerHTML = number_A_r3
document.getElementById('label_A_r1').innerHTML = label_A_r1
document.getElementById('label_A_r2').innerHTML = label_A_r2
document.getElementById('label_A_r3').innerHTML = label_A_r3
document.getElementById('number_B_r1').innerHTML = number_B_r1
document.getElementById('number_B_r2').innerHTML = number_B_r2
document.getElementById('number_B_r3').innerHTML = number_B_r3
document.getElementById('label_B_r1').innerHTML = label_B_r1
document.getElementById('label_B_r2').innerHTML = label_B_r2
document.getElementById('label_B_r3').innerHTML = label_B_r3




////// Product A

////Reviewer 1

// r1_n_A
show_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_A")
      ds.set("time", start)
}

show_content_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r1_l_A
show_r1_l_A = function() {
    divTest = document.getElementById('box_r1_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_l_A")
      ds.set("time", start)
}

show_content_r1_l_A = function() {
    divTest = document.getElementById('box_r1_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_A
show_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_A")
      ds.set("time", start)
}

show_content_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r2_l_A
show_r2_l_A = function() {
    divTest = document.getElementById('box_r2_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_l_A")
      ds.set("time", start)
}

show_content_r2_l_A = function() {
    divTest = document.getElementById('box_r2_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_A
show_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_A")
      ds.set("time", start)
}

show_content_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r3_l_A
show_r3_l_A = function() {
    divTest = document.getElementById('box_r3_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_l_A")
      ds.set("time", start)
}

show_content_r3_l_A = function() {
    divTest = document.getElementById('box_r3_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////// Product B

////Reviewer 1

// r1_n_B
show_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_B")
      ds.set("time", start)
}

show_content_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r1_l_B
show_r1_l_B = function() {
    divTest = document.getElementById('box_r1_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_l_B")
      ds.set("time", start)
}

show_content_r1_l_B = function() {
    divTest = document.getElementById('box_r1_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_B
show_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_B")
      ds.set("time", start)
}

show_content_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r2_l_B
show_r2_l_B = function() {
    divTest = document.getElementById('box_r2_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_l_B")
      ds.set("time", start)
}

show_content_r2_l_B = function() {
    divTest = document.getElementById('box_r2_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_B
show_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_B")
      ds.set("time", start)
}

show_content_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r3_l_B
show_r3_l_B = function() {
    divTest = document.getElementById('box_r3_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_l_B")
      ds.set("time", start)
}

show_content_r3_l_B = function() {
    divTest = document.getElementById('box_r3_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}


// Buttons

choice_for_A = function(x) {
 ds.set('choice', 'A')
};

choice_for_B = function(x) {
 ds.set('choice', 'B')
};

// Data storage

ds.set('product_a_sum', JSON.stringify(product_a_sum))
ds.set('product_b_sum', JSON.stringify(product_b_sum))
ds.set('product_source', product_source)









},
              "end": function anonymous() {
const ds = this.options.datastore /* Erspart lästige Schreibarbeit */
ds.get('count')

count = count + 1

ds.set('count', count)
}
            },
            "title": "Mouselab_page",
            "content": "\u003Cmain class=\"displaysize\"\u003E\r\n\u003C!--\u003Ch1 class=\"product_name\"\u003E ${parameters.product} \u003C\u002Fh1\u003E--\u003E\r\n\r\n\u003Cdiv class=\"content-horizontal-center \"\u003E\r\n\u003C!-- Table for both tables --\u003E\r\n\u003Ctable class=\"table-plain overall_table\"\u003E\r\n    \u003Ctd  class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product A --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\" colspan=\"2\"\u003E\r\n      \u003Cp class=\"p_product\"\u003E${parameters.product} A\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd  class=\"ml_td_points_labels\"\u003E\r\n            Label\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_A\" onmouseenter=\"show_r1_n_A()\" onmouseleave=\"show_content_r1_n_A()\"\u003E\r\n            \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_A\" \u003E\r\n  \u003Cp id=\"number_A_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_l_A\" onmouseenter=\"show_r1_l_A()\" onmouseleave=\"show_content_r1_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_l_A\" \u003E\r\n  \u003Cp id=\"label_A_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_A\" onmouseenter=\"show_r2_n_A()\" onmouseleave=\"show_content_r2_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_A\" \u003E\r\n  \u003Cp id=\"number_A_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_l_A\" onmouseenter=\"show_r2_l_A()\" onmouseleave=\"show_content_r2_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_l_A\" \u003E\r\n  \u003Cp id=\"label_A_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_A\" onmouseenter=\"show_r3_n_A()\" onmouseleave=\"show_content_r3_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_A\" \u003E\u003Cp id=\"number_A_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_l_A\" onmouseenter=\"show_r3_l_A()\" onmouseleave=\"show_content_r3_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_l_A\" \u003E\r\n  \u003Cp id=\"label_A_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\" colspan=\"2\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceA\" onclick=\"choice_for_A()\"\u003E${parameters.product} A\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product A --\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_gap\"\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product B --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\" colspan=\"2\"\u003E\r\n      \u003Cp class=\"p_product\"\u003E${parameters.product} B\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Label\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_B\" onmouseenter=\"show_r1_n_B()\" onmouseleave=\"show_content_r1_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_l_B\" onmouseenter=\"show_r1_l_B()\" onmouseleave=\"show_content_r1_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_l_B\" \u003E\r\n  \u003Cp id=\"label_B_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_B\" onmouseenter=\"show_r2_n_B()\" onmouseleave=\"show_content_r2_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_l_B\" onmouseenter=\"show_r2_l_B()\" onmouseleave=\"show_content_r2_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_l_B\" \u003E\r\n  \u003Cp id=\"label_B_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_B\" onmouseenter=\"show_r3_n_B()\" onmouseleave=\"show_content_r3_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_l_B\" onmouseenter=\"show_r3_l_B()\" onmouseleave=\"show_content_r3_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_l_B\" \u003E\r\n  \u003Cp id=\"label_B_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\" colspan=\"2\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceB\" onclick=\"choice_for_B()\"\u003E${parameters.product} B\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product B --\u003E\r\n\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n\r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n",
            "tardy": true,
            "scrollTop": true
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "parameters": {},
            "responses": {
              "click button.continue": "click"
            },
            "messageHandlers": {
              "run": function anonymous() {
const ds = this.options.datastore /* Erspart lästige Schreibarbeit */
ds.get('count')
document.getElementById('completed').innerHTML = count
},
              "after:end": function anonymous() {
i = 0;
y = 0;
}
            },
            "title": "interlude",
            "content": "\u003Cmain class=\"interlude\"\u003E\r\n\u003Cdiv class=\"content-horizontal-center content-vertical-center\" \u003E\r\n\r\n\u003Cdiv class=\"interlude content-horizontal-center content-vertical-center\" style=\"display: block;\"\u003E\r\n  \u003Cdiv class=\"height_250px content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cp class=\"content-horizontal-center\"\u003EYou have made&nbsp;\u003Cspan id=\"completed\"\u003E\u003C\u002Fspan\u003E&nbsp;out of 20 choices. \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n     \u003Cdiv class=\"div_button_interlude content-vertical-center content-horizontal-center\"\u003E \u003Cbutton type=\"submit\" class=\"continue\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n\r\n\r\n"
          }
        ]
      }
    },
    {
      "type": "lab.flow.Loop",
      "files": {},
      "parameters": {},
      "templateParameters": [
        {
          "trial": "0",
          "product": "TV"
        },
        {
          "trial": "1",
          "product": "Microwave"
        },
        {
          "trial": "2",
          "product": "E-Book Reader"
        },
        {
          "trial": "3",
          "product": "Printer"
        },
        {
          "trial": "4",
          "product": "Smartphone"
        },
        {
          "trial": "5",
          "product": "Speakers"
        },
        {
          "trial": "6",
          "product": "Laptop"
        },
        {
          "trial": "7",
          "product": "Tablet"
        },
        {
          "trial": "8",
          "product": "Washing machine"
        },
        {
          "trial": "9",
          "product": "Dishwasher"
        },
        {
          "trial": "10",
          "product": "Computer screen"
        },
        {
          "trial": "11",
          "product": "Refrigerator"
        },
        {
          "trial": "12",
          "product": "Smartwatch"
        },
        {
          "trial": "13",
          "product": "Headphones"
        },
        {
          "trial": "14",
          "product": "Oven"
        },
        {
          "trial": "15",
          "product": "Toaster"
        },
        {
          "trial": "16",
          "product": "Vacuum cleaner"
        },
        {
          "trial": "17",
          "product": "Coffee machine"
        },
        {
          "trial": "18",
          "product": "Printer"
        },
        {
          "trial": "19",
          "product": "Dryer"
        }
      ],
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {

const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 4)


}
      },
      "title": "Loop_numbers+labels_n_right",
      "tardy": true,
      "sample": {
        "mode": "draw-shuffle"
      },
      "shuffleGroups": [],
      "template": {
        "type": "lab.flow.Sequence",
        "files": {},
        "parameters": {},
        "responses": {
          "": ""
        },
        "messageHandlers": {},
        "title": "Sequence",
        "content": [
          {
            "type": "lab.html.Screen",
            "files": {},
            "parameters": {},
            "responses": {
              "click button.choiceA": "option_a",
              "click button.choiceB": "option_B"
            },
            "messageHandlers": {
              "run": function anonymous() {
const ds = this.options.datastore

ds.get('product_order_shuffled')
ds.get('count')

i = 0;
y = 0;

// Products

products_data = [
  // set 1
[[['85','80','70'],['good','good','fair']],[['86','57','74'],['excellent','fair','good']],1],
[[['81','78','66'],['good','good','fair']],[['82','55','70'],['good','fair','fair']],2],
[[['76','71','61'],['good','good','fair']],[['84','69','70'],['good','fair','fair']],3],
[[['76','71','61'],['good','good','fair']],[['89','60','77'],['excellent','fair','good']],4],
// set 2
[[['79','84','84'],['good','good','good']],[['71','72','87'],['good','good','excellent']],5],
[[['78','92','87'],['good','excellent','excellent']],[['80','72','90'],['good','good','excellent']],6],
[[['72','86','86'],['good','excellent','excellent']],[['82','83','98'],['good','good','excellent']],7],
[[['77','81','71'],['good','good','good']],[['73','78','93'],['good','good','excellent']],8],
// set 3
[[['65','84','67'],['fair','good','fair']],[['55','56','86'],['fair','fair','excellent']],9],
[[['67','92','72'],['fair','excellent','good']],[['70','59','87'],['fair','fair','excellent']],10],
[[['53','91','71'],['fair','excellent','good']],[['66','67','97'],['fair','fair','excellent']],11],
[[['59','75','58'],['fair','good','fair']],[['56','63','90'],['fair','fair','excellent']],12],
// filler_equal
[[['73','82','63'],['good','good','fair']],[['74','81','65'],['good','good','fair']],13],
[[['92','77','73'],['excellent','good','good']],[['75','79','91'],['good','good','excellent']],14],
[[['55','68','60'],['fair','fair','fair']],[['58','64','63'],['fair','fair','fair']],15],
[[['72','56','69'],['good','fair','fair']],[['68','59','71'],['fair','fair','good']],16],
// filler_easy
[[['58','62','75'],['fair','fair','good']],[['87','76','91'],['excellent','good','excellent']],17],
[[['68','77','83'],['fair','good','good']],[['89','90','94'],['excellent','excellent','excellent']],18],
[[['56','62','66'],['fair','fair','fair']],[['67','79','83'],['fair','good','good']],19],
[[['67','73','58'],['fair','good','fair']],[['89','84','70'],['excellent','good','good']],20],

]

var shuffle_product_pair = function(product_pair) {
  return [
    shuffle_product(product_pair)
  ]
}


var shuffle_product = function(product_pair) {
  // Shuffle the order of outcomes and probabilities
  // within a single gamble
  var product_a = product_pair[0]
  var product_b = product_pair[1]

  // Extract outcomes and probabilities from the gamble
  var numbers_a = product_a[0]
  var labels_a = product_a[1]
  var numbers_b = product_b[0]
  var labels_b = product_b[1]

  // Create a *shuffled* array containing the numbers from 0..(n-1),
  // where n is the number of outcomes in the gamble.
  var order = _.shuffle(_.range(3))

  // Create a function can can take an array and a
  // specified order, and reorder the array accordingly.
  // For example, given an array ['A', 'B', 'C'] and
  // an order [2, 0, 1], return ['C', 'A', 'B'].
  var reorder = function(list, order) {
    return order.map(function(i) {
      return list[i]
    })
  }

  // Apply the random ordering generated above
  // to the outcomes and probabilities
  var shuffled_products = [
    reorder(numbers_a, order),
    reorder(labels_a, order),
    reorder(numbers_b, order),
    reorder(labels_b, order)
  ]

  // Return the result
  return shuffled_products
}


productpair_nummer = product_order_shuffled[count]
product_pair = products_data[productpair_nummer];



var product_source = product_pair[2]
var product_pair = product_pair.slice(0,2)
var product_pair = _.shuffle(product_pair)
var product_shuffled = shuffle_product_pair(product_pair)
var product_a_sum = [product_shuffled[0][0],product_shuffled[0][1]]
var product_b_sum = [product_shuffled[0][2],product_shuffled[0][3]]

var number_A_r1 = product_shuffled[0][0][0]
var number_A_r2 = product_shuffled[0][0][1]
var number_A_r3 = product_shuffled[0][0][2]
var label_A_r1 = product_shuffled[0][1][0]
var label_A_r2 = product_shuffled[0][1][1]
var label_A_r3 = product_shuffled[0][1][2]

var number_B_r1 = product_shuffled[0][2][0]
var number_B_r2 = product_shuffled[0][2][1]
var number_B_r3 = product_shuffled[0][2][2]
var label_B_r1 = product_shuffled[0][3][0]
var label_B_r2 = product_shuffled[0][3][1]
var label_B_r3 = product_shuffled[0][3][2]


document.getElementById('number_A_r1').innerHTML = number_A_r1
document.getElementById('number_A_r2').innerHTML = number_A_r2
document.getElementById('number_A_r3').innerHTML = number_A_r3
document.getElementById('label_A_r1').innerHTML = label_A_r1
document.getElementById('label_A_r2').innerHTML = label_A_r2
document.getElementById('label_A_r3').innerHTML = label_A_r3
document.getElementById('number_B_r1').innerHTML = number_B_r1
document.getElementById('number_B_r2').innerHTML = number_B_r2
document.getElementById('number_B_r3').innerHTML = number_B_r3
document.getElementById('label_B_r1').innerHTML = label_B_r1
document.getElementById('label_B_r2').innerHTML = label_B_r2
document.getElementById('label_B_r3').innerHTML = label_B_r3




////// Product A

////Reviewer 1

// r1_n_A
show_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_A")
      ds.set("time", start)
}

show_content_r1_n_A = function() {
    divTest = document.getElementById('box_r1_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r1_l_A
show_r1_l_A = function() {
    divTest = document.getElementById('box_r1_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_l_A")
      ds.set("time", start)
}

show_content_r1_l_A = function() {
    divTest = document.getElementById('box_r1_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_A
show_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_A")
      ds.set("time", start)
}

show_content_r2_n_A = function() {
    divTest = document.getElementById('box_r2_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r2_l_A
show_r2_l_A = function() {
    divTest = document.getElementById('box_r2_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_l_A")
      ds.set("time", start)
}

show_content_r2_l_A = function() {
    divTest = document.getElementById('box_r2_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_A
show_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_A")
      ds.set("time", start)
}

show_content_r3_n_A = function() {
    divTest = document.getElementById('box_r3_n_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r3_l_A
show_r3_l_A = function() {
    divTest = document.getElementById('box_r3_l_A');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_l_A")
      ds.set("time", start)
}

show_content_r3_l_A = function() {
    divTest = document.getElementById('box_r3_l_A');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////// Product B

////Reviewer 1

// r1_n_B
show_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_n_B")
      ds.set("time", start)
}

show_content_r1_n_B = function() {
    divTest = document.getElementById('box_r1_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r1_l_B
show_r1_l_B = function() {
    divTest = document.getElementById('box_r1_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r1_l_B")
      ds.set("time", start)
}

show_content_r1_l_B = function() {
    divTest = document.getElementById('box_r1_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

////Reviewer 2

// r2_n_B
show_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_n_B")
      ds.set("time", start)
}

show_content_r2_n_B = function() {
    divTest = document.getElementById('box_r2_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r2_l_B
show_r2_l_B = function() {
    divTest = document.getElementById('box_r2_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r2_l_B")
      ds.set("time", start)
}

show_content_r2_l_B = function() {
    divTest = document.getElementById('box_r2_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

//// Reviewer 3

// r3_n_B
show_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_n_B")
      ds.set("time", start)
}

show_content_r3_n_B = function() {
    divTest = document.getElementById('box_r3_n_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}

// r3_l_B
show_r3_l_B = function() {
    divTest = document.getElementById('box_r3_l_B');
      divTest.style.backgroundColor = "transparent";
      var start = performance.now();
      i = i + 1;
      box_number = "box" + i ;
      ds.set(box_number, "box_r3_l_B")
      ds.set("time", start)
}

show_content_r3_l_B = function() {
    divTest = document.getElementById('box_r3_l_B');
      divTest.style.backgroundColor = "lightblue";
      time = ds.get("time")
      var elapsed = performance.now() - time;
      time_number = "time" + i ;
      ds.set(time_number, elapsed)
}


// Buttons

choice_for_A = function(x) {
 ds.set('choice', 'A')
};

choice_for_B = function(x) {
 ds.set('choice', 'B')
};

// Data storage

ds.set('product_a_sum', JSON.stringify(product_a_sum))
ds.set('product_b_sum', JSON.stringify(product_b_sum))
ds.set('product_source', product_source)









},
              "end": function anonymous() {
const ds = this.options.datastore /* Erspart lästige Schreibarbeit */
ds.get('count')

count = count + 1

ds.set('count', count)
}
            },
            "title": "Mouselab_page",
            "content": "\u003Cmain class=\"displaysize\"\u003E\r\n\u003C!--\u003Ch1 class=\"product_name\"\u003E ${parameters.product} \u003C\u002Fh1\u003E--\u003E\r\n\r\n\u003Cdiv class=\"content-horizontal-center \"\u003E\r\n\u003C!-- Table for both tables --\u003E\r\n\u003Ctable class=\"table-plain overall_table\"\u003E\r\n    \u003Ctd  class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product A --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\" colspan=\"2\"\u003E\r\n      \u003Cp class=\"p_product\"\u003E${parameters.product} A\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Label\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd  class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_l_A\" onmouseenter=\"show_r1_l_A()\" onmouseleave=\"show_content_r1_l_A()\"\u003E\r\n            \u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_l_A\" \u003E\r\n  \u003Cp id=\"label_A_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_A\" onmouseenter=\"show_r1_n_A()\" onmouseleave=\"show_content_r1_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_A\" \u003E\r\n  \u003Cp id=\"number_A_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_l_A\" onmouseenter=\"show_r2_l_A()\" onmouseleave=\"show_content_r2_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_l_A\" \u003E\r\n  \u003Cp id=\"label_A_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_A\" onmouseenter=\"show_r2_n_A()\" onmouseleave=\"show_content_r2_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_A\" \u003E\r\n  \u003Cp id=\"number_A_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_l_A\" onmouseenter=\"show_r3_l_A()\" onmouseleave=\"show_content_r3_l_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_l_A\" \u003E\u003Cp id=\"label_A_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_A\" onmouseenter=\"show_r3_n_A()\" onmouseleave=\"show_content_r3_n_A()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_A\" \u003E\r\n  \u003Cp id=\"number_A_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\" colspan=\"2\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceA\" onclick=\"choice_for_A()\"\u003E${parameters.product} A\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product A --\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_gap\"\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003Ctd class=\"overall_table_td\"\u003E\r\n      \u003C!-- Table for Product B --\u003E\r\n      \u003Ctable class=\"table-plain\"\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"product_A_B\" colspan=\"2\"\u003E\r\n      \u003Cp class=\"p_product\"\u003E${parameters.product} B\u003C\u002Fp\u003E\r\n      \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Label\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td_points_labels\"\u003E\r\n            Points\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 1\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_l_B\" onmouseenter=\"show_r1_l_B()\" onmouseleave=\"show_content_r1_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_l_B\" \u003E\r\n  \u003Cp id=\"label_B_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r1_n_B\" onmouseenter=\"show_r1_n_B()\" onmouseleave=\"show_content_r1_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r1_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r1\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 2\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_l_B\" onmouseenter=\"show_r2_l_B()\" onmouseleave=\"show_content_r2_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_l_B\" \u003E\r\n  \u003Cp id=\"label_B_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r2_n_B\" onmouseenter=\"show_r2_n_B()\" onmouseleave=\"show_content_r2_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r2_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r2\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr\u003E\r\n          \u003Ctd class=\"ml_td_reviewer\"\u003E\r\n            Reviewer 3\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_l_B\" onmouseenter=\"show_r3_l_B()\" onmouseleave=\"show_content_r3_l_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_l_B\" \u003E\r\n  \u003Cp id=\"label_B_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"ml_td\"\u003E\r\n            \u003Cdiv class=\"cover mouselab_box\" id=\"box_r3_n_B\" onmouseenter=\"show_r3_n_B()\" onmouseleave=\"show_content_r3_n_B()\"\u003E\u003C\u002Fdiv\u003E\r\n\u003Cdiv class=\"content mouselab_box\" id=\"content_r3_n_B\" \u003E\r\n  \u003Cp id=\"number_B_r3\" class=\"p_content\"\u003E\u003C\u002Fp\u003E\r\n\u003C\u002Fdiv\u003E\r\n          \u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003Ctr class=\"button_row\"\u003E\r\n          \u003Ctd\u003E\r\n            \u003C\u002Ftd\u003E\r\n          \u003Ctd class=\"overall_table_td buttonsAB\" colspan=\"2\"\u003E\r\n      \u003Cbutton type=\"submit\" class=\"choiceB\" onclick=\"choice_for_B()\"\u003E${parameters.product} B\u003C\u002Fbutton\u003E\r\n    \u003C\u002Ftd\u003E\r\n    \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n        \u003C!-- End Table for Product B --\u003E\r\n\u003C\u002Ftd\u003E\r\n        \u003C\u002Ftr\u003E\r\n        \u003C\u002Ftable\u003E\r\n\r\n\r\n\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n",
            "tardy": true,
            "scrollTop": true
          },
          {
            "type": "lab.html.Screen",
            "files": {},
            "parameters": {},
            "responses": {
              "click button.continue": "click"
            },
            "messageHandlers": {
              "run": function anonymous() {
const ds = this.options.datastore /* Erspart lästige Schreibarbeit */
ds.get('count')
document.getElementById('completed').innerHTML = count
},
              "after:end": function anonymous() {
i = 0;
y = 0;
}
            },
            "title": "interlude",
            "content": "\u003Cmain class=\"interlude\"\u003E\r\n\u003Cdiv class=\"content-horizontal-center content-vertical-center\" \u003E\r\n\r\n\u003Cdiv class=\"interlude content-horizontal-center content-vertical-center\" style=\"display: block;\"\u003E\r\n  \u003Cdiv class=\"height_250px content-horizontal-center content-vertical-center\"\u003E\r\n  \u003Cp class=\"content-horizontal-center\"\u003EYou have made&nbsp;\u003Cspan id=\"completed\"\u003E\u003C\u002Fspan\u003E&nbsp;out of 20 choices. \u003C\u002Fp\u003E\r\n  \u003C\u002Fdiv\u003E\r\n     \u003Cdiv class=\"div_button_interlude content-vertical-center content-horizontal-center\"\u003E \u003Cbutton type=\"submit\" class=\"continue\"\u003EContinue\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\r\n    \u003C\u002Fdiv\u003E\r\n\r\n\u003C\u002Fdiv\u003E\r\n\u003C\u002Fmain\u003E\r\n\r\n\r\n\r\n\r\n"
          }
        ]
      }
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "click button.continue": "click"
      },
      "messageHandlers": {},
      "title": "End_main_task",
      "content": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"div_intro\"\u003E\r\n\r\n    \u003Ch2\u003EEnd of choice task\u003C\u002Fh2\u003E\r\n    \u003Cp class=\"intro\"\u003E Thank you. You have finished the choice task. In the following, we would ask you to answer a few questions regarding the choice task.\u003C\u002Fp\u003E\r\n\r\n  \r\n\r\n\u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Ffooter\u003E\r\n"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cmain\u003E\n  \u003Cdiv class=\"text-left\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EQuestions regarding ratings\u003C\u002Fh2\u003E\n    \u003Cp\u003EFor each of the following questions, please indicate what describes your feelings best. Please use your mouse to move the pointer on the line to indicate how good or bad a rating feels for you.\u003Cbr\u003E\u003Cbr\u003E\u003C\u002Fp\u003E\n\n\n\u003Cp class=\"intro margin_narrow\"\u003EIf a product is rated as \u003Cb\u003E95 points\u003C\u002Fb\u003E, how good or bad does that feel for you?\u003Cbr\u003E\u003C\u002Fp\u003E\n\u003Cdiv class=\"content-horizontal-center\"\u003E\n    \u003Ctable class=\"table-plain table_radio_buttons\"\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan=\"6\" style=\"text-align: center\"\u003E\n          \u003Cinput name =\"affect1\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"affect1\" required\u003E\n          \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr style=\"height: 40px\"\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very bad \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very good \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n    \u003C\u002Fdiv\u003E\n\n\n\n\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Affect_numbers95"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cmain\u003E\n  \u003Cdiv class=\"text-left\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EQuestions regarding ratings\u003C\u002Fh2\u003E\n    \n\n\n\u003Cp class=\"intro margin_narrow\"\u003EIf a product is rated as \u003Cb\u003E85 points\u003C\u002Fb\u003E, how good or bad does that feel for you?\u003C\u002Fp\u003E\n\u003Cdiv class=\"content-horizontal-center\"\u003E\n    \u003Ctable class=\"table-plain table_radio_buttons\"\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan=\"6\" style=\"text-align: center\"\u003E\n          \u003Cinput name =\"affect2\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"affect2\"\u003E\n          \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr style=\"height: 40px\"\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very bad \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very good \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n    \u003C\u002Fdiv\u003E\n\n\n\n\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Affect_numbers85"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cmain\u003E\n  \u003Cdiv class=\"text-left\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EQuestions regarding ratings\u003C\u002Fh2\u003E\n   \n\n\n\n    \u003Cp class=\"intro margin_narrow\"\u003EIf a product is rated as \u003Cb\u003E75 points\u003C\u002Fb\u003E, how good or bad does that feel for you?\u003C\u002Fp\u003E\n\u003Cdiv class=\"content-horizontal-center\"\u003E\n    \u003Ctable class=\"table-plain table_radio_buttons\"\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan=\"6\" style=\"text-align: center\"\u003E\n          \u003Cinput name =\"affect3\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"affect3\"\u003E\n          \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr style=\"height: 40px\"\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very bad \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very good \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n    \u003C\u002Fdiv\u003E\n\n\n\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Affect_numbers75"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cmain\u003E\n  \u003Cdiv class=\"text-left\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EQuestions regarding ratings\u003C\u002Fh2\u003E\n    \n\n\n    \u003Cp class=\"intro margin_narrow\"\u003EIf a product is rated as \u003Cb\u003E65 points\u003C\u002Fb\u003E, how good or bad does that feel for you?\u003C\u002Fp\u003E\n\u003Cdiv class=\"content-horizontal-center\"\u003E\n    \u003Ctable class=\"table-plain table_radio_buttons\"\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan=\"6\" style=\"text-align: center\"\u003E\n          \u003Cinput name =\"affect4\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"affect4\"\u003E\n          \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr style=\"height: 40px\"\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very bad \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very good \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n    \u003C\u002Fdiv\u003E\n\n\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Affect_numbers65"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cmain\u003E\n  \u003Cdiv class=\"text-left\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EQuestions regarding ratings\u003C\u002Fh2\u003E\n   \n\u003Cp class=\"intro margin_narrow\"\u003EIf a product is rated as \u003Cb\u003E55 points\u003C\u002Fb\u003E, how good or bad does that feel for you?\u003Cbr\u003E\u003C\u002Fp\u003E\n\u003Cdiv class=\"content-horizontal-center\"\u003E\n    \u003Ctable class=\"table-plain table_radio_buttons\"\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan=\"6\" style=\"text-align: center\"\u003E\n          \u003Cinput name =\"affect5\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"affect5\"\u003E\n          \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr style=\"height: 40px\"\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very bad \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very good \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n    \u003C\u002Fdiv\u003E\n\n\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {},
      "title": "Affect_numbers55"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cmain\u003E\n  \u003Cdiv class=\"text-left\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EQuestions regarding ratings\u003C\u002Fh2\u003E\n\n\n\u003Cp class=\"intro margin_narrow\"\u003EIf a product is rated as \u003Cb\u003Eexcellent\u003C\u002Fb\u003E, how good or bad does that feel for you?\u003Cbr\u003E\u003C\u002Fp\u003E\n\u003Cdiv class=\"content-horizontal-center\"\u003E\n    \u003Ctable class=\"table-plain table_radio_buttons\"\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan=\"6\" style=\"text-align: center\"\u003E\n          \u003Cinput name =\"affect6\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"affect6\"\u003E\n          \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr style=\"height: 40px\"\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very bad \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very good \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n    \u003C\u002Fdiv\u003E\n\n\n\n\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {
const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 3 & condition != 4)


}
      },
      "title": "Affect_labels_excellent"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cmain\u003E\n  \u003Cdiv class=\"text-left\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EQuestions regarding ratings\u003C\u002Fh2\u003E\n\n\n\n\u003Cp class=\"intro margin_narrow\"\u003EIf a product is rated as \u003Cb\u003Egood\u003C\u002Fb\u003E, how good or bad does that feel for you?\u003C\u002Fp\u003E\n\u003Cdiv class=\"content-horizontal-center\"\u003E\n    \u003Ctable class=\"table-plain table_radio_buttons\"\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan=\"6\" style=\"text-align: center\"\u003E\n          \u003Cinput name =\"affect7\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"affect7\"\u003E\n          \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr style=\"height: 40px\"\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very bad \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very good \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n    \u003C\u002Fdiv\u003E\n\n\n\n\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {
const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 3 & condition != 4)


}
      },
      "title": "Affect_labels_good"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cmain\u003E\n  \u003Cdiv class=\"text-left\"\u003E\n    \u003Ch2 class=\"text-center\"\u003EQuestions regarding ratings\u003C\u002Fh2\u003E\n\n\n\n\n\n    \u003Cp class=\"intro margin_narrow\"\u003EIf a product is rated as \u003Cb\u003Efair\u003C\u002Fb\u003E, how good or bad does that feel for you?\u003C\u002Fp\u003E\n\u003Cdiv class=\"content-horizontal-center\"\u003E\n    \u003Ctable class=\"table-plain table_radio_buttons\"\u003E\n      \u003Ctr\u003E\n        \u003Ctd colspan=\"6\" style=\"text-align: center\"\u003E\n          \u003Cinput name =\"affect8\" type=\"range\" min=\"1\" max=\"100\" value=\"50\" class=\"slider\" id=\"affect8\"\u003E\n          \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n      \u003Ctr style=\"height: 40px\"\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very bad \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n         \n        \u003C\u002Ftd\u003E\n        \u003Ctd class=\"td_affect_radio\"\u003E\n          \u003Cp class=\"affect_scale_anchors\"\u003E very good \u003C\u002Fp\u003E\n        \u003C\u002Ftd\u003E\n      \u003C\u002Ftr\u003E\n    \u003C\u002Ftable\u003E\n    \u003C\u002Fdiv\u003E\n\n\n\n\n\n  \u003C\u002Fdiv\u003E\n\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"content-vertical-center content-horizontal-right\"\u003E\n  \u003Cdiv\u003E\n    \u003Cbutton type=\"submit\" class=\"continue\"\u003Econtinue &rarr;\u003C\u002Fbutton\u003E\n  \u003C\u002Fdiv\u003E\n\u003C\u002Ffooter\u003E\n\u003C\u002Fform\u003E\n",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "before:prepare": function anonymous() {
const ds = this.options.datastore
condition = ds.get('condition')
this.options.skip = (condition != 3 & condition != 4)


}
      },
      "title": "Affect_labels_fair"
    },
    {
      "type": "lab.html.Screen",
      "files": {},
      "parameters": {},
      "responses": {
        "": ""
      },
      "messageHandlers": {
        "run": function anonymous() {
const ds = this.options.datastore 

workerid = ds.get('workerid')
a = ds.get('a')
b = ds.get('b')
c = ds.get('c')
tp_a = ds.get('tp_a')
tp_b = ds.get('tp_b')
tp_c = ds.get('tp_c')


// Study link with attributes which are passed along
link_secondpart = "https://osu.az1.qualtrics.com/jfe/form/SV_74hljQz3ay6Orsh" + "?workerid="+ workerid +"&a=" + a +"&b=" + b +"&c=" + c +"&tp_a=" + tp_a +"&tp_b=" + tp_b +"&tp_c=" + tp_c



startsecondpart = function(x) {
 window.open(link_secondpart,"_self")
};



}
      },
      "title": "Last_page",
      "content": "\u003Cheader class=\"header_logo\"\u003E\r\n  \u003Cdiv\u003E\r\n    \u003Cimg src=\"https:\u002F\u002Fkevintiede.com\u002Fmouselab\u002Fstatic\u002Flogo_osu.jpg\" alt=\"Logo Ohio State University\" class=\"logo_osu\"\u003E\r\n  \u003C\u002Fdiv\u003E\r\n\u003C\u002Fheader\u003E\r\n\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\r\n  \u003Cdiv class=\"div_intro\"\u003E\r\n\r\n    \u003Ch2\u003EEnd of first part\u003C\u002Fh2\u003E\r\n\r\n    \u003Cp\u003E Thank you for your responses. You are done with the first part of the study. To continue with the second part, please klick the button below. \u003C\u002Fp\u003E\u003Cp\u003E You will be forwarded to a Qualtrics survey. At the end of the second part, you will receive the completion code.\r\n \u003C\u002Fp\u003E\r\n\r\n\r\n \u003Cbutton type=\"submit\" class=\"gotosecondpart\" onclick=\"startsecondpart()\"\u003EGo to second part\u003C\u002Fbutton\u003E \u003C!-- Button which will lead participants to Part 2 of the study--\u003E\r\n      \r\n\r\n\r\n\r\n\r\n \u003C\u002Fdiv\u003E\r\n  \u003C\u002Fmain\u003E\r\n  ",
      "timeout": "300",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()