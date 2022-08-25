import React from "react";
import { Button, Modal } from "antd";
import DashLayout from "../../component/DashLayout";
import NewTrip from "../../component/NewTrip"
const ManageTrips = () => {
  return (
    <>
      <DashLayout menuSelectorIndex="3">
        {/* <h1> managers trips</h1> */}
        <Button> create Trip</Button>
      </DashLayout>
      <Modal title="Create New Trip" visible={true} onOk={()=>{}} onCancel={()=>{}}>
      <NewTrip/>
        </Modal>
    </>
  );
};

export default ManageTrips;
