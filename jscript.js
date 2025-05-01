let students = [];
    let table = document.querySelector("table");
    let nameInput = document.getElementsByName("form")[0];
    let gradeInput = document.getElementsByName("form")[1];
    let span = document.getElementById("span");
    let img = document.getElementById("slideshowImg");
    let count = 1;
    let slideInterval;

    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    function ErrMsg(msg) {
      span.innerText = msg;
      span.style.display = "inline";
      setTimeout(() => (span.style.display = "none"), 3000);
    }

    function addToTable() {
      let name = capitalize(nameInput.value.trim());
      let grade = gradeInput.value.trim();

      if (name === "") {
        ErrMsg("Name is required");
        return;
      }

      if (students.some((s) => s.name === name)) {
        ErrMsg("Repeated Name")    
        return;
      }

      if (isNaN(grade) || grade < 0 || grade > 100) {
        ErrMsg("Grade must be between 0 and 100");
        return;
      }

      students.push({ name, grade: Number(grade) });
    //   let tr = document.createElement("tr");

    //   let td = document.createElement("td");
    //   td.innerText = name;
    //   tr.appendChild(td);
      
    //   let td1 = document.createElement("td");
    //   td1.innerText = grade;
    //   tr.appendChild(td1);
    //   table.tBodies[0].appendChild(tr);
      

    TableCalling();
    }

    function TableCalling(data = students) {
        const tbody = table.tBodies[0];
        while (tbody.firstChild) tbody.removeChild(tbody.firstChild);
      
        data.forEach((student, index) => {
          let tr = document.createElement("tr");

          if (student.grade < 60) {
            tr.className = "low";
          } else if (student.grade <= 75) {
            tr.className = "mid";
          } else {
            tr.className = "high";
          }
      
          let tdName = document.createElement("td");
          tdName.innerText = student.name;
          tr.appendChild(tdName);
      
          let tdGrade = document.createElement("td");
          tdGrade.innerText = student.grade;
          tr.appendChild(tdGrade);
      
          let tdDelete = document.createElement("td");
          let deleteBtn = document.createElement("button");
          deleteBtn.innerText = "Delete";
          deleteBtn.onclick = () => {
            students.splice(index, 1); 
            TableCalling();       
          };
          tdDelete.appendChild(deleteBtn);
          tr.appendChild(tdDelete);
      
          tbody.appendChild(tr);
        });
      }
      

    // function renderTable(data = students) {
    //   table.tBodies[0].innerHTML = "";
    //   data.forEach((student) => {
    //     let tr = document.createElement("tr");
    //     tr.innerText = `<td>${student.name}</td><td>${student.grade}</td>`;
    //     table.tBodies[0].appendChild(tr);
    //   });
    // }

    document.getElementById("btn").onclick = addToTable;
    document.getElementById("filter").onchange = function () {
      if (this.value === "all") TableCalling();
      else if (this.value === "passed")
        TableCalling(students.filter((s) => s.grade >= 60));
      else if (this.value === "failed")
        TableCalling(students.filter((s) => s.grade < 60));
    };

    document.getElementById("sort").onchange = function () {
      let sorted = [...students];
      if (this.value === "name") sorted.sort((a, b) => a.name.localeCompare(b.name));
      else if (this.value === "grade") sorted.sort((a, b) => b.grade - a.grade);
      TableCalling(sorted);
    };

    document.getElementById("rightBtn").onclick = () => {
      count++;
      if (count > 3) count = 1;
      img.src = `images/${count}.jpg`;
    };

    document.getElementById("leftBtn").onclick = () => {
      count--;
      if (count < 1) count = 3;
      img.src = `images/${count}.jpg`;
    };

    document.getElementById("startBtn").onclick = () => {
      if (slideInterval === null){
        slideInterval = setInterval(() => {
          count++;
          if (count > 3) count = 1;
          img.src = `images/${count}.jpg`;
        }, 1500);
      }
    };

    document.getElementById("stopBtn").onclick = () => {
      clearInterval(slideInterval);
      slideInterval = null;
    };