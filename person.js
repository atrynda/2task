
    // ==================================================================//
    // ==================================================================//
    // ==================================================================//
    var Person = function(first, last, age) {

            
        // Публичное свойство
        this.first = first;
        this.last = last;
        this.age = age;


        // // Приватная функция
        // var log = function(message) {
        //     console.log(message);
        // };
    
        // Публичный метод
        this.greeting = function(message) {
            console.log("Hi!" + message);
        };
    };




    var human = new Person('John', 'Doe', 20);
    console.log(" human: " + JSON.stringify(human));
    human.greeting(" HELLO ")
