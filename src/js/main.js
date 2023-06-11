'use strict';

let btn = document.querySelector(".block_btn"),
    name = document.querySelector(".name"),
    surname = document.querySelector(".surname"),
    nameInput = document.querySelector("#name-input"),

    budget = document.querySelector(".budget"),
    percent = document.querySelector(".percent"),
    time = document.querySelector(".time"),

    percentMonth = document.querySelector("#percentMonth-input"),
    percentForTime = document.querySelector("#persent-input"),
    resForTime = document.querySelector("#deposit-input"),

    select = document.querySelector(".block_select"),
    block2 = document.querySelector(".block2"),
    addCheck =document.querySelector("#block_check"),
    addMoney = document.querySelector(".add-money");


function dohodForMontch(summa, percent) {
    return +summa / 100 * +percent / 12;
};


addCheck.addEventListener('click', function(){
    if (appDate.check == true) {
        appDate.check = false;
        addMoney.disabled = true;
        addMoney.value = null;
    } else {
        appDate.check = true;
        addMoney.disabled = false;
    };
});


btn.addEventListener('click', function () {
    nameInput.textContent = name.value + " " + surname.value;


    let budgetValue = +budget.value,
        perValue = +percent.value,
        timeValue = +time.value;


    if (select.value == "Ежемесячно") {
        let budg = budgetValue;
        for (let i = 1; i < timeValue + 1; i++) {
            let resElement = document.createElement("div");
            resElement.classList.add("res-elem");

            let budgForM = dohodForMontch(budg, perValue);
            budg += +budgForM;
            resElement.textContent = "Бюджет за " + i + "й месяц: " + budg.toFixed();
            block2.appendChild(resElement);
        };
        resForTime.textContent = budg.toFixed(2);
        percentMonth.textContent = null;
        percentForTime.textContent = null;
    } else {
        let div = document.querySelectorAll(".res-elem");
        div.forEach(function (item, i) {
            block2.removeChild(div[i]);
        });

        let resForMonth = +dohodForMontch(budgetValue, perValue).toFixed(2);
        percentMonth.textContent = resForMonth;

        let resAllMonth = +(resForMonth * timeValue).toFixed();
        percentForTime.textContent = resAllMonth;

        resForTime.textContent = budgetValue + resAllMonth;
    };

});


let appDate = {
    name: null,
    syrname: null,
    budget: 0,
    percent: 0,
    monts: 12,
    check: false,
    capitalize: false
};