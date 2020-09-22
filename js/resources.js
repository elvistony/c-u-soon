

function search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("src");
  filter = input.value.toUpperCase();
  table = document.getElementById("names");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

function csvJSON(csv){
  var lines=csv.split("\n");
  var result = [];
  var headers=lines[0].split(",");
  for(var i=1;i<lines.length;i++){
	  var obj = {};
	  var currentline=lines[i].split(",");
	  for(var j=0;j<headers.length;j++){
      head = headers[j].substring(1, headers[j].length-1);
		  obj[head] = currentline[j].substring(1, currentline[j].length-1);
	  }
	  result.push(obj);
  }
  return result; //JSON
}

let names;

function FetchTimeTable(){
  var request = new XMLHttpRequest();
    request.open('GET',"https://docs.google.com/spreadsheets/d/1gHmX4TFn9i7zn3IeQn9Bg2u2n_WPul4MEEPWDXGcpJU/gviz/tq?tqx=out:csv&sheet=TimeTable", true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
          var data = csvJSON(request.responseText)
          console.log(data);
          names=data;
          generateGallery()
        }
    }
}

FetchTimeTable()

function generateGallery(){
  for (const student of names) {
    
  }
}
//GetNames()
