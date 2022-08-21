// 1. Написати функцію, яка приймає в якості аргумента висоту прямокутника і його ширину, повертає площу прямокутника.
function areaOfARectangle (a,b){
    let result = a*b;
    return result;
}

// 2. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола.
function circumference (d) {
    let result = 3.14 *d;
    return result;
}

// 3. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.
function volumeOfTheCylinder (h,d){
    let result = ((3.14/4)*d**2)*h;
    return result;
}

// 4. Написати функцію, яка приймає два числа (діапазон) і виводити на консоль всі числа з цього діапазону, які діляться на 5. 
function div5 (a, b){
    for (let i=a; i <= b; i++) {
        if (i%5===0) {
            console.log(i);
        }    
    }
}

// 5. Реалізовати гру FizzBuzz для 100 чисел.
function gameFizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        if(i%3!==0 && i%5!==0){
        console.log (i);
        }
        else if(i%3==0 && i%5==0){
            console.log('FizzBuzz');
        }
        else if (i%3==0){
            console.log ('Fizz');
        }
        else if (i%5==0){
            console.log ('Buzz');
        }
    }
}

// * Написати функцію, яка приймає коефіцієнти квадратного рівняння і вирішує рівняння, і виводить на консоль можливі значення Х.
function quadraticEquation (a, b, c){
    if (a==0){
        console.log('а=0, вирішити неможливоб спробуйте ще раз');
    }else{
    let D=b*b-4*a*c;
    x1=(-b+Math.sqrt(D))/(2*a);
    x2=(-b-Math.sqrt(D))/(2*a);
    console.log('x1='+x1);
    console.log('x2='+x2);
    }
}
quadraticEquation(1, 4, -5);

