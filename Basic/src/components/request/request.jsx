import Fetcher1 from "./fecher1";
import Fetcher2 from "./fecher2";

const Request = () => {
  const fetchInformation = async () => {
    //const result = await Fetcher1();
    //console.log(result);
    Fetcher2();
  };

  return (
    <>
      <button onClick={fetchInformation}> Click </button>
      <br />
      <br />
    </>
  );
};
export default Request;
