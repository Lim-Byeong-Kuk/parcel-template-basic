console.log('Hello Parcel!');

// async 비동기
async function test() {
  const promise = Promise.resolve(123);
  console.log(await promise); // promise 를 기다림
}

test();