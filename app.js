(function () {
  
  var $ = function (domId) {
    return document.getElementById(domId);
  };
 
  window.app = {};
 
  app.load = function () {
    $('toggle_tasks').addEventListener("click", app.tasks.toggleList);
  };
 
  app.toggleElement = function (el) {
    if (el.style.display != "none") {
      el.style.display = "none";
    }
    else {
      el.style.display = "block";
    }
  };
  
  app.alive = function () {
    console.log("THE DOM LIVES! MUHAHAH");
  };
  
  app.tasks = {
    
    toggleList: function (ev) {
      app.toggleElement($('tasks'));
    }
    
  };
 
}());

window.addEventListener("load", app.load);