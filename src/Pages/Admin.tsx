import Data from "../data.json";
import Frame from "../Components/Admin/Frame";

function Admin() {
  return (
    <>
      <span>Admin</span>
      <Frame Data={Data} />
    </>
  );
}

export default Admin;
