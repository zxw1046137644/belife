
export default function () {
    console.log(11111);
    let a= 1;
    console.log(a);
}

// node直接运行ES6代码时，如使用了ES6的一些关键字，比如let，就需要严格模式，否则会报错
// 这是没有严格模式时候的错误提示
// SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
