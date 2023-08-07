## 4/Aug/2023

=> error/problem: data vanishes after page reload/refresh
=> sol. => localStorage related concept

````javascript
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data"); //wrote localContainer instead of listContainer (bcz just coping)
}```
````
