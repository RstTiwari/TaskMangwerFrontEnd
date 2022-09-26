import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  newTask: {
    color: "rgba(0,183,255, 1)",
    display: "felx",
    flex: 10,
  },
  text:{
    margin:"10px"
  },

  heading: {
    color: "rgba(0,183,255, 1)",
    display: "felx",
    flex: 70,
  },
  image: {
    marginLeft: "15px",
  },
}));
