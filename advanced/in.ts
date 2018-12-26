// typeguard

interface Admin {
  id: string;
  role: string;
}

interface User {
  name: string;
}

// is를 통한 typeguard
// 매번 여러 타입마다 만들어주기 힘들 수 있다.
function isAdmin(user: Admin | User): user is Admin {
  return (user as Admin).role !== undefined;
}

// 이럴 때 in을 사용하자.
function redirect(user: Admin | User) {
  if ('role' in user) {
    console.log('admin!', user.role);
  } else {
    console.log('user!', user.name);
  }
}
