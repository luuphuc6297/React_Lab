import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
            <footer style={styles.footer}>
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="6">
                            <h5 className="title">Contact with us</h5>
                            <p>

                            </p>
                        </MDBCol>
                        <MDBCol md="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled">
                                    <a href="#!">Mobile Phone: 035 624 5244</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Email: luuphuc6297@gmail.com</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Facebook</a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </MDBContainer>
                </div>
            </footer>

    );
};

const styles={
    footer: {
        backgroundColor: "#64b5f6",
        height: "100%"
    }
};
export default FooterPage;