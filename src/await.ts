export {}

function wait(time: number = Math.floor(3000 * Math.random())) {
  return new Promise((resovle, reject) => {
    setTimeout(() => {
      resovle();
    }, time);
  });
}

async function signOut() {
  await wait(3000);
  console.log('sign out success');
}

async function afterSignOut() {
  await signOut();
  console.log('after sign out');
}

afterSignOut();