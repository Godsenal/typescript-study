// unknown을 언제써야할까

interface DataService {
  getData(): any;
}

// api 콜로 가져오는 데이터는 any로 써야하는 경우가 대부분이다.
const service: DataService = {
  getData() {
    return 'hello';
  },
};
const response = service.getData();
console.log(response.a.b.c);
// 이때 unknown이 사용할만 하다. any는 위에 보이는 것처럼 모든지 할 수 있으므로, 위험하다.

interface DataService {
  getData(): unknown;
}

// 이렇게 unknown으로 해주면 에러가난다. 그러면 사용하는 의미가 없지 않는가?
// 하지만 타입추론을 통해서는 사용할 수 있다.
if (typeof response === 'string') {
  response.toUpperCase();
}
