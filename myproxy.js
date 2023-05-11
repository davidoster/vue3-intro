const target = {
    message1: "hello",
    message2: "everyone",
};

const handler2 = {
    get(target, prop) {
        // console.log(prop.valueOf());
        return `${target[prop.valueOf()]} world`;
    },

    // we don't need to use the set for Reactive Objects e.g. ReactiveEffect
    set(target, prop, value) {
        console.log(prop.valueOf());
        target[prop.valueOf()] = value;
    }
};

const proxy2 = new Proxy(target, handler2);
// console.log(proxy2); 
console.log(proxy2.message1); // hello world
console.log(proxy2.message2); // everyone world


// Don't do this
// function MyProxy(target, prop) {
//     return target[prop] + " world";
// }

// console.log(MyProxy(target, "message1")); // hello world