const Item = () => {
  return (
    <tr>
      <td>
        <div className="d-flex px-2">
          <div>
            <img
              src="../assets/img/small-logos/logo-xd.svg"
              className="avatar avatar-sm rounded-circle me-2"
              alt="xd"
            />
          </div>
          <div className="my-auto">
            <h6 className="mb-0 text-sm">Adobe XD</h6>
          </div>
        </div>
      </td>
      <td>
        <p className="text-sm font-weight-bold mb-0">$2,300</p>
      </td>
      <td>
        <span className="text-xs font-weight-bold">done</span>
      </td>
      <td className="align-middle text-center">
        <div className="d-flex align-items-center justify-content-center">
          <span className="me-2 text-xs font-weight-bold">100%</span>
          <div>
            <div className="progress">
              <div
                className="progress-bar bg-gradient-success"
                role="progressbar"
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </td>
      <td className="align-middle">
        <button
          className="btn btn-link text-secondary mb-0"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v text-xs" />
        </button>
      </td>
    </tr>
  );
};
export default Item;
