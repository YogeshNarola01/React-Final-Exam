import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStatus, MultipleDelete, ViewRecord } from "../redux/actions/userAction";
import { Link, useNavigate } from "react-router-dom";
import { DeleteRecord } from "../redux/actions/userAction";
const View = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const allrec = useSelector((state) => state.userlist.userlist);
  console.log(allrec);

  const [muldel, setMuldel] = useState([])

  const muldelete = (i, checked) => {
    let deldata = [...muldel]
    if (checked) {
      deldata.push(i)
    }
    else {
      deldata = deldata.filter((val) => val.id != i)
    }
    setMuldel(deldata)
  }

  useEffect(() => {
    dispatch(ViewRecord());
  }, []);
  const handleStatusChange = (id, stat) => {
    dispatch(ChangeStatus(id, stat));
  };

  return (
    <div className="col-9 mx-auto py-5">
      <h1 className="text-center">View Data</h1>
      <table className="table table-info table-border table-hover text-center">
        <thead>
          <tr>
            {/* <th scope="col">Id</th> */}
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Password</th>
            <th scope="col">City</th>
            <th scope="col">Salary</th>
            <th scope="col">Designation</th>
            <th scope="col">Action</th>
            <th scope="col">Status</th>
            <th>
              {" "}
              <button
                className="btn bg-danger text-white"
                onClick={() => dispatch(MultipleDelete(muldel))}
              >
                Multiple Delete
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {allrec.map((i) => {
            return (
              <tr key={i.id}>
                {/* <th scope="row">{i.id}</th> */}
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.password}</td>
                <td>{i.city}</td>
                <td>{i.salary}</td>
                <td>{i.designation}</td>
                <td>
                  <button
                    className="btn bg-danger text-white"
                    key={i.id}
                    onClick={() => dispatch(DeleteRecord(i.id))}
                  >
                    Delete
                  </button>

                  <button
                    className="btn bg-warning mx-2 text-white"
                    onClick={() => nav("/Edit", { state: i })}
                  >
                    Edit
                  </button>
                </td>
                <td>
                <button className="btn btn-info text-light" onClick={(e) => handleStatusChange(i.id, i.stat)}>
                    {i.stat === 'active' ? 'Active' : 'Inactive'}
                  </button>
                </td>
                <td>
                  <input type="checkbox" name="" onChange={(e) => muldelete(e.target.checked)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn-info btn">
        <Link to={"/"} className="text-white">
          Add
        </Link>
      </button>
    </div>
  );
};

export default View;
