import React from "react";

const Inbox = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade active show"
                id="inbox"
                aria-labelledby="inbox-tab"
                role="tabpanel"
              >
                <div>
                  <div className="row p-4 no-gutters align-items-center">
                    <div className="col-sm-12 col-md-6">
                      <h3 className="font-light mb-0">
                        <i className="ti-email mr-2"></i>350 Unread emails
                      </h3>
                    </div>
                  </div>
                  <div className="table-responsive rounded">
                    <table className="table email-table no-wrap table-hover v-middle mb-0 font-14">
                      <tbody>
                        <tr>
                          <td className="pl-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cst1"
                              />
                              <label
                                className="custom-control-label"
                                for="cst1"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <i className="fa fa-star text-warning"></i>
                          </td>
                          <td>
                            <span className="mb-0 text-muted">
                              Hritik Roshan
                            </span>
                          </td>
                          <td>
                            <a className="link" href="javascript: void(0)">
                              <span className="badge badge-pill text-white font-medium badge-danger mr-2">
                                Work
                              </span>
                              <span className="text-dark">
                                Lorem ipsum perspiciatis-
                              </span>
                            </a>
                          </td>
                          <td>
                            <i className="fa fa-paperclip text-muted"></i>
                          </td>

                          <td className="text-muted">May 13</td>
                        </tr>

                        <tr>
                          <td className="pl-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cst2"
                              />
                              <label
                                className="custom-control-label"
                                for="cst2"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <i className="fa fa-star"></i>
                          </td>

                          <td>
                            <span className="mb-0 text-muted">
                              Genelia Roshan
                            </span>
                          </td>

                          <td>
                            <a className="link" href="javascript: void(0)">
                              <span className="badge badge-pill text-white font-medium badge-info mr-2">
                                Business
                              </span>
                              <span className="text-dark">
                                Inquiry about license for Admin{" "}
                              </span>
                            </a>
                          </td>
                          <td>
                            <i className="fa fa-paperclip text-muted"></i>
                          </td>
                          <td className="text-muted">May 13</td>
                        </tr>
                        <tr>
                          <td className="pl-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cst3"
                              />
                              <label
                                className="custom-control-label"
                                for="cst3"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <i className="fa fa-star text-warning"></i>
                          </td>
                          <td className="user-name max-texts">
                            <span className="mb-0 text-muted font-light">
                              Ritesh Deshmukh
                            </span>
                          </td>
                          <td>
                            <a className="link" href="javascript: void(0)">
                              <span className="badge badge-pill text-white font-medium badge-warning mr-2">
                                Friend
                              </span>
                              <span className="font-light text-dark">
                                Bitbucket (commit Pushed) by Ritesh
                              </span>
                            </a>
                          </td>
                          <td>
                            <i className="fa fa-paperclip text-muted"></i>
                          </td>
                          <td className="text-muted font-light">May 13</td>
                        </tr>
                        <tr className="">
                          <td className="pl-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cst4"
                              />
                              <label
                                className="custom-control-label"
                                for="cst4"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <i className="fa fa-star"></i>
                          </td>
                          <td>
                            <span className="mb-0 text-muted font-light">
                              Akshay Kumar
                            </span>
                          </td>
                          <td>
                            <a className="link" href="javascript: void(0)">
                              <span className="badge badge-pill text-white font-medium badge-info mr-2">
                                Work
                              </span>
                              <span className="font-light text-dark">
                                Perspiciatis unde omnis- iste Lorem ipsum
                              </span>
                            </a>
                          </td>
                          <td>
                            <i className="fa fa-paperclip text-muted"></i>
                          </td>
                          <td className="text-muted font-light">May 9</td>
                        </tr>
                        <tr className="">
                          <td className="pl-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cst5"
                              />
                              <label
                                className="custom-control-label"
                                for="cst5"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <i className="fa fa-star"></i>
                          </td>
                          <td>
                            <span className="mb-0 text-muted font-light">
                              John Abraham
                            </span>
                          </td>
                          <td>
                            <a className="link" href="javascript: void(0)">
                              <span className="badge badge-pill text-white font-medium badge-success mr-2">
                                Work
                              </span>{" "}
                              <span className="font-light text-dark">
                                Lorem ipsum perspiciatis- unde omnis
                              </span>
                            </a>
                          </td>
                          <td>
                            <i className="fa fa-paperclip text-muted"></i>
                          </td>
                          <td className="text-muted font-light">Mar 10</td>
                        </tr>
                        <tr className="">
                          <td className="pl-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cst6"
                              />
                              <label
                                className="custom-control-label"
                                for="cst6"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <i className="fa fa-star text-warning"></i>
                          </td>
                          <td>
                            <span className="mb-0 text-muted font-light">
                              Akshay Kumar
                            </span>
                          </td>
                          <td>
                            <a className="link" href="javascript: void(0)">
                              <span className="badge badge-pill text-white font-medium badge-success mr-2">
                                Work
                              </span>{" "}
                              <span className="font-light text-dark">
                                Lorem ipsum perspiciatis - unde
                              </span>
                            </a>
                          </td>
                          <td>
                            <i className="fa fa-paperclip text-muted"></i>
                          </td>
                          <td className="text-muted font-light">Mar 09</td>
                        </tr>
                        <tr className="">
                          <td className="pl-3">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cst7"
                              />
                              <label
                                className="custom-control-label"
                                for="cst7"
                              >
                                &nbsp;
                              </label>
                            </div>
                          </td>
                          <td>
                            <i className="fa fa-star text-warning"></i>
                          </td>
                          <td>
                            <span className="mb-0 text-muted font-light">
                              Hanna Gover
                            </span>
                          </td>
                          <td>
                            <a className="link" href="javascript: void(0)">
                              <span className="badge badge-pill text-white font-medium badge-danger mr-2">
                                Work
                              </span>
                              <span className="font-light text-dark">
                                {" "}
                                Unde omnis Lorem ipsum perspiciatis
                              </span>
                            </a>
                          </td>
                          <td>
                            <i className="fa fa-paperclip text-muted"></i>
                          </td>
                          <td className="text-muted font-light">Mar 09</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="sent"
                aria-labelledby="sent-tab"
                role="tabpanel"
              >
                <div className="row p-3 text-dark">
                  <div className="col-md-6">
                    <h3 className="font-light">Lets check profile</h3>
                    <h4 className="font-light">
                      you can use it with the small code
                    </h4>
                  </div>
                  <div className="col-md-6 text-right">
                    <p>
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="spam"
                aria-labelledby="spam-tab"
                role="tabpanel"
              >
                <div className="row p-3 text-dark">
                  <div className="col-md-6">
                    <h3 className="font-light">
                      Come on you have a lot message
                    </h3>
                    <h4 className="font-light">
                      you can use it with the small code
                    </h4>
                  </div>
                  <div className="col-md-6 text-right">
                    <p>
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="delete"
                aria-labelledby="delete-tab"
                role="tabpanel"
              >
                <div className="row p-3 text-dark">
                  <div className="col-md-6">
                    <h3 className="font-light">Just do Settings</h3>
                    <h4 className="font-light">
                      you can use it with the small code
                    </h4>
                  </div>
                  <div className="col-md-6 text-right">
                    <p>
                      Donec pede justo, fringilla vel, aliquet nec, vulputate
                      eget, arcu. In enim justo, rhoncus ut, imperdiet a.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
