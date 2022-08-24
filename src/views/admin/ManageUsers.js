import React from "react";
import DashLayout from "../../component/DashLayout";
import UsersTable from "../../component/admin/UsersTable";
const ManagerUsers = () => {
  return (
    <DashLayout menuSelectorIndex="2">
      <UsersTable/>
    </DashLayout>
  );
};

export default ManagerUsers;
