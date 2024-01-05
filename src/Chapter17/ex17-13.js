function foo() {
}

Object.defineProperty(foo, "name", {writable:true});
// name 프로퍼티의 어트리뷰트의 wirtable 기본 속성은 false로 설정되어있기 떄문이다.

foo.name = 10;

foo.method = function () {
    console.log(this.name);
};

foo.method();