import { inject, observer } from "mobx-react";
import { useEffect } from "react";

function Members(props) {
  const { membersStore } = props;
  const { members, member } = membersStore;
  useEffect(() => {
    membersStore.membersRead();
  }, [membersStore]);
  return (
    <div>
      <h3>Members</h3>
      <hr className="d-block" />
      <div>
        <h4>Read</h4>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Modify</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    placeholder="Name"
                    value={member.name}
                    onChange={(event) => {
                      member.name = event.target.value;
                    }}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Age"
                    value={member.age}
                    onChange={(event) => {
                      member.age = event.target.value;
                    }}
                  />
                </td>
                <td>
                  <button
                    onClick={() => membersStore.membersUpdate(index, member)}
                  >
                    Update
                  </button>
                  <button onClick={() => membersStore.membersDelete(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="d-block" />
      <div>
        <h4>Create</h4>
        <input
          type="text"
          placeholder="Name"
          value={member.name}
          onChange={(event) => {
            member.name = event.target.value;
          }}
        />
        <input
          type="text"
          placeholder="Age"
          value={member.age}
          onChange={(event) => {
            member.age = event.target.value;
          }}
        />
        <button onClick={() => membersStore.membersCreate()}>Create</button>
      </div>
    </div>
  );
}

export default inject("membersStore")(observer(Members));
