"use strict";
window.onload = function () {
    document.getElementById("base").focus();
};

let salary1, salary2, MMdd, month, day;
let result = "";

function validateForm(event) {
    const base = parseFloat(document.getElementById("base").value);
    const subsidy = parseFloat(document.getElementById("subsidy").value);
    const h_salary = (base + subsidy) / 21.75 / 8;
    const hour = parseFloat(document.getElementById("hour").value);
    salary1 = hour * h_salary;
    salary2 = hour * 11.9 * 2;
    MMdd = document.getElementById("MMdd").value;
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    month = parseInt(MMdd.split(".")[0]);
    day = parseInt(MMdd.split(".")[1]);
    const maxDays = new Date(currentYear, month, 0).getDate();

    event.preventDefault();

    if (hour <= 0 || hour > 24) {
        alert("请假时长不合理");
        return false;
    }
    if (
        !/^\d{2}\.\d{2}$/.test(MMdd) ||
        month !== currentMonth ||
        day > maxDays
    ) {
        alert(result = "日期格式不正确");
        return false;
    }
    return true;
}

function checkLeave() {
    if (validateForm(event)) {
        if (day >= 15) {
            const leave = prompt("本月15号及其之前是否有过请假行为【y/n】？");
            if (leave === "y" || leave === "Y") {
                salary1 += 120;
            }
        } else {
            salary1 += 60;
        }
        if (salary1 > salary2) {
            result = "建议调休";
        } else {
            result = "建议请假";
        }

        const dialogBox = document.getElementById("dialog-box");
        const dialogTitle = document.getElementById("dialog-title");
        const dialogMessage = document.getElementById("dialog-message");
        const dialogButton = document.getElementById("dialog-button");
        dialogTitle.textContent = "建议";
        dialogMessage.textContent = result;
        dialogBox.style.display = "block";

        dialogButton.addEventListener("click", function () {
            dialogBox.style.display = "none";
        });
    }
}