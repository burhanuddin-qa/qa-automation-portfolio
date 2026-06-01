// let name = 'burhanuddin';
// let experience = 2.5;
// let isQAEngineer = true;
 

// console.log('Name:', name);
// console.log('Experience:', experience);
// console.log('Is QA Engineer:', isQAEngineer);



// let testSite = 'https://automationexercise.com';
// let totalTests = 3;
// let allTestsPassed = true;

// console.log('Website:', testSite);
// console.log('Total Tests:', totalTests);
// console.log('All Passed:', allTestsPassed);


// function loginTest() {
//     console.log('Step 1: Website khol raha hoon');
//     console.log('Step 2: Email type kar raha hoon');
//     console.log('Step 3: Password type kar raha hoon');
//     console.log('Step 4: Login button click kar raha hoon');
//     console.log('Test complete!');
// }

// loginTest();


// function loginTest(email, password) {

//     console.log('email=', email);
//     console.log('passowrd=', password);
//     console.log('click login button');
// }

// loginTest('burhan.qsol@gmai.com', 'helloclaude');
// loginTest('burhanuddinquaid@gmail.com, helloclaude');


// const email = 'burhan@uddin.com';
// const password = 'hello123';

// function loginTest(email, password) {
//     console.log('Email:', email);
//     console.log('Password:', password);
// }

// loginTest(email, password);


// const email = 'burhan@uddin.com';

// function emailCredential(email) {
//     console.log('Function ka email:', email);
// }

// console.log('Global email:', email);
// emailCredential('claude@trainer.com');


// const testEmail = 'qa@fitnfi.com';
// const testPass = 'fitnfi123';
// const wrongEmail = 'wrong@test.com';
// const wrongPass = 'wrongpass';

// function loginTest(email, password) {
//     console.log('Testing with:', email, password);
// }

// loginTest(wrongEmail, wrongPass);
// loginTest(testEmail, testPass);


function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// async function openWebsite() {
//     console.log('Step 1: Website khol raha hoon...');
//     await delay(2000);
//     console.log('Step 2: Website khul gayi!');
//     await delay(1000);
//     console.log('Step 3: Email type kar raha hoon...');
//     await delay(1000);
//     console.log('Step 4: Login button click kiya!');
//     console.log('Test complete!');
// }

// openWebsite();

// Bina async await ke
function testWithoutAwait() {
    console.log('Step 1: Website khol raha hoon');
    delay(2000);
    console.log('Step 2: Email type kar raha hoon');
    delay(1000);
    console.log('Step 3: Login button click kiya');
}

testWithoutAwait();