
//--------------------- TITLE -------------------------------
const title = React.createElement("h1", {
    style : {
        // color : "red",
        fontSize : "4rem",
        
    }
}, "Topics covered");

const pStyle = {
    // backgroundColor : "yellow",
    fontSize : "1.5rem",
    marginTop : "2rem",
    wordSpacing : "8px",
    lineHeight : "2.4rem"
}

const innerPara = {
    fontSize : "1.5rem",
    marginLeft : "1.5rem",
    wordSpacing : "8px",
    lineHeight : "2.4rem"
}

//--------------------- TITLE PARAGRAPH -------------------------------
const p = React.createElement("p", {
    style : pStyle
}, "The following is a list of all the topics we cover in the MDN learning area.")

//--------------------- GETTING START DIV -------------------------------
const anchorGetStart = React.createElement("a", {
    style : pStyle,
    href : "#"}, "Getting started with the web");

const pGetStart = React.createElement("p", {
    style : innerPara
}, "Provides a practical introduction to web development for complete beginners.")

const getStart = React.createElement("div", {}, [anchorGetStart, pGetStart]);

//--------------------- HTML DIV -------------------------------
const anchorHTML = React.createElement("a", {
    style : pStyle,
    href : "#"}, "HTML — Structuring the web");

const pHTML = React.createElement("p", {
    style : innerPara
}, "HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.")

const HTMLdiv = React.createElement("div", {}, [anchorHTML, pHTML]);

//--------------------- CSS DIV -------------------------------
const anchorCSS = React.createElement("a", {
    style : pStyle,
    href : "#"}, "CSS — Styling the web");

const pCSS = React.createElement("p", {
    style : innerPara
}, "CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.")

const CSSdiv = React.createElement("div", {}, [anchorCSS, pCSS]);

//--------------------- MAIN DIV -------------------------------
const main = React.createElement("div", {
    style : {
        backgroundColor : "white",
        padding : "4rem",
        width : "60%"
    }
}, [title, p, getStart, HTMLdiv, CSSdiv]);

//--------------------- CONTAINER DIV -------------------------------
const divContainer = React.createElement("div", {
    style : {
        display : "flex",
        alignItems : "center",
        justifyContent : "center",
        height : "100vh",
        backgroundColor : "black"
    }
}, main);


//--------------------- REACT-DOM -------------------------------
ReactDOM.render(divContainer, document.getElementById("root"));