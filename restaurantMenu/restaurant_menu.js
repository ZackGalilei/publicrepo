const breakfastMenu = ['Pancakes - 12$', 'Eggs Benedict - 24,99$', 'Oatmeal 100$', 'Frittata 5$'];
const mainCourseMenu = ['Steak - 600$', 'Pasta - 9$', 'Burger - 80$', 'Salmon - 69$'];
const dessertMenu = ['Cake - 45$', 'Ice Cream 8$', 'Pudding - 150$', 'Fruit Salad - 9,99$'];
    const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
        let mainCourseItem = '';
        mainCourseMenu.forEach((item, index) => {
        mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
        document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
        let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;