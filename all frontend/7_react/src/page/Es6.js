import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/mysass.scss';
class Car{
  constructor(name){
    this.brand = name;
  }
}
const mycar = new Car("Ford");
console.log(mycar.brand);

const Es6 = () => {
  return(
    <Container>
      <Row>
        <Col>
        <h1 className="mt-5 mb-5">Es6 [ECMAScript 6]</h1>
        <pre>
        React를 사용하려면 아래와 같은 몇가지 ES6에 새로운 기능에 익숙해야함
        - Classes<br/>
        - Arrow functions<br/>
        - Variables(let, const, var)<br/>
        - Array Methods like<br/> 
        - Destructuring<br/>
        - Modules<br/>
        - Ternary Operator<br/>
        - Spread Operator<br/>
        </pre>

        <h1>class</h1>
        <pre>
        es6에서 클래스를 도입함<br/>
        클래스는 함수의 한 유형이지만 키워드를 사용하여 시작되고<br/>
        속성은 constructor()메서드 내에서 할당됨<br/>
        </pre>

        <h1>Arrow Function</h1>
        <p>화살표 함수를 사용하면 더 짧은 함수 구문을 작성할 수 있음<br/>
        명령문이 하나만 있고 명령문이 값을 리턴하는 경우 대괄호와 키워드를 제거할 수 있음<br/>
        매개변수가 있는 경우 괄호안에 매개변수를 전달함<br/>
        실제로 매개변수가 하나만 있는 경우 괄호도 건너뛸 수 있음<br/>
        </p>

        <h1>variable</h1>
        <pre>
        let : 값을 재할당하지 않음<br/>
        const : 상수는 값을 정의하지 않음<br/>
        var : 값을 재할당함<br/>
        </pre>
        </Col>
      </Row>
    </Container>
  )
}
export default Es6;