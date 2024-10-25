window.onload = function() {
    let checkBox_1 = document.getElementById('check_1');
    let checkBox_2 = document.getElementById('check_2');
    let checkBox_3 = document.getElementById('check_3');

    let checked_1 = false;
    let checked_2 = false;
    let checked_3 = false;

    function checkAll() {
        if (checked_1 && checked_2 && checked_3) {
            console.log("All checkboxes are checked!");
        } else {
            console.log("Doei");
        }
    }

    checkBox_1.addEventListener('click', function() {
        checked_1 = checkBox_1.checked;
        checkAll();
    });

    checkBox_2.addEventListener('click', function() {
        checked_2 = checkBox_2.checked;
        checkAll();
    });

    checkBox_3.addEventListener('click', function() {
        checked_3 = checkBox_3.checked;
        checkAll();
    });
};
