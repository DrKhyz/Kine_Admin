import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {
  updateAdmin,
  updateName,
  updatePass,
  updateRole,
  resetAddUser
} from "./addUser.action";
import { getuserList } from "../users/user.action";
import AddUserView from "./addUser.view";

const AddUser = ({
  name,
  password,
  updateName,
  updatePass,
  updateAdmin,
  role,
  updateRole,
  getUserList,
  isAdmin,
  resetAddUser
}) => {
  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      updateRole("admin");
    } else {
      updateRole("user");
    }
  }, [updateRole, isAdmin]);

  const handleRegister = async (name, password, role) => {
    setAdd(false);
    const config = {
      method: "POST",
      baseURL: "http://localhost:3030",
      url: "/users",
      data: {
        name,
        password,
        role
      }
    };
    await axios.request(config);
    getUserList();
    resetAddUser();
  };

  if (!add) {
    return <button onClick={() => setAdd(true)}>Add User</button>;
  }

  return (
    <AddUserView
      name={name}
      password={password}
      handleRegister={handleRegister}
      updateName={updateName}
      updatePass={updatePass}
      updateAdmin={updateAdmin}
      isAdmin={isAdmin}
      role={role}
    />
  );
};

const mapStateToProps = store => {
  return {
    name: store.AddUserReducer.name,
    password: store.AddUserReducer.password,
    role: store.AddUserReducer.role,
    isAdmin: store.AddUserReducer.isAdmin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateName: name => dispatch(updateName(name)),
    updateAdmin: isAdmin => dispatch(updateAdmin(isAdmin)),
    updatePass: password => dispatch(updatePass(password)),
    updateRole: role => dispatch(updateRole(role)),
    getUserList: () => dispatch(getuserList()),
    resetAddUser: () => dispatch(resetAddUser())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);