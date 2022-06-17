import { useNavigate } from "react-router-dom";
function DeptAdd(props){

    const navigator = useNavigate();

    const insertSubmit=(e)=>{
        e.preventDefault();
        
        const param={};
        param.deptno = Number(e.target.deptno.value);
        param.dname = e.target.dname.value;
        param.loc = e.target.loc.value;

        console.log(param);

        fetch('http://localhost:8080/api/dept/',{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
                // 'Content-Type' : 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(param)
            // body: 'deptno='+param.deptno+"&danme="+param.dname+"&loc="+param.loc -> 컨트롤러에서 ModelAttribute로 받았을 경우 가능함
        })
        .then(res=>(res.json()))
        .then(result=>{
            // v6~ (~v5 : props.hitory.push('/dept'))
            console.log(result)
            navigator('/dept');
        });
    };

    return (
        <>
            <h1>Add page</h1>
            <form onSubmit={insertSubmit}>
                <div className="form-group">
                    <label>
                        <input type="text" className="form-control" name="deptno" placeholder="deptno"/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input type="text" className="form-control" name="dname" placeholder="dname"/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        <input type="text" className="form-control" name="loc" placeholder="loc"/>
                    </label>
                </div>
                <button type="submit" className="btn btn-default">Sign in</button>
            </form>
        </>
    );
}

export default DeptAdd;