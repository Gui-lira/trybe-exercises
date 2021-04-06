function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  let ulDays = document.querySelector('#days')
  console.log(ulDays)
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  for (let days of dezDaysList) {
      let dayLi = document.createElement('li');
      dayLi.innerText = days;
      dayLi.className = 'day';
      ulDays.appendChild(dayLi);
      if (days === 24 || days === 25 || days === 31) {
          dayLi.classList.add('holiday')
      }; 
      if (days === 4 || days === 11 || days === 18 || days === 25) {
          dayLi.classList.add('friday')
      };

  };

  function holidays(str) {
      let button = document.createElement('button');
      button.id = 'btn-holiday';
      button.innerHTML = str;
      document.querySelector('.buttons-container').appendChild(button);
  };
  holidays('Feriados');
  let buttonH = document.querySelector('#btn-holiday');
  buttonH.addEventListener('click', function(){
      let list = document.querySelectorAll('.holiday');
      for (let itens of list) {
          if (itens.style.backgroundColor === 'yellow') {
            itens.style.backgroundColor = 'rgb(238,238,238)'
          }
          else  {
            itens.style.backgroundColor = 'yellow'
          }
      }
  });
  function fridays(str) {
    let button = document.createElement('button');
    button.id = 'btn-friday';
    button.innerHTML = str;
    document.querySelector('.buttons-container').appendChild(button);
};
fridays('Sexta-feira');

let buttonF = document.querySelector('#btn-friday');
  buttonF.addEventListener('click', function(){
      let list = document.querySelectorAll('.friday');
      for (let itens of list) {
          if (itens.style.backgroundColor != 'red') {
            itens.style.backgroundColor = 'red'
          }
          else  {
            itens.style.backgroundColor = 'rgb(238,238,238)'
          }
      }
});
ulDays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px'
});
ulDays.addEventListener('mouseout',function(event) {
    event.target.style.fontSize = '20px'
});
function task(str) {
    let task = document.createElement('span');
    task.innerText = str;
    document.querySelector('.my-tasks').appendChild(task);
};
task('estudar');

function divTask(str) {
    let divTask = document.createElement('div');
    divTask.style.backgroundColor = str;
    divTask.className = 'task';
    document.querySelector('.my-tasks').appendChild(divTask)
};
divTask('blue');
let divTaskItem = document.querySelector('.task');
divTaskItem.addEventListener('click', function() {
    if (divTaskItem.classList.contains('selected')) {
        divTaskItem.classList.remove('selected')
    }
    else {
        divTaskItem.classList.add('selected')
    }
});
let taskDiv = document.querySelector('.task');
let taskColor = taskDiv.style.backgroundColor;
let selectedTask = document.getElementsByClassName('task selected');
ulDays.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor != taskColor) {
        let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    }
    else {
        event.target.style.color = 'rgb(119,119,119)'
    }
})