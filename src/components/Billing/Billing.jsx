import React from "react";
import "./styles.scss";
import file from "../../assests/icons/pdf 1.png";

const Billing = () => {
  return (
    <div className="billing">
      <table>
        <tr>
          <th >ReferEnce ID</th>
          <th>DATE</th>
          <th>AMOUNT</th>
          <th>INVOICE</th>
        </tr>
        <tr>
          <td>4571222f6rthswfg9981fr55</td>
          <td>7/12/2020</td>
          <td>$28</td>
          <td>
            <img src={file} alt="file" />
          </td>
        </tr>
        <tr>
          <td>Griffin</td>
          <td>7/12/2020</td>
          <td>$36</td>
          <td>
            <img src={file} alt="file" />
          </td>
        </tr>
        <tr>
          <td>4571222f6rthswfg9981fr55</td>
          <td>7/12/2020</td>
          <td>$14</td>
          <td>
            <img src={file} alt="file" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Billing;
