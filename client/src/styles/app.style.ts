import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme: any) => ({
  App: {
    textAlign: "center",
    minHeight: "100vh",
    // padding: "1vh",
    margin: 0,
    boxSizing: "border-box",
  },
  title: {
    color: "red",
  },
}));
export default useStyle;
