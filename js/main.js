        document.addEventListener('DOMContentLoaded', function() {
            const addTaskTrigger = document.getElementsByClassName('addTask-trigger')[0];
            const addTaskTarget = document.getElementsByClassName('addTask-target')[0];
            const addTaskValue = document.getElementsByClassName('addTask-value')[0];  
            let nextId = 0;

        const addTask = (task,id) => {
            const tableItem = document.createElement('tr');
            const addButtonTd = document.createElement('td');
            const addButton = document.createElement('button');
            const removeButtonTd = document.createElement('td');
            const removeButton = document.createElement('button');
            addButton.innerText = '作業中';
            removeButton.innerText = '削除';
            const idSpan = document.createElement('span');
            idSpan.innerText = id;
            const idSpanTd = document.createElement('td');
            idSpanTd.append(idSpan);

            const taskSpan = document.createElement('span');
            const taskSpanTd = document.createElement('td');
            taskSpan.innerText = task;
            taskSpanTd.append(taskSpan);

            addButtonTd.append(addButton);
            removeButtonTd.append(removeButton);

            tableItem.append(idSpanTd);
            tableItem.append(taskSpanTd);
            tableItem.append(addButtonTd);
            tableItem.append(removeButtonTd);

            addTaskTarget.appendChild(tableItem);
      };
        addTaskTrigger.addEventListener('click', event => {
            const task = addTaskValue.value;
            addTask(task,nextId ++);
            addTaskValue.value = '';
  });
});