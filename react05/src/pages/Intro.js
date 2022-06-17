import { useEffect, useState } from "react";

export default function Intro(props){

    const [data, setData] = useState([]);

    // 결과를 json으로 -> callback 함수가 받아온 json 데이터를 data에 -> setData(data)
    // then의 결과값이 그 다음 then의 파라미터가 됨
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            <h1>Intro page</h1>
            <ul className="list-group">
                {data.map((ele, idx)=>(
                    <li key={ele.id} className="list-group-item">{ele.title}</li>
                ))}
            </ul>
        </>
    );
}