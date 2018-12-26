// static property를 사용하려면 "strictPropertyInitialization" 옵션을 추가해주자.
// 물론, babel 쓸 경우는 괜찮음.

class Component {
  // public state: string[];
  // 이제 또 다른 문제, state의 initialize가 없다는 에러가 뜬다.
  // 이럴 때는 두 가지 방법이 있다.
  // public state: string[] | undefined;
  // 이렇게할 경우, 이  state를 사용할 때 마다 typeguard를 써야한다.
  // 또는 initialize를 해주자.
  // public state: string[] = ['Hello'];
  // 마지막 방법으로는,
  public state!: string[];
  public other: boolean = false;
  public others: boolean[] = [false];
  // !를 추가함으로서 type ensure.
}

const comp = new Component();

const matchState = comp.state.filter(state => state === 'some condition');
