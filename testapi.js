async function testapi() {
    const actualFetch = await fetch('http://localhost:5005/api/UserFormFields');
    const data = await actualFetch.json();
    console.log(data);
    return data;
}

const formFields = testapi();
console.log(formFields);