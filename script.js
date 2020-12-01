var listMarkup = "";
data.forEach(item => listMarkup += `<li>${item.name}</li>`);
document.getElementById("dynamicList").innerHTML = listMarkup;