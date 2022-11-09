import { StyleSheet } from "react-native"

export const styles = {
  pagination: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  paginationDotActive: {
    backgroundColor: "#FFFFFF",
  },
  paginationDotInactive: {
    backgroundColor: "#6C6C6C",
  },
  buttonContainer: {
    width: "100%",
    height: 40,
    position: "absolute",
    bottom: 70,
    justifyContent: "center",
    flexDirection: "row",
  },
  button: {
    borderRadius: 30,
    width: 180,
    height: 40,
  },
  buttonNotLastSlide: {
    backgroundColor: "#FFFFFF",
  },
  buttonLastSlide: {
    backgroundColor: "#0085FF",
  },
  text: {
    fontFamily: "Fraunces_400Regular",
  },
  buttonTitleNotLastSlide: {
    color: "#000000",
  },
  buttonTitleLastSlide: {
    color: "#FFFFFF",
  }
};

export default styles;