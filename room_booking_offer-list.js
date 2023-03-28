
function room_offer_lilst_cheker(days) {
    
    if (days <= 10) {
        let total_10_days_cost = 300 * days;
        return total_10_days_cost
    }
    else if (days <= 20) {
        total_10_days_cost = 3000;
        let remaining_days = days - 10;
        const days_20_cost_rate = remaining_days * 200;
        let total_20_days_cost = total_10_days_cost + days_20_cost_rate;
        return total_20_days_cost
    }
    else{
        total_20_days_cost=300*10+200*10;
        remaining_days=days-20;
        const total_any_days_cost=remaining_days*100+total_20_days_cost;
        return total_any_days_cost
    }
}

const result = room_offer_lilst_cheker(23)
// console.log(result)

const number=[1,2,3,4,9,5,8,10];
let new_number=[]
for(let i=0;i<number.length; i++){
    if(number[i]>3){
        new_number.push(number[i])
    }
}
console.log(new_number.length)
