import $ from "jquery" 
const rootApp = document.getElementById("root"); rootApp.innerHTML = '<button>ON</button>';
$(document).ready(function(){
  $("#root").click(function(){ 
    if(rootApp.innerHTML = '<button>ON</button>'){
      rootApp.innerHTML = '<button>OFF</button>';
    }else{
      rootApp.innerHTML = '<button>ON</button>';
    }
  });
 });