function addToHtml(myData) {
  let p = document.createElement("p");
  p.innerHTML = myData;
  document.querySelector("body").append(p);
}

let date1 = new Object();

date1.day = 25;
date1.month = 12;
date1.year = 2020;

let date2 = new Object();

date2.day = 25;
date2.month = 12;
date2.year = 2020;

addToHtml("date1");
addToHtml(date1.day);
addToHtml(date1.month);
addToHtml(date1.year);
addToHtml("date2");
addToHtml(date2.day);
addToHtml(date2.month);
addToHtml(date2.year);

addToHtml("test1 <" + " " + (date1 < date2));
addToHtml("test2 >" + " " + (date1 > date2));
addToHtml("test3 <=" + " " + (date1 <= date2));
addToHtml("test4 >=" + " " + (date1 >= date2));
// avec les comparateur == et != nous devons comparer chaque key de l'object
addToHtml(
  "test5 ==" +
    " " +
    (date1.day == date2.day &&
      date1.month == date2.month &&
      date1.year == date2.year)
);
addToHtml(
  "test6 !=" +
    " " +
    (date1.day != date2.day &&
      date1.month != date2.month &&
      date1.year != date2.year)
);
