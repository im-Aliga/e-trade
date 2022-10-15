function Getgallary() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    let item = ''
    basket.forEach(ele => {
        let sum = parseFloat(ele.Cost.slice(1)) * parseFloat(ele.Count)



        item += ` 
        <tr>
        <th class="mezi" scope="row">${ele.Id}</th>
        <td class="fezail" >
        <img src=${ele.Img} alt="">
        </td>
        <td class="mezi">${ele.Name}</td>
        <td class="mezi">
        <input id="inp" min="1" type="number" value="${ele.Count}">
        </td>
        <td class="mezi">${ele.Cost}</td>
        <td class="mezi"> ${sum}$</td>
        <td class="mezi"><i class="fa-solid fa-trash-can remove"></i></td>
        </tr>`




    });
    document.getElementById('body').innerHTML = item
}
Getgallary();
let input = document.querySelectorAll("#inp")
input.forEach(inp => {
    this.onchange = function (e) {
        let value = e.target.value
        let price = e.target.parentElement.parentElement.children[4].innerHTML
        let cut = price.slice(1)
        console.log(cut);
        e.target.parentElement.parentElement.children[5].innerHTML = cut * value + "$";


    }

})
let removers = document.querySelectorAll('.remove')


removers.forEach(rmv => {
    rmv.onclick = function () {
        let prId = this.parentElement.parentElement.children[0].innerHTML
        let prparent = this.parentElement.parentElement

        let basket = JSON.parse(localStorage.getItem('basket'));

        let arr = []
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].Id != prId) {
                arr.push(basket[i])

            } else {
                continue;
            }
        }
        prparent.style.display = 'none'

        localStorage.setItem('basket', JSON.stringify(arr))

        CountGalary();


    }
});

function CountGalary() {
    let basket = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('counter').innerHTML = basket.length
}
CountGalary();