import Times from "./Times";

function Current_page(props) {
    const curPage = props.curPage;

    if (curPage === "Services") {
        // Return the "Services" page.
    }
    else if (curPage === "Locations") {
        // Return the "Locations" page.
    }
    else if (curPage === "Times") {
        return <Times/>;
    }
    else if (curPage === "Details") {
        // Return the "Details" page.
    }
    else if (curPage === "Confirmation") {
        // Return the "Confirmation" page.
    }
    else {
        return <></>;
    }
}

export default Current_page;