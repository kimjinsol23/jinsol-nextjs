import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  var a = 1;
  var b = 5;
  var totla = a + b;
  console.log(totla);

  var items = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      메인페이지<br/>
      <a href="http://localhost:3000/company">Company 이동</a><br/>
      <Link href="/company">회사페이지ffffff{totla}</Link>
      <div>
        <ul>
          {items.map((item) => (
          <li key={item}>리스트 {item}</li>
        ))}
        </ul>
      </div>
    </div>
  );
}