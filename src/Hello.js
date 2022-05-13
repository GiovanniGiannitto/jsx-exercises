let hello = <h1>Hello, World!</h1>

function hello (name) {
    return <h1>Hello, {name}!</h1>
}

const sum = (a, b) => a + b;
const result = <h2>{sum(5, 2)}</h2>